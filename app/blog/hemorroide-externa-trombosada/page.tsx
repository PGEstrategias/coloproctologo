import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "hemorroide-externa-trombosada")!

export const metadata: Metadata = {
  title: "Hemorroide externa trombosada: qué hacer y cuándo drenarla",
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

const timeline = [
  ["Primeros 2 a 3 días", "Es la etapa de mayor dolor e inflamación. El bulto se siente duro y tenso, y sentarse o evacuar puede ser muy molesto."],
  ["Días 4 a 7", "El dolor empieza a disminuir poco a poco conforme el cuerpo reabsorbe el coágulo. El bulto se vuelve más blando."],
  ["Semanas 2 a 3", "En la mayoría de los casos el bulto se reduce de forma importante. Puede quedar un pequeño pliegue de piel (colgajo) que normalmente no causa dolor."],
]

const faqs = [
  {
    q: "¿Es peligrosa una hemorroide trombosada?",
    a: "Por lo general no es peligrosa, aunque sí muy dolorosa. El coágulo queda atrapado en una vena pequeña bajo la piel del ano y no viaja a otras partes del cuerpo. Aun así, conviene una valoración para confirmar el diagnóstico y descartar otras causas de dolor, como un absceso o una fisura.",
  },
  {
    q: "¿Puedo reventarla o pincharla yo mismo?",
    a: "No. Intentar drenarla en casa puede causar sangrado, infección y más dolor, y además no siempre se retira todo el coágulo. Si el dolor es intenso y apenas comenzó, un coloproctólogo puede valorar si conviene retirarla de forma segura en el consultorio con anestesia local.",
  },
  {
    q: "Se reventó sola y está sangrando, ¿qué hago?",
    a: "Es relativamente común que la piel se abra y salga un poco de sangre oscura o coágulos; muchas veces el dolor mejora después. Aplica presión suave con una gasa limpia, haz baños de asiento y mantén la zona limpia. Si el sangrado es abundante, no se detiene o tienes mareo, busca atención médica de inmediato.",
  },
  {
    q: "¿Me van a tener que operar?",
    a: "La mayoría de las hemorroides trombosadas mejoran sin cirugía. Si el dolor es muy intenso en los primeros días, retirar el coágulo con un procedimiento menor puede dar alivio más rápido. La cirugía de hemorroides solo se considera cuando hay episodios repetidos o hemorroides internas avanzadas.",
  },
  {
    q: "¿Puede volver a pasar?",
    a: "Sí. Para reducir el riesgo, evita pujar, no pases mucho tiempo sentado en el baño, consume suficiente fibra y agua, y trata el estreñimiento o la diarrea. Si los episodios se repiten, consulta para valorar un tratamiento definitivo.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Hemorrhoids.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Hemorrhoids.aspx"],
  ["National Health Service (NHS). Piles (haemorrhoids).", "https://www.nhs.uk/conditions/piles-haemorrhoids/"],
  ["MedlinePlus en español. Hemorroides.", "https://medlineplus.gov/spanish/hemorrhoids.html"],
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
        ctaTitle="¿Bulto doloroso en el ano? Agenda una valoración en Puebla"
        ctaSubtitle="En los primeros días es cuando más se puede hacer para aliviar el dolor. Revisamos el bulto y te decimos si conviene retirarlo o manejarlo en casa."
        reviewerNote="Este artículo es informativo. Si tienes fiebre, sangrado abundante o un dolor que empeora en lugar de mejorar, busca atención médica pronto."
        summary={
          <>
            Una <strong>hemorroide externa trombosada</strong> se produce cuando se forma un <strong>coágulo dentro de una hemorroide</strong> bajo la piel del ano. Aparece como un bulto morado, duro y muy doloroso, a menudo después de pujar o de un episodio de estreñimiento o diarrea. El dolor es más intenso en los <strong>primeros 2 a 3 días</strong> y suele mejorar en 1 a 2 semanas. Si se atiende en las primeras 72 horas, retirar el coágulo puede dar un alivio más rápido.
          </>
        }
      >
        <div>
          <p className={p}>
            Es una de las causas más frecuentes de consulta urgente en coloproctología: de un día para otro aparece un bulto en el ano que duele al sentarse, al caminar y al evacuar. Aunque asusta, se trata de un problema común y con buen pronóstico. Saber qué esperar y qué hacer en cada etapa ayuda a pasar el episodio con menos dolor.
          </p>
        </div>

        <div>
          <h2 className={h2}>¿Qué es una hemorroide trombosada?</h2>
          <p className={p}>
            Las hemorroides son estructuras normales formadas por pequeñas venas en el canal anal. Las <strong>externas</strong> están por debajo de la piel, en el borde del ano. Cuando la sangre de una de ellas se estanca y se coagula, la vena se distiende de golpe y la piel, que es muy sensible en esta zona, se estira y duele. Eso es la trombosis.
          </p>
          <p className={`${p} mt-3`}>
            Es distinta de las hemorroides internas, que suelen manifestarse con sangrado sin dolor. Si quieres entender esa diferencia, lee{" "}
            <Link href="/blog/grados-de-hemorroides-tratamiento" className={link}>Grados de hemorroides: qué tratamiento necesita cada uno</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Síntomas y causas</h2>
          <h3 className={h3}>Síntomas típicos</h3>
          <Bullets
            items={[
              "Bulto en el borde del ano, de aparición repentina.",
              "Color morado o azulado, consistencia dura.",
              "Dolor constante que empeora al sentarse, caminar o evacuar.",
              "En ocasiones, la piel se abre y sale un poco de sangre oscura.",
            ]}
          />
          <h3 className={h3}>Lo que suele desencadenarla</h3>
          <Bullets
            items={[
              "Pujar con fuerza al evacuar o un episodio de estreñimiento.",
              "Diarrea intensa.",
              "Levantar objetos pesados o ejercicio con mucho esfuerzo.",
              "Estar sentado por periodos prolongados, por ejemplo en viajes largos.",
              "Embarazo y parto.",
            ]}
          />
        </div>

        <div>
          <h2 className={h2}>Cómo evoluciona</h2>
          <div className="space-y-3 mt-4">
            {timeline.map(([title, description]) => (
              <div key={title} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={h2}>Tratamiento</h2>
          <h3 className={h3}>Si han pasado menos de 72 horas y el dolor es intenso</h3>
          <p className={p}>
            Se puede valorar retirar la hemorroide trombosada con un procedimiento menor en el consultorio, con anestesia local. Se extrae el coágulo junto con la vena afectada, lo que suele dar <strong>alivio rápido</strong> y disminuye la probabilidad de que el problema regrese en el mismo sitio. Hacer solo un pequeño corte para sacar el coágulo se asocia con más recurrencias.
          </p>
          <h3 className={h3}>Si ya pasaron más de 3 días o el dolor está mejorando</h3>
          <p className={p}>
            En este punto el cuerpo ya está reabsorbiendo el coágulo y, por lo general, operar no ofrece ventajas. Se recomienda tratamiento conservador:
          </p>
          <Bullets
            items={[
              "Baños de asiento con agua tibia, 10 a 15 minutos, varias veces al día.",
              "Analgésicos indicados por tu médico.",
              "Fibra y suficiente agua para que las evacuaciones sean blandas; en algunos casos, un ablandador de heces.",
              "Evitar pujar y no permanecer mucho tiempo sentado en el baño.",
              "Pomadas solo si tu médico las indica y por pocos días.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Si te preocupa el dolor de una eventual cirugía de hemorroides, te puede ayudar leer{" "}
            <Link href="/blog/cuanto-duele-cirugia-hemorroides" className={link}>¿Cuánto duele realmente la cirugía de hemorroides?</Link>.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Busca atención médica pronto si:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "El sangrado es abundante o no se detiene",
              "Tienes fiebre o salida de pus",
              "El dolor empeora en lugar de mejorar después de 3 o 4 días",
              "El bulto crece, se pone rojo y caliente",
              "No estás seguro de que se trate de una hemorroide",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">{item}</p></div>
            ))}
          </div>
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
