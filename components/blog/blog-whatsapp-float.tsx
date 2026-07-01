'use client'

import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."

function BlogWhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      onClick={(e) => {
        e.preventDefault()
        if (typeof window !== 'undefined' && (window as any).gtagWhatsAppConversion) {
          (window as any).gtagWhatsAppConversion(WHATSAPP_LINK)
        } else {
          window.open(WHATSAPP_LINK, '_blank')
        }
      }}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

export default BlogWhatsAppFloat
