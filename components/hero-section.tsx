'use client'

import { motion } from 'framer-motion'
import { Phone, Shield, Clock, Star, Lock } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."
const PHONE_NUMBER = "tel:+52XXXXXXXXXX"

function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                <Shield className="w-3 h-3 mr-1" />
                Certificado
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Cédula Profesional Verificada
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                COFEPRIS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              ¿Dolor o Sangrado Rectal que Ya No Puedes Ignorar?
            </h1>
            <p className="text-xl sm:text-2xl text-green-400 font-semibold mb-6">
              Recupera Tu Calidad de Vida con Cirugía Mínimamente Invasiva en Puebla
            </p>

            <div className="mb-8">
              <p className="text-lg text-white/90 font-semibold">
                Dr. José Manuel Fernández Rivero | Coloproctólogo Certificado
              </p>
              <p className="text-white/70">
                Más de 500 Cirugías Exitosas | Técnicas Modernas de Recuperación Rápida
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg shadow-green-600/30">
                  📱 AGENDA TU VALORACIÓN CONFIDENCIAL
                </Button>
              </a>
              <a href={PHONE_NUMBER}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  📞 Llama Ahora
                </Button>
              </a>
            </div>

            {/* Trust elements */}
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1">Calificación promedio de pacientes</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-green-400" />
                Atención el mismo día disponible
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-green-400" />
                100% Confidencial
              </span>
            </div>
          </motion.div>

          {/* Right column - Video / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-700 aspect-video">
              {/* Placeholder for video - autoplay muted */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-800/50 to-slate-800/50">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-sm text-white/70">Video del Dr. Fernández</p>
                </div>
              </div>
              {/*
                Replace with actual video:
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/video-hero.mp4" type="video/mp4" />
                </video>
              */}
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">500+</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900">Cirugías Exitosas</p>
                  <p className="text-xs text-gray-500">Con técnicas modernas</p>
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
