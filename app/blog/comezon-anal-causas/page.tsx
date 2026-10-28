import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "comezon-anal-causas")!

export const metadata: Metadata = {
  title: "Comezón anal: causas frecuentes y qué hacer",
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

const causes = [
  ["Limpieza excesiva o insuficiente", "Frotar con fuerza, usar jabones perfumados o toallitas húmedas irrita la piel; los restos de heces o la humedad también la irritan."],
  ["Humedad y sudor", "El calor, la ropa ajustada o sintética y pasar mucho tiempo sentado mantienen la zona húmeda."],
  ["Alimentos y bebidas", "En algunas personas, el café, el chile, el alcohol, los cítricos o el chocolate se asocian con más comezón."],
  ["Hemorroides y fisuras", "Pueden producir humedad, secreción o irritación de la piel alrededor del ano."],
  ["Infecciones", "Hongos, oxiuros (lombrices pequeñas, frecuentes en niños) y algunas infecciones bacterianas o de transmisión sexual."],
  ["Enfermedades de la piel", "Dermatitis, psoriasis o alergias de contacto a cremas, jabones o papel perfumado."],
  ["Diarrea o escapes", "Las evacuaciones frecuentes o pequeños escapes mantienen la piel irritada."],
]

const faqs = [
  {
    q: "¿La comezón anal es señal de cáncer?",
    a: "En la gran mayoría de los casos no. La causa más común es la irritación de la piel. Sin embargo, si la comezón persiste a pesar de los cuidados, o si notas un bulto, una herida que no cierra, sangrado o cambios en la piel, es importante una valoración médica para descartar otras causas, incluidas lesiones poco frecuentes.",
  },
  {
    q: "¿Por qué me da más comezón en la noche?",
    a: "Durante la noche hay menos distracciones, más calor bajo las cobijas y es más probable rascarse dormido. En el caso de los oxiuros, la comezón nocturna es típica porque las hembras depositan sus huevos alrededor del ano durante la noche.",
  },
  {
    q: "¿Puedo usar crema con cortisona?",
    a: "Una crema de baja potencia puede ayudar por pocos días, pero su uso prolongado sin supervisión puede adelgazar la piel y empeorar el problema. Si necesitas usarla más de una semana, consulta a un médico.",
  },
  {
    q: "¿Las toallitas húmedas son mejores que el papel?",
    a: "No necesariamente. Muchas contienen perfumes, alcohol o conservadores que irritan la piel. Si las usas, elige unas sin perfume; una alternativa es limpiar con agua y secar con suavidad, sin frotar.",
  },
  {
    q: "¿Cuándo debo consultar a un coloproctólogo en Puebla?",
    a: "Si la comezón dura más de dos o tres semanas a pesar de los cuidados, si la piel se lastima o sangra, o si notas bultos, secreción o cambios en tus evacuaciones, solicita una valoración.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Pruritus Ani.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Pruritus-Ani.aspx"],
  ["National Health Service (NHS). Threadworms.", "https://www.nhs.uk/conditions/threadworms/"],
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
        ctaTitle="¿Comezón anal que no se quita? Agenda una valoración en Puebla"
        ctaSubtitle="Identificar la causa es el primer paso para que la comezón desaparezca. En consulta revisamos la piel y descartamos hemorroides, fisuras, infecciones u otros problemas."
        reviewerNote="Este artículo es informativo. Si la comezón persiste o se acompaña de sangrado, bultos o heridas, consulta a un médico."
        summary={
          <>
            La <strong>comezón anal</strong> (prurito anal) es muy común y, en la mayoría de los casos, se debe a <strong>irritación de la piel</strong> por humedad, limpieza excesiva, ciertos alimentos o productos perfumados. También puede estar relacionada con hemorroides, fisuras, infecciones o enfermedades de la piel. Suele mejorar con medidas sencillas de higiene, pero si dura más de dos o tres semanas o hay sangrado o bultos, conviene una valoración.
          </>
        }
      >
        <div>
          <p className={p}>
            La comezón en el ano es un síntoma del que pocas personas hablan, pero que puede afectar mucho el sueño, la concentración y la calidad de vida. Muchas veces se entra en un círculo: la piel pica, uno se rasca o se limpia con más fuerza, la piel se irrita más y la comezón empeora. Entender qué la provoca es la clave para romper ese círculo.
          </p>
        </div>

        <div>
          <h2 className={h2}>Causas frecuentes de comezón anal</h2>
          <div className="space-y-3 mt-4">
            {causes.map(([title, description]) => (
              <div key={title} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className={`${p} mt-4`}>
            En algunas personas no se identifica una causa específica; a esto se le llama prurito anal idiopático, y también suele mejorar con los cuidados adecuados.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué puedes hacer en casa</h2>
          <h3 className={h3}>Higiene suave</h3>
          <Bullets
            items={[
              "Limpia con agua tibia después de evacuar y seca con suavidad, sin frotar (puedes usar una toalla suave o una secadora con aire frío).",
              "Evita jabones perfumados, talcos, toallitas con alcohol y papel con aroma.",
              "No uses cremas o pomadas por tu cuenta por tiempo prolongado.",
            ]}
          />
          <h3 className={h3}>Mantén la zona seca</h3>
          <Bullets
            items={[
              "Usa ropa interior de algodón y evita prendas muy ajustadas.",
              "Cámbiate pronto si sudaste mucho o después de hacer ejercicio.",
              "Si hay humedad persistente, un pequeño trozo de algodón seco puede ayudar a absorberla.",
            ]}
          />
          <h3 className={h3}>Hábitos que ayudan</h3>
          <Bullets
            items={[
              "Intenta no rascarte; si lo haces dormido, mantén las uñas cortas.",
              "Observa si ciertos alimentos o bebidas empeoran la comezón y redúcelos durante algunas semanas.",
              "Procura evacuaciones regulares y blandas con fibra y suficiente agua.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Estas medidas suelen tardar algunas semanas en mostrar resultados, porque la piel necesita tiempo para recuperarse.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cómo se diagnostica la causa</h2>
          <p className={p}>
            En la consulta se pregunta desde cuándo existe la comezón, qué productos usas para limpiarte, tus hábitos de alimentación y evacuación, y si hay otros síntomas. Después se revisa la piel alrededor del ano y, según el caso, se realiza un tacto rectal o una anoscopia para buscar hemorroides, fisuras u otras lesiones. En algunos casos se indican pruebas para hongos u oxiuros, o una biopsia de piel si la apariencia es poco habitual.
          </p>
          <p className={`${p} mt-3`}>
            Si la comezón se acompaña de dolor intenso al evacuar, puede tratarse de una fisura; te recomendamos leer{" "}
            <Link href="/blog/fisura-anal-sintomas-tratamiento" className={link}>Fisura anal: síntomas, causas y tratamiento</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Tratamiento</h2>
          <p className={p}>
            El tratamiento depende de la causa: corregir los hábitos de higiene, tratar las hemorroides o la fisura, indicar un antimicótico o un antiparasitario, o tratar una enfermedad de la piel. A veces se utiliza una crema de corticoide de baja potencia por un periodo corto para cortar el ciclo de comezón, siempre con supervisión médica.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Consulta si la comezón se acompaña de:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Sangrado o heridas que no cierran",
              "Un bulto o cambios de color en la piel",
              "Secreción o pus",
              "Cambios persistentes en tus evacuaciones",
              "Comezón que dura más de 2 a 3 semanas a pesar de los cuidados",
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
