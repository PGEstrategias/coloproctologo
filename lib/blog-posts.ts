export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  dateLabel: string
  dateISO: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-duele-cirugia-hemorroides",
    title: "¿Cuánto duele realmente la cirugía de hemorroides? La verdad sin exagerar",
    description:
      "El Dr. José Manuel Fernández, coloproctólogo en Puebla, explica con honestidad qué tanto duele la cirugía de hemorroides, cómo se controla el dolor y qué esperar en la recuperación real.",
    category: "Hemorroides",
    dateLabel: "1 de julio de 2026",
    dateISO: "2026-07-01",
    readTime: "7 min",
  },
  {
    slug: "sangrado-al-evacuar-causas",
    title: "Sangrado al evacuar: 7 causas posibles y cuándo debes preocuparte",
    description:
      "El Dr. José Manuel Fernández, coloproctólogo en Puebla, explica las causas más comunes del sangrado al evacuar y qué señales indican que necesitas valoración médica.",
    category: "Síntomas",
    dateLabel: "8 de julio de 2026",
    dateISO: "2026-07-08",
    readTime: "8 min",
  },
]
