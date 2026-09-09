import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "dolor-al-defecar")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "describir", label: "Cómo describir tu dolor" },
  { id: "causas", label: "Las 6 causas más frecuentes" },
  { id: "como-se-trata", label: "Cómo se identifica cuál es la tuya" },
  { id: "cuando-acudir", label: "Cuándo es urgencia" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Por qué duele horas después de evacuar?",
    respuesta:
      "Es el patrón típico de la fisura anal. El paso de la evacuación abre la herida y desencadena un espasmo del esfínter que se mantiene por su cuenta durante horas. El dolor no viene de la herida en sí, sino de ese músculo contraído.",
  },
  {
    pregunta: "¿Los baños de asiento sirven?",
    respuesta:
      "Sí, como medida de alivio: el agua tibia relaja el esfínter y reduce el espasmo, que es la parte del dolor que más incomoda. No curan la causa, pero hacen tolerable la espera hasta la consulta.",
  },
  {
    pregunta: "¿Se quita solo?",
    respuesta:
      "Una fisura aguda puede cerrar sola si se corrige el estreñimiento a tiempo. Un absceso no: requiere drenaje. Y una fisura que lleva semanas tiende a cronificarse porque el espasmo impide que cicatrice.",
  },
  {
    pregunta: "¿Puedo tomar analgésico?",
    respuesta:
      "Un analgésico de uso común puede ayudar mientras acudes a valoración. Evita automedicarte con algo que no tomas habitualmente, y no uses el analgésico para posponer la consulta: el dolor anal intenso siempre tiene una causa identificable.",
  },
  {
    pregunta: "¿Cuándo debo ir a urgencias?",
    respuesta:
      "Si el dolor viene con fiebre, con una zona endurecida y caliente cerca del ano, o si es tan intenso que no te permite sentarte ni caminar. Ese cuadro sugiere absceso, y el absceso no se resuelve con medicamento.",
  },
]

const causas = [
  {
    n: "1",
    titulo: "Fisura anal",
    dolor: "Cortante, como vidrio, durante la evacuación y por horas después",
    detalle:
      "Una herida lineal en el canal anal. Es la causa más frecuente de dolor anal intenso y la que más se confunde con hemorroides. Suele acompañarse de sangrado escaso, rojo brillante, en el papel.",
  },
  {
    n: "2",
    titulo: "Hemorroide externa trombosada",
    dolor: "Súbito, constante, con bulto duro palpable en el borde del ano",
    detalle:
      "Un coágulo dentro de una hemorroide externa. Aparece de golpe, con frecuencia tras un esfuerzo o un episodio de estreñimiento. El dolor es máximo en las primeras horas y luego cede lentamente.",
  },
  {
    n: "3",
    titulo: "Absceso perianal",
    dolor: "Creciente, palpitante, con fiebre y zona endurecida y caliente",
    detalle:
      "Una colección de pus junto al ano. Es la única de esta lista que constituye urgencia quirúrgica: requiere drenaje, y ningún antibiótico lo sustituye.",
  },
  {
    n: "4",
    titulo: "Proctalgia fugaz",
    dolor: "Punzada intensa y breve, sin relación con la evacuación",
    detalle:
      "Episodios de segundos o pocos minutos, a menudo nocturnos, que ceden solos. La exploración es normal. Es un diagnóstico que se hace descartando lo demás, no asumiéndolo.",
  },
  {
    n: "5",
    titulo: "Espasmo del elevador del ano",
    dolor: "Presión sorda y profunda, como estar sentado sobre algo",
    detalle:
      "Contractura de la musculatura del piso pélvico. Suele empeorar al permanecer sentado mucho tiempo y no tiene relación directa con evacuar.",
  },
  {
    n: "6",
    titulo: "Criptitis",
    dolor: "Ardor persistente, con sensación de cuerpo extraño",
    detalle:
      "Inflamación de las criptas anales. Puede ser el paso previo a un absceso, así que un ardor que no cede merece revisión, no tolerancia.",
  },
]

