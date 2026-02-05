'use client'

import { useState } from "react"
import { MenuIcon, X, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from "./ui/button"
import useMediaQuery from "@/app/hooks/use-media-query"

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."
const PHONE_NUMBER = "tel:+52XXXXXXXXXX"

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Procedimientos", href: "#procedimientos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { scrollYProgress } = useScroll()
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  return (
    <>
      <motion.header
        style={{
          backgroundColor: `rgba(255, 255, 255, ${isDesktop ? bgOpacity.get() : 1})`,
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 bg-white shadow-sm"
      >
        <a href="#hero" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">DR</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-sm text-gray-900 leading-tight">Dr. José Manuel Fernández</p>
            <p className="text-xs text-green-700">Coloproctólogo</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-700 hover:text-green-700 transition-colors rounded-md hover:bg-green-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <a href={PHONE_NUMBER} className="hidden sm:flex">
            <Button variant="outline" size="sm" className="text-green-700 border-green-300 hover:bg-green-50">
              <Phone className="w-4 h-4 mr-1" />
              Llamar
            </Button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
              Agendar Cita
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </Button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden"
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col space-y-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                Agendar Valoración
              </Button>
            </a>
            <a href={PHONE_NUMBER}>
              <Button variant="outline" className="w-full border-green-300 text-green-700 text-lg py-6">
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Header
