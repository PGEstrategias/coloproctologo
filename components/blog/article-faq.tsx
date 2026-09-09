import type { ArticleFaq } from './article-schema'

interface ArticleFaqProps {
  id?: string
  faqs: ArticleFaq[]
}

/**
 * Preguntas frecuentes del artículo.
 *
 * Recibe la misma lista que ArticleSchema marca como FAQPage, para que lo que
 * ve el paciente y lo que lee Google no se puedan desincronizar.
 */
function ArticleFaqSection({ id = 'preguntas-frecuentes', faqs }: ArticleFaqProps) {
  if (faqs.length === 0) return null

  return (
    <div>
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-4"
      >
        Preguntas frecuentes
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.pregunta} className="bg-slate-50 rounded-xl p-4 sm:p-5">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
              {faq.pregunta}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{faq.respuesta}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleFaqSection
