import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "fisura-anal")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "que-es", label: "Qué es y por qué duele tanto" },
  { id: "espasmo", label: "El círculo vicioso del espasmo" },
  { id: "aguda-cronica", label: "Aguda o crónica: por qué importa" },
  { id: "vs-hemorroide", label: "Fisura o hemorroide: cómo se distinguen" },
  { id: "como-se-trata", label: "Tratamiento: primero romper el espasmo" },
  { id: "cirugia", label: "Cuándo se opera" },
  { id: "prevencion", label: "Cómo evitar que vuelva" },
  { id: "cuando-acudir", label: "Cuándo acudir" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Por qué duele horas después de evacuar?",
    respuesta:
      "Porque el dolor no viene de la herida, sino del espasmo del esfínter que la herida desencadena. El músculo se contrae y se mantiene contraído por su cuenta, mucho después de que terminó la evacuación. Ese es el rasgo que más distingue a la fisura.",
  },
  {
    pregunta: "¿Se cura sin cirugía?",
    respuesta:
      "Una fisura aguda, tratada a tiempo y con el estreñimiento corregido, tiene buenas probabilidades de cerrar con manejo médico. La fisura crónica responde menos, porque el espasmo mantenido impide que el tejido cicatrice. En ambos casos el manejo médico se intenta primero.",
  },
  {
    pregunta: "¿Cuánto tarda en sanar?",
    respuesta:
      "Depende de si es aguda o crónica y de qué tan corregido quede el hábito intestinal. No hay un plazo único y desconfía de quien te dé una cifra sin explorarte. Se estima en la valoración.",
  },
  {
    pregunta: "¿La cirugía afecta la continencia?",
    respuesta:
      "Es una preocupación legítima y hay que plantearla en la consulta. Cualquier procedimiento sobre el esfínter conlleva ese riesgo, y por eso la cirugía se reserva para los casos que no cedieron con manejo médico. Es parte de lo que se explica antes de decidir, y una pregunta que deberías hacer.",
  },
  {
    pregunta: "¿Puede volver?",
    respuesta:
      "Sí, si persiste la causa. La fisura aparece por el paso de evacuaciones duras y por el pujo; si eso no cambia, el tejido vuelve a desgarrarse. Por eso el tratamiento no termina cuando cierra la herida.",
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
        condicion="Fisura anal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="la fisura anal"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="La fisura anal tiene tratamiento y la mayoría no llega a cirugía cuando se atiende a tiempo. La valoración es discreta y toma menos de 30 minutos."
        reviewerNote="Una fisura que lleva semanas tiende a cronificarse; conviene no postergar la valoración."
        summary={
          <>
            La fisura anal es una herida lineal en el canal anal. Duele mucho más de lo que su tamaño sugiere porque desencadena un espasmo del esfínter que se mantiene horas después de evacuar. <strong>Es la causa más frecuente de dolor anal intenso y la que más se confunde con hemorroides.</strong> Tratada a tiempo, la mayoría no llega a cirugía.
          </>
        }
      >
        <div>
          <h2 id="que-es" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué es y por qué duele tanto
          </h2>
          <p className="text-gray-700">
            Una fisura anal es un desgarro lineal en el revestimiento del canal anal. Es pequeña: muchas veces mide unos pocos milímetros.
          </p>
          <p className="text-gray-700 mt-3">
            La desproporción entre su tamaño y el dolor que produce es lo que desconcierta a los pacientes. La explicación está en dónde se ubica. La fisura ocurre por debajo de la línea dentada, en tejido con inervación completa para el dolor: la misma razón por la que las hemorroides externas duelen y las internas no.
          </p>
          <p className="text-gray-700 mt-3">
            Se produce casi siempre por el paso de una evacuación dura, o por el pujo sostenido. También puede aparecer tras episodios de diarrea intensa o después del parto.
          </p>
        </div>

        <div>
          <h2 id="espasmo" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            El círculo vicioso del espasmo
          </h2>
          <p className="text-gray-700 mb-4">
            Entender este mecanismo explica todo el tratamiento, así que vale la pena seguirlo paso a paso:
          </p>
          <ol className="space-y-3">
            {[
              "La evacuación dura desgarra el canal anal.",
              "El dolor hace que el esfínter se contraiga de forma refleja.",
              "El esfínter contraído reduce el flujo de sangre a la zona.",
              "Con menos irrigación, la herida no cicatriza.",
              "Al no cicatrizar, sigue doliendo con cada evacuación.",
              "Y el paciente empieza a aguantarse las ganas por miedo al dolor, lo que endurece más la evacuación siguiente.",
            ].map((paso, i) => (
              <li key={paso} className="flex gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 font-bold text-xs flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{paso}</span>
              </li>
            ))}
          </ol>
          <p className="text-gray-700 mt-4">
            El círculo se cierra sobre sí mismo. Por eso una fisura que &ldquo;debería&rdquo; sanar en días puede llevar meses: <strong>mientras el espasmo siga, la herida no tiene condiciones para cerrar</strong>. Todo el tratamiento médico apunta a romper ese punto de la cadena.
          </p>
        </div>

        <div>
          <h2 id="aguda-cronica" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Aguda o crónica: por qué importa
          </h2>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Fisura aguda</h3>
              <p className="text-gray-700">
                Reciente. Se ve como un desgarro limpio, sin cambios en los bordes. Responde bien al manejo médico si se corrige el estreñimiento pronto.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Fisura crónica</h3>
              <p className="text-gray-700">
                Lleva semanas o meses. Los bordes se engrosan, puede aparecer un colgajo de piel en el extremo externo y tejido de más en el interno. Responde menos al manejo médico porque el espasmo ya se instaló.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            La diferencia no es académica: define qué tan probable es resolverla sin cirugía. Es la razón concreta por la que posponer la consulta cuesta caro en este padecimiento.
          </p>
        </div>

        <div>
          <h2 id="vs-hemorroide" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Fisura o hemorroide: cómo se distinguen
          </h2>
          <p className="text-gray-700 mb-4">
            Es la confusión más común en consulta. La mayoría de los pacientes con fisura llegan convencidos de tener hemorroides, y llevan semanas usando pomadas que no atacan el problema.
          </p>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left font-bold text-gray-900 p-3 rounded-tl-lg">&nbsp;</th>
                  <th className="text-left font-bold text-gray-900 p-3">Fisura anal</th>
                  <th className="text-left font-bold text-gray-900 p-3 rounded-tr-lg">Hemorroide interna</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dolor", "Intenso, cortante, persiste horas", "No duele"],
                  ["Sangrado", "Escaso, en el papel", "Puede gotear, más abundante"],
                  ["Al evacuar", "Se teme la evacuación", "Se tolera"],
                  ["Bulto", "Puede haber colgajo si es crónica", "Puede salir tejido al pujar"],
                ].map(([campo, fisura, hemorroide]) => (
                  <tr key={campo} className="border-b border-gray-200">
                    <td className="p-3 text-gray-900 font-medium align-top">{campo}</td>
                    <td className="p-3 text-gray-700 align-top">{fisura}</td>
                    <td className="p-3 text-gray-700 align-top">{hemorroide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">
            La regla práctica: <strong>si duele mucho, rara vez son hemorroides internas.</strong> Si quieres el detalle del otro lado, está en la guía sobre{" "}
            <Link href="/blog/hemorroides-guia-completa" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              hemorroides
            </Link>
            .
          </p>
        </div>

        <TreatmentBlock titulo="Tratamiento: primero romper el espasmo">
          <p>
            El manejo médico es la primera línea, y ataca los dos extremos del círculo vicioso a la vez. Es lo que se plantea en una consulta de coloproctología en Puebla antes de considerar cualquier cirugía.
          </p>
          <p>
            <strong>Ablandar la evacuación.</strong> Fibra, hidratación y, cuando hace falta, apoyo indicado por el médico. Sin esto, cualquier otra medida se pierde en la siguiente evacuación dura.
          </p>
          <p>
            <strong>Relajar el esfínter.</strong> Es lo que permite que llegue sangre a la herida y pueda cicatrizar. Los baños de asiento con agua tibia ayudan, y existe tratamiento tópico dirigido específicamente a este punto, que se indica en consulta.
          </p>
          <p>
            <strong>Controlar el dolor</strong>, para romper el reflejo de aguantarse las ganas de evacuar.
          </p>
        </TreatmentBlock>

        <div>
          <h2 id="cirugia" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cuándo se opera
          </h2>
          <p className="text-gray-700">
            La cirugía se plantea cuando la fisura crónica no cedió con manejo médico bien llevado, o cuando el dolor es incapacitante y no responde.
          </p>
          <p className="text-gray-700 mt-3">
            No es el primer recurso, y hay una razón concreta: el procedimiento actúa sobre el esfínter, y eso conlleva un riesgo sobre la continencia que debe pesarse caso por caso. La técnica que corresponde a tu situación se define en la valoración.
          </p>
          <p className="text-gray-700 mt-3">
            Es una conversación que vale la pena tener completa antes de decidir. Pregunta qué técnica se propone, por qué esa, y qué riesgos tiene en tu caso concreto. Cualquier coloproctólogo en Puebla debería responderte eso sin rodeos.
          </p>
        </div>

        <div>
          <h2 id="prevencion" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cómo evitar que vuelva
          </h2>
          <p className="text-gray-700 mb-3">
            El tratamiento no termina cuando cierra la herida. Si el hábito intestinal no cambia, la fisura reaparece.
          </p>
          <ul className="space-y-2">
            {[
              "Mantén la fibra y el agua después de que el dolor haya cedido, no solo durante el episodio.",
              "No pospongas la urgencia de evacuar: la materia fecal retenida se endurece.",
              "No pujes. Si no sale, mejor levantarse e intentar más tarde.",
              "Sal del inodoro al terminar. El tiempo sentado de más congestiona la zona.",
              "Si tomas medicamentos que estriñen, coméntalo en consulta para ajustar el manejo.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <RedFlags
          intro="Acude a valoración sin postergar si presentas:"
          senales={[
            "Dolor anal intenso que persiste después de evacuar",
            "Dolor que lleva más de dos semanas sin ceder",
            "Miedo a evacuar por el dolor que anticipas",
            "Fiebre o salida de pus (sugiere absceso, no fisura)",
            "Sangrado que aumenta en cantidad",
            "Fisura que reaparece tras haber cerrado",
          ]}
        />
      </BlogPostLayout>
    </>
  )
}
