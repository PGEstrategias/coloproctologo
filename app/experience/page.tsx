"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { z } from "zod"

import { FormShell } from "@/components/patient-forms/form-shell"
import { RatingScale } from "@/components/patient-forms/rating-scale"
import { Button } from "@/components/ui/button"
import { experienceSchema } from "@/lib/validations"
import { getOrCreateSessionId } from "@/lib/session"

const formSchema = experienceSchema.omit({ sessionId: true })
type FormValues = z.infer<typeof formSchema>

export default function ExperiencePage() {
  const router = useRouter()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null)
    try {
      const sessionId = getOrCreateSessionId("experience")
      const res = await fetch("/api/experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sessionId }),
      })

      if (!res.ok) throw new Error("request-failed")
      const data = await res.json()

      const params = new URLSearchParams({ sid: sessionId })
      if (data.id) params.set("rid", data.id)
      router.push(`/experience/success?${params.toString()}`)
    } catch {
      setSubmitError("No pudimos guardar tu respuesta. Por favor intenta de nuevo.")
    }
  }

  return (
    <FormShell
      title="Tu experiencia"
      subtitle="Nos importa saber cómo te fue. Toma menos de un minuto."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          control={control}
          name="overallExperience"
          render={({ field }) => (
            <RatingScale
              label="¿Cómo calificarías tu experiencia general?"
              min={1}
              max={5}
              value={field.value}
              onChange={field.onChange}
              lowLabel="Mala"
              highLabel="Excelente"
            />
          )}
        />
        {errors.overallExperience && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una calificación.</p>
        )}

        <Controller
          control={control}
          name="doctorClarity"
          render={({ field }) => (
            <RatingScale
              label="¿Qué tan clara fue la explicación del doctor?"
              min={1}
              max={5}
              value={field.value}
              onChange={field.onChange}
              lowLabel="Nada clara"
              highLabel="Muy clara"
            />
          )}
        />
        {errors.doctorClarity && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una calificación.</p>
        )}

        <Controller
          control={control}
          name="doctorTrust"
          render={({ field }) => (
            <RatingScale
              label="¿Qué tanta confianza te transmitió el doctor?"
              min={1}
              max={5}
              value={field.value}
              onChange={field.onChange}
              lowLabel="Poca"
              highLabel="Mucha"
            />
          )}
        />
        {errors.doctorTrust && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una calificación.</p>
        )}

        <Controller
          control={control}
          name="processEase"
          render={({ field }) => (
            <RatingScale
              label="¿Qué tan fácil fue todo el proceso?"
              min={1}
              max={5}
              value={field.value}
              onChange={field.onChange}
              lowLabel="Difícil"
              highLabel="Muy fácil"
            />
          )}
        />
        {errors.processEase && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una calificación.</p>
        )}

        <Controller
          control={control}
          name="recommendationScore"
          render={({ field }) => (
            <RatingScale
              label="¿Recomendarías al doctor a un familiar o amigo?"
              min={0}
              max={10}
              value={field.value}
              onChange={field.onChange}
              lowLabel="Nada probable"
              highLabel="Muy probable"
            />
          )}
        />
        {errors.recommendationScore && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una calificación.</p>
        )}

        <div>
          <label htmlFor="likedMost" className="text-sm font-semibold text-gray-800 mb-2.5 block">
            ¿Qué fue lo que más te gustó de tu experiencia?{" "}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <textarea
            id="likedMost"
            rows={2}
            maxLength={500}
            className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-base placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            placeholder="Cuéntanos brevemente..."
            {...register("likedMost")}
          />
        </div>

        <div>
          <label htmlFor="improvement" className="text-sm font-semibold text-gray-800 mb-2.5 block">
            ¿Hay algo que podamos mejorar?{" "}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <textarea
            id="improvement"
            rows={2}
            maxLength={500}
            className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-base placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            placeholder="Cuéntanos brevemente..."
            {...register("improvement")}
          />
        </div>

        {submitError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {submitError}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-6 min-h-[52px] rounded-xl"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Enviar respuestas"
          )}
        </Button>
      </form>
    </FormShell>
  )
}
