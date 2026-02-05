'use client'

import { MessageCircle } from "lucide-react"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import CredentialsSection from "@/components/credentials-section"
import ProceduresSection from "@/components/procedures-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import ResultsSection from "@/components/results-section"
import FAQSection from "@/components/faq-section"
import UrgencySection from "@/components/urgency-section"
import LocationSection from "@/components/location-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* SECCIÓN 1: HERO */}
      <HeroSection />

      {/* SECCIÓN 2: PROBLEMA - EMPATÍA */}
      <ProblemSection />

      {/* SECCIÓN 3: SOLUCIÓN - PROPUESTA DE VALOR */}
      <SolutionSection />

      {/* SECCIÓN 4: CREDENCIALES - AUTORIDAD */}
      <CredentialsSection />

      {/* SECCIÓN 5: PROCEDIMIENTOS */}
      <ProceduresSection />

      {/* SECCIÓN 6: PROCESO PASO A PASO */}
      <ProcessSection />

      {/* SECCIÓN 7: TESTIMONIOS */}
      <TestimonialsSection />

      {/* SECCIÓN 8: RESULTADOS / ANTES Y DESPUÉS */}
      <ResultsSection />

      {/* SECCIÓN 9: PREGUNTAS FRECUENTES */}
      <FAQSection />

      {/* SECCIÓN 10: SEÑALES DE URGENCIA */}
      <UrgencySection />

      {/* SECCIÓN 11: UBICACIÓN Y CONTACTO */}
      <LocationSection />

      {/* SECCIÓN 12: ÚLTIMO LLAMADO A LA ACCIÓN */}
      <FinalCTASection />

      {/* SECCIÓN 13: FOOTER */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </main>
  )
}
