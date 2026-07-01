'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { MenuIcon, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from "./ui/button"

const WHATSAPP_LINK = "https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."
const PHONE_NUMBER = "tel:+522225040271"
const LOGO_URL = "https://res.cloudinary.com/dxcr9utre/image/upload/v1770793713/WhatsApp_Image_2026-02-11_at_1.07.21_AM_jrjeyx.jpg"

const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  if (typeof window !== 'undefined' && (window as any).gtagWhatsAppConversion) {
    (window as any).gtagWhatsAppConversion(WHATSAPP_LINK)
  } else {
    window.open(WHATSAPP_LINK, '_blank')
  }
}

const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (typeof window !== 'undefined' && (window as any).gtagCallConversion) {
    (window as any).gtagCallConversion(PHONE_NUMBER)
  }
}

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Procedimientos", href: "#procedimientos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contacto" },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-2 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-sm">
              <Image
                src={LOGO_URL}
                alt="Dr. José Manuel Fernández Rivero"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block min-w-0">
              <p className={`font-bold text-xs sm:text-sm leading-tight truncate transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Dr. José Manuel Fernández
              </p>
              <p className={`text-[10px] sm:text-xs transition-colors ${scrolled ? 'text-green-700' : 'text-green-300'}`}>
                Coloproctólogo
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm transition-colors rounded-md ${
                  scrolled
                    ? 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href={PHONE_NUMBER} className="hidden sm:flex" onClick={handleCallClick}>
              <button
                className={`flex items-center text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3 rounded-md border transition-colors font-medium ${
                  scrolled
                    ? 'text-green-700 border-green-300 hover:bg-green-50 bg-white'
                    : 'text-white border-white/40 hover:bg-white/10 bg-transparent'
                }`}
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                Llamar
              </button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm h-8 sm:h-9 px-2.5 sm:px-3">
                Agendar Cita
              </Button>
            </a>
            <button
              className={`lg:hidden p-2 -mr-1 rounded-md transition-colors ${scrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/10 text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-[320px] bg-white shadow-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-gray-900 text-sm">Menú</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3.5 text-base text-gray-800 hover:bg-green-50 hover:text-green-700 transition-colors active:bg-green-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="p-4 border-t space-y-2.5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block" onClick={handleWhatsAppClick}>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-5 min-h-[48px]">
                  Agendar Valoración
                </Button>
              </a>
              <a href={PHONE_NUMBER} className="block" onClick={handleCallClick}>
                <Button variant="outline" className="w-full border-green-300 text-green-700 text-base py-5 min-h-[48px]">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
