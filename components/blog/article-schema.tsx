import { contacto, doctor, siteUrl, ubicacion } from "@/config/site"

export interface ArticleFaq {
  pregunta: string
  respuesta: string
}

interface ArticleSchemaProps {
  titulo: string
  descripcion: string
  slug: string
  fechaPublicacion: string
  /** Si el artículo se actualiza, pasar la fecha nueva. Por defecto, la de publicación. */
  fechaModificacion?: string
  /** Padecimiento del que trata el artículo, para MedicalCondition. */
  condicion: string
  faqs?: ArticleFaq[]
}

/**
 * JSON-LD de un artículo del blog.
 *
 * Emite tres bloques: MedicalWebPage (el artículo), FAQPage (si el artículo
 * tiene preguntas frecuentes) y BreadcrumbList. Todos los datos del médico y
 * del consultorio se leen de config/site.ts.
 */
function ArticleSchema({
  titulo,
  descripcion,
  slug,
  fechaPublicacion,
  fechaModificacion,
  condicion,
  faqs,
}: ArticleSchemaProps) {
  const url = `${siteUrl}/blog/${slug}`

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: titulo,
    description: descripcion,
    url,
    datePublished: fechaPublicacion,
    dateModified: fechaModificacion ?? fechaPublicacion,
    inLanguage: "es-MX",
    audience: { "@type": "Patient" },
    about: { "@type": "MedicalCondition", name: condicion },
    author: {
      "@type": "Physician",
      name: doctor.nombre,
      medicalSpecialty: "Coloproctology",
      identifier: `Cédula profesional ${doctor.cedulaMedico} / Especialidad ${doctor.cedulaColoproctologia}`,
      url: siteUrl,
    },
    reviewedBy: {
      "@type": "Physician",
      name: doctor.nombre,
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: `${doctor.nombre} — Coloproctología`,
      address: {
        "@type": "PostalAddress",
        streetAddress: ubicacion.calle,
        addressLocality: ubicacion.ciudad,
        addressRegion: ubicacion.estado,
        postalCode: ubicacion.codigoPostal,
        addressCountry: ubicacion.pais,
      },
      telephone: contacto.telefono,
    },
  }

  const faqPage =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.pregunta,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.respuesta,
            },
          })),
        }
      : null

  // Solo tres niveles: no existen páginas de categoría todavía, y apuntar el
  // breadcrumb a una URL inexistente genera un error en Search Console.
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: titulo, item: url },
    ],
  }

  const bloques = [medicalWebPage, faqPage, breadcrumb].filter(Boolean)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bloques) }}
    />
  )
}

export default ArticleSchema
