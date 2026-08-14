# Vitrina

**Tu vitrina la ve el vecino que pasa. No el que compra por el teléfono.**

## La afirmación estructural

**Un almacén de barrio no está fuera de las plataformas por no querer: está fuera porque nadie transcribe su inventario a la ficha estructurada que esas plataformas exigen. Vitrina convierte una foto en esa ficha.**

La barrera es de formato, no de tecnología: las plataformas exigen una ficha estructurada por producto y el almacenero no tiene quien se la escriba. Ninguna plataforma va a pagar por digitalizar a un local que todavía no le vende.

**Para quién es la salida:** el distribuidor o la app que decide si te carga en su catálogo. No para quien sube el documento. Ese es el
movimiento: la categoría es la misma que la de otros, el destinatario no.

## Competencia, nombrada

Rappi Turbo, Cornershop y PedidosYa tienen equipos de onboarding para cadenas, no para almacenes de barrio. Nuestra ficha sale en su formato: somos su capa de captación, no su competencia.

Sube una foto de lo que vendes y recibe el catálogo listo para mandar por WhatsApp, con precios sugeridos y publicaciones escritas.

Entrada a **Build with Gemini XPRIZE** (xprize.devpost.com) · Categoría **Small Business Services**.

## Qué hace

1. Subes foto de tu mercadería, carta o lista de precios — o lo escribes
2. Gemini lo lee de forma multimodal y devuelve un **veredicto, no un resumen**
3. Sale un artefacto accionable: diagnóstico, plan de 14 pasos y lo que te queda listo para usar
4. Un agente de QA revisa el artefacto antes de que lo veas
5. Escribes por WhatsApp, recibes el link de pago de monto fijo ($4.990) y el pack llega por ahí mismo

El contacto va **antes** del pago a propósito: Mercado Pago no devuelve al comprador
al sitio, así que cualquier instrucción posterior al pago queda en una pantalla que
ya no ve. Con entrega manual no se le cobra a alguien a quien no se puede escribir.

## Privacidad

Las fotos se procesan en el momento y no se almacenan.

## Dónde se niega

- **El agente de QA rechaza el artefacto** si no es accionable, si afirma datos que
  no entregaste, o si no cumple el criterio de seguridad del rubro.
- **Un pack incompleto se niega a ser entregado**: si vuelven menos de 14 pasos o
  menos de 2 artefactos, la vista de entrega bloquea al operador.
- **El candado falla cerrado**: sin `PACK_KEY` nadie recibe el pack completo, ni el
  operador. Lo que no se pagó no sale del servidor.
- **El detector de idioma** marca cualquier texto en inglés antes de que llegue al cliente.
- **Input insuficiente se dice, no se adivina.**

## Pipelines

| # | Pipeline | Archivo |
|---|---|---|
| 1 | Lector multimodal del documento | `lib/verdicto.js` |
| 2 | Diagnóstico con evidencia | `lib/verdicto.js` |
| 3 | Plan de 14 pasos | `lib/verdicto.js` |
| 4 | Artefactos listos para usar | `lib/verdicto.js` |
| 5 | Agente de QA (accionable · fundado · seguro · claro) | `lib/verdicto.js` |
| 6 | Cadena de respaldo de 4 modelos | `lib/motor.js` |
| 7 | Guarda de completitud con reintento presupuestado | `lib/verdicto.js` |
| 8 | Gobernador del techo de 60s | `app/api/verdicto/route.js` |
| 9 | Candado de entitlement server-side | `app/api/verdicto/route.js` |
| 10 | Log de evidencia a la rama `logs` | `lib/oplog.js` |

Auditable desde afuera:

```bash
curl -s "https://vitrina-blond.vercel.app/api/health"
curl -s "https://vitrina-blond.vercel.app/api/health?full=1"
```

## Reuso declarado

Este proyecto comparte patrón técnico e infraestructura con otras entradas del mismo
autor (motor de veredictos: documento real → lectura multimodal → veredicto →
artefacto accionable → desbloqueo pagado → todo logueado). Las reglas del concurso
permiten reusar plantillas, frameworks y código previo siempre que se declare, y acá
se declara. Lo distinto es el negocio: otro cliente, otro problema, otro artefacto,
otra distribución.

## Dev

```bash
cp .env.example .env.local   # completar GEMINI_API_KEY
npm install
npm run dev
```

Ninguna clave va al repo ni al chat: solo al store de secretos de la plataforma.
