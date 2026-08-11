const STORAGE_PREFIX = "pf_session_"

// Identificador anónimo por flujo (preconsulta / experiencia). No contiene
// información personal, solo un UUID aleatorio guardado en sessionStorage.
export function getOrCreateSessionId(flow: "research" | "experience"): string {
  if (typeof window === "undefined") return ""

  const key = `${STORAGE_PREFIX}${flow}`
  const existing = window.sessionStorage.getItem(key)
  if (existing) return existing

  const id = crypto.randomUUID()
  window.sessionStorage.setItem(key, id)
  return id
}
