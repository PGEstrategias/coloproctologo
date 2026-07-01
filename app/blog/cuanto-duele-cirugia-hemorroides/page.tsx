import type { Metadata } from "next"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "cuanto-duele-cirugia-hemorroides")!

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
        ctaTitle="¿Tienes dudas sobre tu caso específico?"
        ctaSubtitle="Agenda una valoración confidencial. Sin compromiso, sin juicios."
        summary={
          <>
            La cirugía de hemorroides <strong>sí genera molestia</strong>, pero no es el dolor insoportable que muchas personas imaginan. Con las técnicas actuales y un buen manejo del dolor, la mayoría de los pacientes lo describen como &quot;una molestia manejable&quot;, no como un dolor incapacitante.
          </>
        }
      >
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Por qué existe tanto miedo a este tema</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Si buscas &quot;cirugía de hemorroides&quot; en internet o le preguntas a alguien que se operó hace 15 o 20 años, es probable que escuches historias de terror. Y tiene sentido: durante décadas, la hemorroidectomía tradicional sí era conocida por generar un dolor postoperatorio intenso, principalmente porque las técnicas de esa época dejaban heridas más grandes en una zona con muchísimas terminaciones nerviosas.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
            Ese miedo heredado sigue vivo, aunque la cirugía haya cambiado radicalmente.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Qué tan doloroso es en realidad, según la técnica</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">No todas las cirugías de hemorroides duelen igual, porque no todas son iguales:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-red-700 text-sm sm:text-base mb-2">Hemorroidectomía convencional</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Más efectiva para casos avanzados (grado III-IV), pero también la que genera más molestia postoperatoria. El dolor suele ser más notorio los primeros 3 a 5 días, especialmente al evacuar.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-green-700 text-sm sm:text-base mb-2">Técnicas mínimamente invasivas</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Ligadura con banda elástica, hemorroidopexia o desarterialización guiada por Doppler generan un malestar considerablemente menor, más parecido a presión que a dolor agudo.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
            La decisión de qué técnica usar depende del grado de tus hemorroides, y eso solo se determina con una valoración presencial.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Cómo se controla el dolor en la práctica</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">Esto es lo que realmente marca la diferencia entre &quot;duele mucho&quot; y &quot;es manejable&quot;:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 sm:p-4">
              <span className="text-green-600 mt-0.5">✅</span>
              <p className="text-sm sm:text-base text-gray-700"><strong>Analgesia programada</strong>, no solo &quot;cuando duela&quot;. Tomar el medicamento a horas fijas evita que el dolor se acumule.</p>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 sm:p-4">
              <span className="text-green-600 mt-0.5">✅</span>
              <p className="text-sm sm:text-base text-gray-700"><strong>Baños de asiento</strong> con agua tibia, que relajan el esfínter y reducen la molestia al evacuar.</p>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 sm:p-4">
              <span className="text-green-600 mt-0.5">✅</span>
              <p className="text-sm sm:text-base text-gray-700"><strong>Manejo del estreñimiento</strong> con dieta rica en fibra, porque el dolor más frecuente no es el de la herida en reposo, sino el de la primera evacuación.</p>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 sm:p-4">
              <span className="text-green-600 mt-0.5">✅</span>
              <p className="text-sm sm:text-base text-gray-700"><strong>Anestesia adecuada</strong> durante el procedimiento, regional o general según el caso.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Timeline de Recuperación</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white rounded-xl">
              <div className="w-4 h-4 rounded-full bg-yellow-400 mb-2"></div>
              <p className="font-bold text-xs sm:text-sm text-gray-900">Día 1-2</p>
              <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5">Molestia más notoria</p>
            </div>
            <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white rounded-xl">
              <div className="w-4 h-4 rounded-full bg-blue-400 mb-2"></div>
              <p className="font-bold text-xs sm:text-sm text-gray-900">Día 3-5</p>
              <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5">Mejoría progresiva</p>
            </div>
            <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white rounded-xl">
              <div className="w-4 h-4 rounded-full bg-green-500 mb-2"></div>
              <p className="font-bold text-xs sm:text-sm text-gray-900">Día 7</p>
              <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5">Vuelta al trabajo</p>
            </div>
            <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-white rounded-xl">
              <div className="w-4 h-4 rounded-full bg-green-600 mb-2"></div>
              <p className="font-bold text-xs sm:text-sm text-gray-900">Semana 3-4</p>
              <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5">Recuperación total</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Señales de que el dolor no es normal</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">Aunque cierta molestia es esperada, hay señales que sí requieren contactar a tu médico de inmediato:</p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Dolor que aumenta en lugar de disminuir tras el día 3</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Fiebre</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Sangrado abundante</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Secreción con mal olor o pus</p></div>
            <div className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">Dolor que no responde a analgésicos</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">¿Vale la pena el proceso?</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            La mayoría de los pacientes que llegan a consulta han estado postergando esta decisión por vergüenza, miedo o desinformación, muchas veces durante años. Y casi siempre, la conclusión después de la cirugía es la misma: el malestar temporal de la recuperación es mínimo comparado con los años de incomodidad, sangrado o dolor crónico que estaban evitando.
          </p>
        </div>
      </BlogPostLayout>
    </>
  )
}
