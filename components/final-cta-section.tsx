'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, Calendar, Lock, Shield } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."
const PHONE_NUMBER = "tel:+522225040271"

function FinalCTASection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            Da el Primer Paso Hacia Tu Recuperación
          </h2>

          <div className="max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3 sm:space-y-4 text-base sm:text-lg text-white/80">
            <p>
              Sé que tomar la decisión de agendar una consulta proctológica puede ser difícil.
            </p>
            <p>
              Quizás has estado posponiendo esto por semanas, meses o incluso años.
            </p>
            <p>
              Pero <strong className="text-white">cada día que pasa es un día más de incomodidad, dolor o preocupación</strong> que no necesitas vivir.
            </p>
            <p className="text-green-400 font-semibold text-lg sm:text-xl">
              La buena noticia: Estás a UN click de distancia de empezar tu recuperación.
            </p>
            <p>
              No tienes que seguir sufriendo en silencio.
            </p>
            <p className="text-sm sm:text-base">
              Agenda tu valoración confidencial ahora. Sin compromiso. Sin juicios. Solo respuestas claras y un plan para recuperar tu calidad de vida.
            </p>
          </div>

          {/* CTAs - full width on mobile */}
          <div className="flex flex-col gap-3 mb-6 sm:mb-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-base px-6 py-6 shadow-lg shadow-green-600/30">
                AGENDAR CITA
              </Button>
            </a>
            <a href={PHONE_NUMBER} className="block w-full">
              <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 text-base px-6 py-6">
                <Phone className="w-4 h-4 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>

          {/* Trust badges - 2x2 grid on mobile */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
            <span className="flex items-center gap-1 justify-center sm:justify-start">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span>Respuesta en &lt;2 hrs</span>
            </span>
            <span className="flex items-center gap-1 justify-center sm:justify-start">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span>Disponible esta semana</span>
            </span>
            <span className="flex items-center gap-1 justify-center sm:justify-start">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span>COFEPRIS Autorizado</span>
            </span>
            <span className="flex items-center gap-1 justify-center sm:justify-start">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span>100% Confidencial</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
