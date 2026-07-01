import type { Metadata } from "next"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "sangrado-al-evacuar-causas")!

export const metadata: Metadata = {
  title: post.title,
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
        ctaTitle="¿Notaste sangrado al evacuar?"
        ctaSubtitle="Agenda una valoración confidencial y obtén un diagnóstico certero."
        reviewerNote="El sangrado rectal siempre debe evaluarse por un profesional."
        summary={
          <>
            Ver sangre al evacuar genera alarma, y es una reacción válida. La buena noticia es que la mayoría de las veces la causa es benigna, como hemorroides o una fisura anal. Sin embargo, el sangrado rectal <strong>nunca debe normalizarse sin valoración</strong>.
          </>
        }
      >
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Por qué es tan común sentir vergüenza al hablar de esto</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Muchos pacientes conviven con sangrado al evacuar durante meses o incluso años antes de mencionarlo a un médico, generalmente por pena. Es un tema delicado, pero también es uno de los síntomas más frecuentes en consulta proctológica, y la mayoría de las veces tiene solución.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Causas más frecuentes de sangrado al evacuar</h2>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">1. Hemorroides internas o externas</h3>
              <p className="text-gray-700 text-sm leading-relaxed">La causa más común. Sangre roja brillante en el papel o el inodoro, frecuentemente sin dolor, relacionada con esfuerzo al evacuar o estreñimiento crónico.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">2. Fisura anal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Una pequeña rasgadura en la piel del ano. A diferencia de las hemorroides, casi siempre viene con dolor intenso durante y después de evacuar.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">3. Pólipos colónicos</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Crecimientos benignos en su mayoría, pero cuya detección temprana mediante colonoscopia es importante, especialmente después de los 45-50 años.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">4. Enfermedad inflamatoria intestinal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Puede causar sangrado acompañado de diarrea, dolor abdominal y urgencia para evacuar.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">5. Diverticulosis</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Pequeñas bolsas en la pared del colon que pueden ocasionar sangrado ocasional, a veces abundante y sin dolor.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">6. Infecciones intestinales</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Ciertas infecciones pueden causar sangrado junto con diarrea, fiebre o cólicos, de forma transitoria.</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-red-700 text-sm sm:text-base mb-1.5">7. Causas que requieren descartar cáncer colorrectal</h3>
              <p className="text-gray-700 text-sm leading-relaxed">La menos frecuente, pero el sangrado persistente en mayores de 45 años, con cambios de hábito intestinal o pérdida de peso, debe evaluarse. Detectarlo a tiempo cambia el pronóstico por completo.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Cómo distinguir el tipo de sangrado (guía orientativa, no diagnóstica)</h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <p>• <strong>Sangre roja brillante</strong>, en la superficie: más asociada a hemorroides o fisuras.</p>
            <p>• <strong>Sangre oscura o mezclada</strong> con la materia fecal: puede indicar origen más alto y requiere evaluación más urgente.</p>
            <p>• <strong>Sangrado con dolor agudo tipo &quot;corte&quot;</strong>: orienta a fisura anal.</p>
            <p>• <strong>Sangrado sin dolor</strong>, cantidad variable: más típico de hemorroides o pólipos.</p>
          </div>
          <p className="text-xs text-gray-500 mt-4">Solo una valoración médica confirma la causa real.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">No esperes si presentas:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Sangrado abundante o que no se detiene</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Sangre oscura o negra (tipo &quot;alquitrán&quot;)</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Cambios de hábito intestinal por 2-3 semanas</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Pérdida de peso sin explicación</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Dolor abdominal persistente</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Fatiga o mareo (posible anemia)</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Primer episodio después de los 45 años</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">El sangrado ocasional también merece revisión</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Un error común es pensar &quot;solo sangré una vez, ya se me quitó, no es grave&quot;. El sangrado intermitente puede tener exactamente la misma causa que el sangrado frecuente; simplemente no se presenta todos los días. La ausencia de síntomas por unas semanas no descarta la causa subyacente.
          </p>
        </div>
      </BlogPostLayout>
    </>
  )
}
