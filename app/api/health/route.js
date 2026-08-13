// Sonda: env presentes (booleanos, nunca valores) y, con ?full=1, el pipeline
// real contra un input canned. Permite auditar desde afuera sin dashboard.
import { NextResponse } from "next/server";
import { generateVerdicto } from "../../../lib/verdicto";
import { qaVerdicto } from "../../../lib/verdicto";
import { logRun } from "../../../lib/oplog";
import { PRODUCTO } from "../../../lib/producto";

export const runtime = "nodejs";
export const maxDuration = 60;

const CANNED = "almacén de barrio, vendo abarrotes, bebidas, cigarros y completos al mediodía...";

export async function GET(req) {
  const full = new URL(req.url).searchParams.get("full") === "1";
  const env = {
    GEMINI_API_KEY: Boolean(process.env.GEMINI_API_KEY),
    GEMINI_MODEL: process.env.GEMINI_MODEL || "(default en codigo: gemini-3.6-flash)",
    GITHUB_PAT: Boolean(process.env.GITHUB_PAT),
    NEXT_PUBLIC_WSP_NUMBER: Boolean(process.env.NEXT_PUBLIC_WSP_NUMBER),
    PACK_KEY: Boolean(process.env.PACK_KEY),
  };
  if (!full) return NextResponse.json({ ok: true, producto: PRODUCTO.id, env });

  const t0 = Date.now();
  const steps = {};
  try {
    const t1 = Date.now();
    const { data, model } = await generateVerdicto({ productId: PRODUCTO.id, texto: CANNED });
    steps.verdicto = {
      ok: true, ms: Date.now() - t1, model,
      pasos: (data.ruta || []).length,
      drills: (data.drills || []).length,
      completo: data.completo === true,
      ingles: data.ingles || [],
    };

    const t2 = Date.now();
    try {
      const qaMs = Math.min(18000, 48000 - (Date.now() - t0));
      if (qaMs < 4000) throw new Error("sin presupuesto para QA");
      const qa = await Promise.race([
        qaVerdicto(data, PRODUCTO.id),
        new Promise((_, rej) => setTimeout(() => rej(new Error("qa timeout")), qaMs)),
      ]);
      steps.qa = { ok: true, ms: Date.now() - t2, ...qa };
    } catch (e) {
      steps.qa = { ok: false, ms: Date.now() - t2, reason: String(e?.message || e) };
    }

    const t3 = Date.now();
    const r = await logRun({ type: "health", producto: PRODUCTO.id, ts: new Date().toISOString() });
    steps.oplog = { ok: r.ok, ms: Date.now() - t3, status: r.status || null };

    return NextResponse.json({ ok: true, producto: PRODUCTO.id, env, totalMs: Date.now() - t0, steps });
  } catch (err) {
    return NextResponse.json(
      { ok: false, producto: PRODUCTO.id, env, totalMs: Date.now() - t0, steps, error: String(err?.message || err) },
      { status: 500 }
    );
  }
}
