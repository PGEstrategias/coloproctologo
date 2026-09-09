import Image from "next/image"
import Link from "next/link"

import ArticleFaqSection from "@/components/blog/article-faq"
import type { ArticleFaq } from "@/components/blog/article-schema"
import ArticleToc, { type TocItem } from "@/components/blog/article-toc"
import { WHATSAPP_LINK, doctor, whatsappLinkArticulo } from "@/config/site"

interface BlogPostLayoutProps {
  category: string
  title: string
  dateLabel: string
  readTime: string
  summary: React.ReactNode
  children: React.ReactNode
  ctaTitle: string
  ctaSubtitle: string
  reviewerNote?: string
  /** Tabla de contenido. Los ids deben existir como <h2 id="..."> en el cuerpo. */
  toc?: TocItem[]
  /** Preguntas frecuentes. Se renderizan al final y se marcan como FAQPage. */
  faqs?: ArticleFaq[]
  /**
   * Tema del artículo para el mensaje de WhatsApp. Permite atribuir en el CRM
   * qué contenido generó el lead sin instrumentación adicional.
   */
  tema?: string
}

function BlogPostLayout({
  category,
  title,
  dateLabel,
  readTime,
  summary,
  children,
  ctaTitle,
  ctaSubtitle,
  reviewerNote,
  toc,
  faqs,
  tema,
}: BlogPostLayoutProps) {
  const ctaHref = tema ? whatsappLinkArticulo(tema) : WHATSAPP_LINK

  return (
    <>
      {/* HERO DEL ARTÍCULO */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 pt-28 pb-14 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-white/60 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Inicio</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white/90">{category}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-green-500/20 text-green-300 border border-green-500/30">Cédula Prof.</span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">COFEPRIS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-green-300">{dateLabel} · Lectura de {readTime}</p>
          <div className="flex items-center gap-3 mt-5">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white flex-shrink-0">
              <Image
                src={doctor.fotoUrl}
                alt="Dr. José Manuel Fernández"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm text-white/80">
              <p className="font-semibold text-white">{doctor.nombre}</p>
              <p className="text-xs text-white/60">Coloproctólogo Certificado · Cédula {doctor.cedulaMedico}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESUMEN RÁPIDO */}
      <section className="w-full py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <p className="font-bold text-green-800 text-sm mb-2 uppercase tracking-wide">En resumen</p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{summary}</p>
          </div>
        </div>
      </section>

      {/* TABLA DE CONTENIDO */}
      {toc && toc.length > 0 && (
        <section className="w-full bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <ArticleToc items={toc} />
          </div>
        </section>
      )}

      {/* CUERPO DEL ARTÍCULO */}
      <section className="w-full py-4 sm:py-6 bg-white">
        <article className="prose-article max-w-3xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
          {children}
          {faqs && faqs.length > 0 && <ArticleFaqSection faqs={faqs} />}
        </article>
      </section>

      {/* REVISADO POR */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
              <Image
                src={doctor.fotoUrl}
                alt="Dr. José Manuel Fernández"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Revisado médicamente por</p>
              <p className="font-bold text-gray-900">{doctor.nombre}</p>
              <p className="text-sm text-gray-600">Coloproctólogo certificado · Cédula profesional {doctor.cedulaMedico} · Cédula de especialidad {doctor.cedulaColoproctologia}</p>
              <p className="text-xs text-gray-400 mt-2">
                Este contenido tiene fines informativos y no sustituye una valoración médica presencial.{reviewerNote ? ` ${reviewerNote}` : ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-white/80 mb-8 text-sm sm:text-base">{ctaSubtitle}</p>
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-600 hover:bg-green-700 text-white text-base font-medium rounded-md px-8 py-4 shadow-lg">
              AGENDAR CITA
            </button>
          </a>
        </div>
      </section>
    </>
  )
}

export default BlogPostLayout
