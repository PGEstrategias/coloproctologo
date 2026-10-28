import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "fisura-anal-sintomas-tratamiento")!

export const metadata: Metadata = {
  title: "Fisura anal: síntomas, causas y tratamiento",
  description: post.description,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: post.title,
  description: post.description,
  datePublished: post.dateISO,
  dateModified: post.dateISO,
  author: {
    "@type": "Physician",
    name: "Dr. José Manuel Fernández Rivero",
    identifier: "Cédula profesional 2914327 / Especialidad 4743089",
    medicalSpecialty: "Coloproctología",
  },
  reviewedBy: {
    "@type": "Physician",
    name: "Dr. José Manuel Fernández Rivero",
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. José Manuel Fernández Rivero - Coloproctólogo",
    address: "Av 23 Pte 4303, Belisario Domínguez, 72180 Puebla, México",
  },
}

const h2 = "text-xl sm:text-2xl font-bold text-gray-900 mb-3"
const h3 = "font-bold text-gray-900 text-base sm:text-lg mt-6 mb-2"
const p = "text-gray-700 leading-relaxed text-sm sm:text-base"
const link = "text-green-700 font-medium underline underline-offset-2 hover:text-green-800"

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
          <span className="text-green-600 mt-0.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const comparison = [
  ["Qué es", "Una pequeña herida o desgarro en el canal anal", "Venas inflamadas dentro o alrededor del ano"],
  ["Dolor", "Suele ser intenso, como cortada o ardor, durante y después de evacuar", "Las internas casi no duelen; las externas pueden doler si se trombosan"],
  ["Sangrado", "Poca sangre roja brillante en el papel o en las heces", "Sangre roja brillante, a veces más abundante, frecuentemente sin dolor"],
  ["Duración del dolor", "Puede durar minutos u horas después de evacuar", "Variable; molestia o presión más que dolor punzante"],
  ["Bolita", "Puede haber una pequeña elevación de piel junto a la fisura crónica", "Bulto blando que puede salir al pujar"],
]

const faqs = [
  {
    q: "¿Una fisura anal se cura sola?",
    a: "Muchas fisuras agudas mejoran en algunas semanas al ablandar las evacuaciones, evitar pujar y aplicar el tratamiento indicado por el médico. Cuando los síntomas duran más de seis a ocho semanas, se habla de fisura crónica y es más probable que necesite un tratamiento adicional.",
  },
  {
    q: "¿Por qué duele tanto una fisura si es tan pequeña?",
    a: "El canal anal tiene muchas terminaciones nerviosas. Además, el dolor provoca que el músculo esfínter se contraiga, lo que reduce el flujo de sangre a la herida y dificulta que cicatrice. Así se forma un círculo de dolor, espasmo y mala cicatrización.",
  },
  {
    q: "¿Es lo mismo una fisura que una hemorroide?",
    a: "No. La fisura es una herida en la piel del canal anal; las hemorroides son venas inflamadas. Ambas pueden producir sangrado, pero el dolor intenso al evacuar es más típico de la fisura. Pueden coexistir, por lo que conviene una exploración médica.",
  },
  {
    q: "¿Puedo usar cualquier pomada para la fisura?",
    a: "No es recomendable automedicarse por tiempo prolongado. Algunas pomadas con anestésicos o corticoides alivian temporalmente, pero su uso continuo puede irritar la piel. Las pomadas que relajan el esfínter se usan bajo indicación médica, ya que pueden causar efectos secundarios como dolor de cabeza.",
  },
  {
    q: "¿La cirugía de fisura puede causar incontinencia?",
    a: "La esfinterotomía lateral interna tiene una tasa alta de curación, pero implica cortar una pequeña porción del músculo esfínter interno, por lo que existe un riesgo bajo de alteraciones leves en el control de gases o heces. El cirujano valora cada caso y explica riesgos y alternativas antes de decidir.",
  },
  {
    q: "¿Cuándo debo consultar a un coloproctólogo en Puebla?",
    a: "Si el dolor al evacuar dura más de una o dos semanas, si el sangrado se repite, si la fisura vuelve a aparecer o si hay síntomas como fiebre, pus o pérdida de peso, solicita una valoración. También es importante descartar otras causas de sangrado.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Anal Fissure.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Anal-Fissure.aspx"],
  ["National Health Service (NHS). Anal fissure.", "https://www.nhs.uk/conditions/anal-fissure/"],
  ["MedlinePlus en español. Trastornos del ano.", "https://medlineplus.gov/spanish/analdisorders.html"],
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        ctaTitle="Agenda una valoración de fisura anal en Puebla"
        ctaSubtitle="Si tienes dolor intenso al evacuar, ardor que dura horas o sangrado que se repite, una revisión especializada permite confirmar el diagnóstico y elegir el tratamiento adecuado."
        reviewerNote="La información de este artículo no sustituye una consulta médica. No uses pomadas con corticoides por tiempo prolongado sin indicación."
        summary={
          <>
            Una <strong>fisura anal</strong> es una pequeña herida en el canal anal que provoca dolor intenso durante y después de evacuar, a menudo con un poco de sangre roja brillante. La mayoría de las fisuras recientes mejoran con <strong>tratamiento sin cirugía</strong>: evacuaciones blandas, baños de asiento y pomadas indicadas por el médico. Si duran más de seis a ocho semanas o regresan con frecuencia, pueden requerir tratamientos adicionales, incluida una cirugía menor.
          </>
        }
      >
        <div>
          <p className={p}>
            “Siento como si me cortaran al evacuar” es una de las frases que más se escuchan en consulta. Muchas personas creen que tienen hemorroides, pero el dolor intenso al ir al baño, seguido de ardor que dura minutos u horas, es la señal más característica de una fisura anal. La buena noticia es que, cuando se trata a tiempo, la mayoría cicatriza sin necesidad de cirugía.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué es una fisura anal</h2>
          <p className={p}>
            Es un desgarro o herida alargada en la piel que recubre el canal anal. Generalmente se localiza en la parte posterior del ano, aunque también puede presentarse en la parte anterior. Se clasifica según su duración:
          </p>
          <Bullets
            items={[
              <><strong>Fisura aguda:</strong> de aparición reciente, parece una cortada superficial y suele mejorar con medidas conservadoras.</>,
              <><strong>Fisura crónica:</strong> persiste más de seis a ocho semanas. Puede acompañarse de una pequeña elevación de piel (llamada “colgajo centinela”) y es más difícil que cierre sin tratamiento específico.</>,
            ]}
          />
        </div>

        <div>
          <h2 className={h2}>Síntomas más frecuentes</h2>
          <Bullets
            items={[
              "Dolor agudo, como cortada o desgarro, al evacuar.",
              "Ardor o dolor que puede durar minutos u horas después de ir al baño.",
              "Pequeñas cantidades de sangre roja brillante en el papel o en la superficie de las heces.",
              "Miedo a evacuar por el dolor, lo que a su vez empeora el estreñimiento.",
              "Comezón o irritación alrededor del ano.",
              "Una pequeña bolita de piel junto al ano en fisuras crónicas.",
            ]}
          />
          <p className={`${p} mt-4`}>
            El miedo a evacuar es importante: retrasar la ida al baño endurece las heces, la siguiente evacuación lastima más la herida y la fisura no termina de cerrar.
          </p>
        </div>

        <div>
          <h2 className={h2}>Fisura anal o hemorroides: ¿cómo diferenciarlas?</h2>
          <p className={`${p} mb-4`}>
            Ambas son causas comunes de sangrado, pero se comportan de forma distinta. Esta tabla es orientativa; el diagnóstico se confirma con exploración.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-gray-900">
                <tr>
                  <th className="p-3 sm:p-4 font-bold">Característica</th>
                  <th className="p-3 sm:p-4 font-bold">Fisura anal</th>
                  <th className="p-3 sm:p-4 font-bold">Hemorroides</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {comparison.map(([feature, fissure, hemorrhoids]) => (
                  <tr key={feature}>
                    <td className="p-3 sm:p-4 font-medium text-gray-900 align-top">{feature}</td>
                    <td className="p-3 sm:p-4 align-top">{fissure}</td>
                    <td className="p-3 sm:p-4 align-top">{hemorrhoids}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${p} mt-4`}>
            Si quieres conocer otras causas de sangrado, revisa{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className={link}>Sangrado al evacuar: causas posibles y cuándo preocuparte</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Por qué aparece una fisura</h2>
          <p className={p}>
            La causa más común es el paso de heces duras o voluminosas, aunque también puede aparecer con diarrea frecuente. Otros factores asociados son:
          </p>
          <Bullets
            items={[
              "Estreñimiento y pujo excesivo.",
              "Tono elevado del esfínter anal interno, que reduce el flujo de sangre a la zona.",
              "Parto, por la presión sobre la región anal.",
              "Enfermedad inflamatoria intestinal, como enfermedad de Crohn.",
              "Algunas infecciones o lesiones locales.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Cuando una fisura aparece en una posición poco habitual, es múltiple o no responde al tratamiento, el médico puede buscar otras causas subyacentes.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cómo se diagnostica</h2>
          <p className={p}>
            En la mayoría de los casos basta con la historia clínica y una revisión cuidadosa de la zona anal: separando suavemente los glúteos suele observarse la fisura. Si hay mucho dolor, el médico puede evitar maniobras molestas como el tacto rectal en la primera visita. En personas con factores de riesgo, sangrado atípico o cambios en las evacuaciones, puede indicarse una colonoscopia para descartar otras causas.
          </p>
        </div>

        <div>
          <h2 className={h2}>Tratamiento sin cirugía</h2>
          <p className={p}>El objetivo es que las evacuaciones sean suaves, reducir el espasmo del esfínter y permitir que la herida cicatrice.</p>
          <h3 className={h3}>Medidas en casa</h3>
          <Bullets
            items={[
              "Aumentar la fibra en la dieta (frutas, verduras, leguminosas, cereales integrales) o usar un suplemento de fibra si el médico lo indica.",
              "Beber suficiente agua a lo largo del día.",
              "No retrasar la ida al baño ni pujar con fuerza.",
              "Baños de asiento con agua tibia de 10 a 15 minutos, especialmente después de evacuar.",
              "Limpiar la zona con suavidad, sin frotar, y evitar toallitas perfumadas.",
            ]}
          />
          <h3 className={h3}>Medicamentos</h3>
          <p className={p}>
            Según el caso, el médico puede indicar pomadas que relajan el esfínter (como nitroglicerina o diltiazem tópicos), analgésicos y ablandadores de heces. Estos medicamentos tienen dosis y posibles efectos secundarios, por lo que deben usarse con indicación médica.
          </p>
          <h3 className={h3}>Toxina botulínica</h3>
          <p className={p}>
            En fisuras que no responden a las pomadas, puede aplicarse toxina botulínica en el esfínter para relajarlo temporalmente y facilitar la cicatrización. Es una alternativa para algunos pacientes antes de considerar cirugía.
          </p>
        </div>

        <div>
          <h2 className={h2}>¿Cuándo se necesita cirugía?</h2>
          <p className={p}>
            Se considera cuando una fisura crónica no mejora después de un tratamiento conservador adecuado o regresa con frecuencia. El procedimiento más utilizado es la <strong>esfinterotomía lateral interna</strong>: se corta una pequeña porción del esfínter interno para disminuir el espasmo y mejorar el flujo de sangre, lo que permite que la fisura cicatrice.
          </p>
          <p className={`${p} mt-3`}>
            Tiene una alta tasa de éxito y la mayoría de los pacientes nota alivio del dolor en pocos días. Como toda cirugía, tiene riesgos —entre ellos, un riesgo bajo de alteraciones leves en el control de gases o heces—, por lo que la decisión se toma de forma individual. En casos seleccionados pueden considerarse otras técnicas que no involucran el músculo.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Consulta pronto si además presentas:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Sangrado abundante o con coágulos",
              "Fiebre, pus o hinchazón dolorosa cerca del ano",
              "Pérdida de peso sin explicación",
              "Cambios persistentes en tus evacuaciones",
              "Dolor que no mejora después de dos semanas de cuidados",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">{item}</p></div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={h2}>Cómo prevenir que vuelva a aparecer</h2>
          <p className={p}>
            Una fisura puede reaparecer si regresa el estreñimiento. Mantener una dieta con fibra, hidratarse bien, hacer actividad física y atender el estreñimiento o la diarrea de forma oportuna son las mejores medidas para evitar recaídas. Si el estreñimiento es frecuente en tu caso, lee{" "}
            <Link href="/blog/estrenimiento-cronico-causas-tratamiento" className={link}>Estreñimiento crónico: causas, tratamiento y cuándo consultar</Link>.
          </p>
        </div>

        <div>
          <h2 className={`${h2} mb-4`}>Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{faq.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Referencias</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
            {references.map(([label, href]) => (
              <li key={href}>
                {label}{" "}
                <a href={href} target="_blank" rel="noopener noreferrer" className={link}>Consultar fuente</a>
              </li>
            ))}
          </ol>
        </div>
      </BlogPostLayout>
    </>
  )
}
