'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, Calendar, DollarSign, Lock } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."
const PHONE_NUMBER = "tel:+52XXXXXXXXXX"

function FinalCTASection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Da el Primer Paso Hacia Tu Recuperación
          </h2>

          <div className="max-w-2xl mx-auto mb-10 space-y-4 text-lg text-white/80">
            <p>
              Sé que tomar la decisión de agendar una consulta proctológica puede ser difícil.
            </p>
            <p>
              Quizás has estado posponiendo esto por semanas, meses o incluso años.
            </p>
            <p>
              Pero <strong className="text-white">cada día que pasa es un día más de incomodidad, dolor o preocupación</strong> que no necesitas vivir.
            </p>
            <p className="text-green-400 font-semibold text-xl">
              La buena noticia: Estás a UN click de distancia de empezar tu recuperación.
            </p>
            <p>
              No tienes que seguir sufriendo en silencio.
            </p>
            <p>
              Agenda tu valoración confidencial ahora. Sin compromiso. Sin juicios. Solo respuestas claras y un plan para recuperar tu calidad de vida.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 shadow-lg shadow-green-600/30">
                📱 AGENDA TU VALORACIÓN CONFIDENCIAL
              </Button>
            </a>
            <a href={PHONE_NUMBER}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-lg px-8 py-7">
                <Phone className="w-5 h-5 mr-2" />
                O llama ahora
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-green-400" />
              Respuesta en menos de 2 horas
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-green-400" />
              Valoración disponible esta semana
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-green-400" />
              Primera consulta: $1,200
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4 text-green-400" />
              100% Confidencial
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
