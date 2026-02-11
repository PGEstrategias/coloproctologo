'use client'

import { motion } from 'framer-motion'
import { Phone, Shield, Clock, Star, Lock } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."
const PHONE_NUMBER = "tel:+52XXXXXXXXXX"

function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[100dvh] bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 pt-20 sm:pt-24 lg:pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                <Shield className="w-3 h-3 mr-1 flex-shrink-0" />
                Certificado
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Cédula Profesional
              </span>
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                COFEPRIS
              </span>
            </div>

            <h1 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white sm:leading-tight mb-3 sm:mb-4">
              ¿Dolor o Sangrado Rectal que Ya No Puedes Ignorar?
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-green-400 font-semibold mb-4 sm:mb-6 leading-snug">
              Recupera Tu Calidad de Vida con Cirugía Mínimamente Invasiva en Puebla
            </p>

            <div className="mb-5 sm:mb-8">
              <p className="text-sm sm:text-lg text-white/90 font-semibold">
                Dr. José Manuel Fernández Rivero | Coloproctólogo Certificado
              </p>
              <p className="text-xs sm:text-base text-white/70 mt-0.5">
                Más de 500 Cirugías Exitosas | Técnicas Modernas de Recuperación Rápida
              </p>
            </div>

            {/* CTAs - full width on mobile */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-5 sm:mb-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-4 sm:px-8 py-4 sm:py-6 shadow-lg shadow-green-600/30 min-h-[48px] whitespace-normal">
                  <span className="sm:hidden">AGENDAR CITA</span>
                  <span className="hidden sm:inline">AGENDA TU VALORACIÓN</span>
                </Button>
              </a>
              <a href={PHONE_NUMBER} className="block">
                <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 text-sm sm:text-base px-4 sm:px-8 py-4 sm:py-6 min-h-[48px]">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Llamar</span>
                </Button>
              </a>
            </div>

            {/* Trust elements */}
            <div className="space-y-2 text-[11px] sm:text-sm text-white/80">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1.5">Calificación promedio</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  Atención mismo día
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  Confidencial
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Video / Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-2 lg:mt-0 pb-4"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-slate-700 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-800/50 to-slate-800/50">
                <div className="text-center text-white">
                  <div className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[12px] sm:border-l-[20px] border-l-white border-t-[8px] sm:border-t-[12px] border-t-transparent border-b-[8px] sm:border-b-[12px] border-b-transparent ml-0.5" />
                  </div>
                  <p className="text-[10px] sm:text-sm text-white/70">Video del Dr. Fernández</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-2 left-1 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-4 shadow-xl">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-[10px] sm:text-sm">500+</span>
                </div>
                <div>
                  <p className="font-bold text-[11px] sm:text-sm text-gray-900 leading-tight">Cirugías Exitosas</p>
                  <p className="text-[9px] sm:text-xs text-gray-500">Con técnicas modernas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
