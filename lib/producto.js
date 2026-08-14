// Configuracion del producto. Un repo, un negocio.
export const PRODUCTO = {
  "id": "vitrina",
  "categoria": "Small Business Services",
  "nombre": "Vitrina",
  "tagline": "Tu vitrina la ve el vecino que pasa. No el que compra por el teléfono.",
  "subtitulo": "Saca una foto de lo que vendes hoy y recibe la ficha que un distribuidor o una app de delivery puede cargar directo, más los textos para vender por WhatsApp.",
  "inputLabel": "Foto de tu mercadería, carta o lista de precios",
  "inputAlt": "O escribe qué vendes",
  "altPlaceholder": "Ej: almacén de barrio, vendo abarrotes, bebidas, cigarros y completos al mediodía...",
  "precio": "$4.990",
  "ancla": "una fracción de lo que cobra un diseñador",
  "mpLink": "https://mpago.la/2rMuFsU",
  "privacidad": "Las fotos se procesan en el momento y no se almacenan.",
  "prompt": "Eres el asistente de Vitrina, un servicio chileno que convierte la foto del inventario de un negocio pequeño en material de venta listo para usar.\n\nTu tarea, en español de Chile, tono práctico de comerciante (nada de jerga de marketing):\n1. DIAGNÓSTICO: identifica qué vende el negocio y evalúa su presentación comercial actual (variedad, claridad de precios, ganchos, qué le falta para vender más).\n2. CATÁLOGO / PLAN de 14 días: acciones concretas para armar y difundir su catálogo (qué fotografiar, cómo ordenar, qué promoción probar, cuándo publicar). Una acción por día, realizable en menos de 30 minutos.\n3. PUBLICACIONES: textos listos para copiar y pegar en WhatsApp Estado o Instagram, con precio y llamada a la acción.\nNo inventes precios si no hay información: sugiere rangos y dilo explícitamente.\n\nDESTINATARIO DEL ARTEFACTO: lo que produces no es para quien lo sube, es para el distribuidor o la app que decide si te carga en su catálogo. Escríbelo en el registro y con la estructura que ESE destinatario espera recibir.\n\nCUÁNDO NEGARTE: Si la foto no permite leer productos concretos, NO inventes catálogo: pide una foto mejor y di exactamente qué no se distingue. Un precio inventado en una ficha que un distribuidor carga es un problema comercial real.",
  "schema": "{\n  \"resumen\": \"2-3 frases: qué vende, cómo se ve hoy y qué va a lograr\",\n  \"prueba\": \"Vitrina\",\n  \"diagnostico\": [ { \"eje\": \"aspecto comercial evaluado\", \"nivel\": \"fuerte\" | \"medio\" | \"debil\", \"evidencia\": \"qué se ve en la foto o el texto\" } ],\n  \"drills\": [ { \"eje\": \"publicación lista\", \"enunciado\": \"el texto completo listo para copiar y pegar\", \"alternativas\": [\"A) versión corta\", \"B) versión con precio\", \"C) versión con promoción\", \"D) versión para estado de WhatsApp\"], \"correcta\": \"A\", \"solucion\": \"cuándo conviene usar cada versión\" } ],\n  \"ruta\": [ { \"dia\": 1, \"foco\": \"acción del día\", \"tarea\": \"qué hacer exactamente (menos de 30 min)\", \"porque\": \"qué gana con eso\" } ]\n}\nLa ruta debe tener 14 entradas. Los drills: 2 publicaciones listas.",
  "claim": "Un almacén de barrio no está fuera de las plataformas por no querer: está fuera porque nadie transcribe su inventario a la ficha estructurada que esas plataformas exigen. Vitrina convierte una foto en esa ficha.",
  "barrera": "La barrera es de formato, no de tecnología: las plataformas exigen una ficha estructurada por producto y el almacenero no tiene quien se la escriba. Ninguna plataforma va a pagar por digitalizar a un local que todavía no le vende.",
  "destinatario": "el distribuidor o la app que decide si te carga en su catálogo",
  "competidores": "Rappi Turbo, Cornershop y PedidosYa tienen equipos de onboarding para cadenas, no para almacenes de barrio. Nuestra ficha sale en su formato: somos su capa de captación, no su competencia.",
  "labels": {
    "plan": "Tus 14 días para entrar a las plataformas",
    "artefactos": "Tu ficha de producto, lista para cargar"
  }
};