export default function Page() {
  return (
    <>
      <ArticleSchema
        titulo={post.title}
        descripcion={post.description}
        slug={post.slug}
        fechaPublicacion={post.dateISO}
        condicion="Dolor anal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="el dolor al defecar"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="El dolor anal intenso siempre tiene una causa identificable, y la mayoría se resuelven sin cirugía. La valoración es discreta y toma menos de 30 minutos."
        reviewerNote="El dolor anal con fiebre requiere atención el mismo día."
        summary={
          <>
            El dolor al defecar rara vez son hemorroides: las hemorroides internas no duelen. <strong>La causa más frecuente de dolor anal intenso es la fisura anal</strong>, seguida de la hemorroide externa trombosada y del absceso perianal. El tipo de dolor, su duración y si hay fiebre son los datos que más orientan el diagnóstico.
          </>
        }
      >
        <div>
          <h2 id="describir" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cómo describir tu dolor
          </h2>
          <p className="text-gray-700">
            En proctología, la descripción del dolor orienta más que cualquier otro dato de la historia clínica. Es lo primero que se pregunta en una consulta de coloproctología en Puebla, y tres preguntas separan casi todas las causas:
          </p>
          <ul className="space-y-2 mt-3">
            {[
              ["¿Qué tipo de dolor es?", "Cortante y agudo, punzante y breve, o una presión sorda y profunda."],
              ["¿Cuándo aparece?", "Durante la evacuación, después de ella, o sin ninguna relación con evacuar."],
              ["¿Cuánto dura?", "Segundos, minutos, horas, o es constante."],
            ].map(([p, d]) => (
              <li key={p} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>
                  <strong>{p}</strong> {d}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            Vale la pena anotarlo antes de la consulta. Con esos tres datos, más la exploración, la mayoría de los casos quedan resueltos en la primera visita.
          </p>
        </div>

        <div>
          <h2 id="causas" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Las 6 causas más frecuentes
          </h2>
          <div className="space-y-3">
            {causas.map((c) => (
              <div key={c.titulo} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                  {c.n}. {c.titulo}
                </h3>
                <p className="text-green-800 text-sm font-medium mb-1.5">{c.dolor}</p>
                <p className="text-gray-700">{c.detalle}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4">
            Si además del dolor te palpaste algo, revisa{" "}
            <Link href="/blog/bolita-en-el-ano" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              qué puede ser una bolita en el ano
            </Link>
            . Y si el síntoma que más te preocupa es la sangre, la guía sobre{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              sangrado al evacuar
            </Link>{" "}
            lo aborda a fondo.
          </p>
        </div>

        <TreatmentBlock titulo="Cómo se identifica cuál es la tuya">
          <p>
            La exploración proctológica resuelve la mayoría de estos diagnósticos en pocos minutos: la fisura se ve, la trombosis se palpa, el absceso se identifica por el endurecimiento y el calor local. Es una consulta breve, en consultorio, aquí en Puebla.
          </p>
          <p>
            Cuando hay dolor intenso previo, se aplica anestésico tópico antes de explorar. Si aun así el dolor impide la exploración, se difiere: primero se controla el dolor, después se explora. Nunca se fuerza.
          </p>
          <p>
            El tratamiento cambia por completo según la causa. Una fisura se maneja con medidas dirigidas a romper el espasmo; una trombosis, según el tiempo de evolución; un absceso requiere drenaje. Por eso automedicarse con pomada retrasa más de lo que alivia.
          </p>
        </TreatmentBlock>

        <RedFlags
          titulo="Cuándo es urgencia"
          intro="Busca atención el mismo día si el dolor viene con:"
          senales={[
            "Fiebre o escalofríos",
            "Zona endurecida, caliente y muy sensible junto al ano",
            "Dolor que no te permite sentarte ni caminar",
            "Salida de pus",
            "Imposibilidad de orinar",
            "Malestar general que empeora en horas",
          ]}
        />
      </BlogPostLayout>
    </>
  )
}
