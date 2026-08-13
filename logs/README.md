# Log de operaciones

Cada run del pipeline appendea una linea JSONL a logs/runs-YYYY-MM-DD.jsonl
via la API de GitHub desde Vercel: modelo usado, completitud del artefacto,
veredictos del agente de QA y tiempos por etapa.

Escrito por agentes, no a mano. Es la evidencia de operacion AI-native.
