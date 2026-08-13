#!/usr/bin/env bash
# Vitrina — estado desplegado en un comando. Solo curl + grep.
set -uo pipefail
APP="https://vitrina-blond.vercel.app"
OUT="vitrina-state.md"
CB="cb=$(date +%s)"
{
echo "# Vitrina — estado desplegado"
echo
echo "Generado: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo
echo "- HTTP /: $(curl -o /dev/null -s -w '%{http_code}' "$APP" 2>/dev/null)"
echo
echo '## /api/health (booleanos, nunca valores)'
echo '```'
curl -fsSL "$APP/api/health?$CB" 2>/dev/null || echo "(sin respuesta)"
echo
echo '```'
echo
echo '## Candado: un visitante sin clave NO debe recibir el pack'
RESP=$(curl -fsSL -m 90 -X POST "$APP/api/verdicto" -H "Content-Type: application/json" \
  -d '{"productId":"vitrina","texto":"almacén de barrio, vendo abarrotes, bebidas, cigarros y completos al mediodía..."}' 2>/dev/null)
echo '```'
if [ -z "$RESP" ]; then echo "(sin respuesta)"; else
  echo "full=$(printf '%s' "$RESP" | grep -o '\"full\":[a-z]*' | head -1 | cut -d: -f2) pasos_entregados=$(printf '%s' "$RESP" | grep -o '\"dia\":[0-9]*' | wc -l | tr -d ' ') soluciones=$(printf '%s' "$RESP" | grep -o '\"solucion\":' | wc -l | tr -d ' ') totalMs=$(printf '%s' "$RESP" | grep -o '\"totalMs\":[0-9]*' | head -1 | cut -d: -f2)"
fi
echo '```'
echo "Esperado: full=false, pasos_entregados=8, soluciones=1."
} > "$OUT"
echo "escrito $OUT"
