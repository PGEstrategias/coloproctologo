'use client'

import { MessageCircle } from "lucide-react"

import { WHATSAPP_LINK } from "@/config/site"

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
