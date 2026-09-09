export type Silo =
  | "Hemorroides"
  | "Síntomas"
  | "Procedimientos"
  | "Colon y prevención"
  | "Otras patologías"

export interface BlogPost {
  slug: string
  title: string
  description: string
  /** Silo de contenido. Define el agrupamiento y el enlazado interno. */
  category: Silo
  /** Keyword primaria del artículo. Documenta la intención; no se renderiza. */
  keyword: string
  /** Un solo pilar por silo: es el artículo largo al que enlazan sus satélites. */
  esPilar?: boolean
  dateLabel: string
  dateISO: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hemorroides-guia-completa",
    title: "Hemorroides: cómo identificarlas y qué tratamiento necesita cada grado",
    description:
      "Cómo identificar hemorroides, en qué grado están y qué tratamiento corresponde a cada una. Guía de un coloproctólogo en Puebla. Agenda tu valoración.",
    category: "Hemorroides",
    keyword: "hemorroides",
    esPilar: true,
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "9 min",
  },
  {
    slug: "sangrado-al-evacuar-causas",
    title: "Sangrado al evacuar: qué lo causa y cuándo sí debe preocuparte",
    description:
      "Sangrar al evacuar no siempre son hemorroides. Aprende a distinguir el sangrado benigno del que requiere estudio. Valoración con coloproctólogo en Puebla.",
    category: "Síntomas",
    keyword: "sangrado al evacuar",
    esPilar: true,
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "8 min",
  },
  {
    slug: "primera-consulta-proctologo",
    title: "Tu primera consulta con el proctólogo: qué se hace y por qué no duele",
    description:
      "Qué se hace exactamente en una consulta proctológica, cómo prepararte y por qué no duele. Resolvemos el miedo que retrasa el diagnóstico. Puebla.",
    category: "Procedimientos",
    keyword: "consulta proctologo",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "7 min",
  },
  {
    slug: "cuanto-duele-cirugia-hemorroides",
    title: "¿Cuánto duele realmente la cirugía de hemorroides? La verdad sin exagerar",
    description:
      "El Dr. José Manuel Fernández, coloproctólogo en Puebla, explica con honestidad qué tanto duele la cirugía de hemorroides, cómo se controla el dolor y qué esperar en la recuperación real.",
    category: "Hemorroides",
    keyword: "duele cirugia hemorroides",
    dateLabel: "1 de julio de 2026",
    dateISO: "2026-07-01",
    readTime: "7 min",
  },
]

/** Artículo pilar de un silo, para el enlazado interno de los satélites. */
export function pilarDe(silo: Silo): BlogPost | undefined {
  return blogPosts.find((p) => p.category === silo && p.esPilar)
}
