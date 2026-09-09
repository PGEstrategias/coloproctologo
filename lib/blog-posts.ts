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
  /**
   * Título del <title>, con marca incluida y máximo 60 caracteres.
   * Se pasa como `absolute` para que la plantilla del layout no lo alargue.
   */
  seoTitle: string
  /** Un solo pilar por silo: es el artículo largo al que enlazan sus satélites. */
  esPilar?: boolean
  dateLabel: string
  dateISO: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hemorroides-guia-completa",
    seoTitle: "Hemorroides: síntomas y grados | Proctólogo Puebla",
    title: "Hemorroides: cómo identificarlas y qué tratamiento necesita cada grado",
    description:
      "Cómo identificar hemorroides, en qué grado están y qué tratamiento corresponde a cada grado. Guía completa de un coloproctólogo certificado en Puebla.",
    category: "Hemorroides",
    keyword: "hemorroides",
    esPilar: true,
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "9 min",
  },
  {
    slug: "sangrado-al-evacuar-causas",
    seoTitle: "Sangrado al evacuar: causas | Proctólogo Puebla",
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
    seoTitle: "Primera consulta con el proctólogo en Puebla",
    title: "Tu primera consulta con el proctólogo: qué se hace y por qué no duele",
    description:
      "Qué se hace exactamente en una consulta con el proctólogo, cómo prepararte y por qué no duele. Resolvemos el miedo que retrasa el diagnóstico. Puebla.",
    category: "Procedimientos",
    keyword: "consulta proctologo",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "7 min",
  },
  {
    slug: "hemorroides-tratamiento-puebla",
    title: "Tratamiento de hemorroides en Puebla: todas las opciones",
    seoTitle: "Tratamiento de hemorroides en Puebla",
    description:
      "Qué opciones existen para tratar hemorroides, desde el manejo conservador hasta la cirugía, y cómo se decide cuál te corresponde. Coloproctólogo en Puebla.",
    category: "Hemorroides",
    keyword: "tratamiento hemorroides puebla",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "8 min",
  },
  {
    slug: "dolor-al-defecar",
    title: "Dolor al defecar: 6 causas frecuentes y cómo distinguirlas",
    seoTitle: "Dolor al defecar: 6 causas | Proctólogo Puebla",
    description:
      "El dolor al evacuar casi nunca son hemorroides. Aprende a distinguir la fisura, la trombosis y el absceso por el tipo de dolor. Coloproctólogo en Puebla.",
    category: "Síntomas",
    keyword: "dolor al defecar",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "8 min",
  },
  {
    slug: "bolita-en-el-ano",
    title: "Bolita en el ano: qué puede ser y qué no debes hacer",
    seoTitle: "Bolita en el ano: qué puede ser | Puebla",
    description:
      "Te palpaste una bolita en el ano y quieres saber qué es. Las causas posibles, de la más común a la más grave, y qué no debes hacer. Proctólogo en Puebla.",
    category: "Síntomas",
    keyword: "bolita en el ano",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "8 min",
  },
  {
    slug: "colonoscopia-que-es-como-prepararse",
    title: "Colonoscopia: qué es, cómo prepararse y qué esperar",
    seoTitle: "Colonoscopia: qué es y cómo prepararse",
    description:
      "Qué es una colonoscopia, quién debe hacérsela y cómo es la preparación, paso a paso. Lo que sí incomoda y lo que no. Coloproctólogo certificado en Puebla.",
    category: "Colon y prevención",
    keyword: "colonoscopia preparacion",
    esPilar: true,
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "10 min",
  },
  {
    slug: "sintomas-cancer-de-colon",
    title: "Señales tempranas de cáncer de colon: qué vigilar",
    seoTitle: "Señales de cáncer de colon | Proctólogo Puebla",
    description:
      "El cáncer de colon es silencioso al inicio, pero deja señales. Cuáles son, a qué edad empezar a estudiarse y por qué es de los más prevenibles. Puebla.",
    category: "Colon y prevención",
    keyword: "sintomas cancer de colon",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "9 min",
  },
  {
    slug: "fisura-anal",
    title: "Fisura anal: el dolor que no cede y cómo se trata",
    seoTitle: "Fisura anal: el dolor que no cede | Puebla",
    description:
      "La fisura anal duele mucho más que una hemorroide y se confunde con ella todo el tiempo. Cómo se distingue, cómo se trata y cuándo se opera. En Puebla.",
    category: "Otras patologías",
    keyword: "fisura anal",
    dateLabel: "9 de septiembre de 2026",
    dateISO: "2026-09-09",
    readTime: "8 min",
  },
  {
    slug: "cuanto-duele-cirugia-hemorroides",
    seoTitle: "¿Cuánto duele la cirugía de hemorroides?",
    title: "¿Cuánto duele realmente la cirugía de hemorroides? La verdad sin exagerar",
    description:
      "Cuánto duele realmente la cirugía de hemorroides, cómo se controla el dolor y qué esperar de la recuperación real. Sin exagerar. Proctólogo en Puebla.",
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
