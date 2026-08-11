"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

import { FormShell } from "@/components/patient-forms/form-shell"
import { GOOGLE_REVIEW_URL, DOCTORALIA_REVIEW_URL } from "@/lib/review-links"

function ExperienceSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("sid")
  const reviewRequestId = searchParams.get("rid") ?? undefined
  const [dismissed, setDismissed] = useState(false)

  const trackClick = (platform: "google" | "doctoralia") => {
    if (!sessionId) return
    fetch("/api/review-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, platform, reviewRequestId }),
      keepalive: true,
    }).catch(() => {})
  }

  return (
    <FormShell title="¡Gracias!" showPrivacyNote={false}>
      <div className="flex flex-col items-center text-center py-2">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Gracias por compartir tu experiencia. Tu opinión nos ayuda a mejorar.
        </p>
      </div>

      {!dismissed && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center mb-4">
            Si deseas compartir públicamente tu experiencia, puedes hacerlo aquí:
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("google")}
              className="min-h-[52px] flex items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-gray-300 active:bg-gray-50 transition-colors"
            >
              Google Maps
            </a>
            <a
              href={DOCTORALIA_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("doctoralia")}
              className="min-h-[52px] flex items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-gray-300 active:bg-gray-50 transition-colors"
            >
              Doctoralia
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="min-h-[44px] text-sm font-medium text-gray-400 hover:text-gray-500"
            >
              Ahora no
            </button>
          </div>
        </div>
      )}
    </FormShell>
  )
}

export default function ExperienceSuccessPage() {
  return (
    <Suspense fallback={null}>
      <ExperienceSuccessContent />
    </Suspense>
  )
}
