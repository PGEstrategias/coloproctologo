/**
 * Configuración central del sitio.
 *
 * Fuente única de verdad para datos de contacto, credenciales y ubicación.
 * Antes estaban repetidos en once componentes; si un dato cambia, se cambia
 * aquí y se propaga a la landing y al blog.
 */

// El dominio se usa para canonical, schema y sitemap. Se toma del entorno para
// no fijar en el código un valor que cambia entre preview y producción.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://drjosemanuelfernandez.com"
).replace(/\/$/, "")

export const doctor = {
  nombre: "Dr. José Manuel Fernández Rivero",
  nombreCorto: "Dr. José Manuel Fernández",
  especialidad: "Coloproctólogo",
  cedulaMedico: "2914327",
  cedulaColoproctologia: "4743089",
  cedulaCirugiaGeneral: "4371811",
  cofepris: "2521062002A00018",
  consejo: "Consejo Mexicano de Coloproctología",
  fotoUrl:
    "https://res.cloudinary.com/dxcr9utre/image/upload/v1770793713/WhatsApp_Image_2026-02-11_at_1.07.21_AM_jrjeyx.jpg",
} as const

export const contacto = {
  // Número de citas (WhatsApp). Formato internacional sin signos.
  whatsapp: "522222963593",
  whatsappDisplay: "222 296 3593",
  // Número de urgencias (llamada y WhatsApp). Es una línea distinta a la de citas.
  telefono: "+522225040271",
  telefonoDisplay: "222 504 0271",
  whatsappUrgencias: "522225040271",
} as const

export const ubicacion = {
  calle: "Av 23 Pte 4303",
  colonia: "Belisario Domínguez",
  codigoPostal: "72180",
  ciudad: "Puebla",
  estado: "Puebla",
  pais: "MX",
  quirofano: "Cielo Medical Center",
  direccionCompleta:
    "Av 23 Pte 4303, Belisario Domínguez, 72180 Puebla, México",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2713356416125!2d-98.2351351!3d19.0518042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6d880e9c525%3A0xcf41df13067407c4!2sDR%20JOSE%20MANUEL%20FERNANDEZ%20RIVERO%20COLOPROCTOLOGO!5e0!3m2!1ses-419!2smx!4v1770793795044!5m2!1ses-419!2smx",
} as const

export const horarios = {
  consulta: "Lunes, Martes, Jueves: 5:00 PM - 7:00 PM",
  sabado: "Sábados: Por la mañana",
} as const

/**
 * Construye un enlace de WhatsApp con mensaje prellenado.
 *
 * El texto cambia por artículo para poder atribuir en el CRM qué contenido
 * generó el lead, sin instrumentación adicional.
 */
export function whatsappLink(mensaje?: string): string {
  const texto =
    mensaje ?? `Hola ${doctor.nombreCorto}, me gustaría agendar una cita.`
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`
}

/** Enlace de WhatsApp para un artículo del blog. */
export function whatsappLinkArticulo(tema: string): string {
  return whatsappLink(
    `Hola, leí su artículo sobre ${tema} y quiero agendar una valoración.`
  )
}

/** CTA por defecto, equivalente al que ya usaba la landing. */
export const WHATSAPP_LINK = whatsappLink()

/** Enlace de urgencias: usa la otra línea y un mensaje con prioridad explícita. */
export const WHATSAPP_URGENCIAS = `https://wa.me/${contacto.whatsappUrgencias}?text=${encodeURIComponent(
  `Hola ${doctor.nombreCorto}, URGENTE - necesito una valoración lo antes posible.`
)}`
