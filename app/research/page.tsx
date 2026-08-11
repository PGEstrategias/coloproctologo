"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { z } from "zod"

import { FormShell } from "@/components/patient-forms/form-shell"
import { ChoiceGroup } from "@/components/patient-forms/choice-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { researchSchema } from "@/lib/validations"
import { getOrCreateSessionId } from "@/lib/session"

const formSchema = researchSchema.omit({ sessionId: true })
type FormValues = z.infer<typeof formSchema>

const SOURCE_OPTIONS = [
  { value: "google", label: "Google" },
  { value: "google_maps", label: "Google Maps" },
  { value: "doctoralia", label: "Doctoralia" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "tiktok", label: "TikTok" },
  { value: "referral", label: "Recomendación de familiar o amigo" },
  { value: "other", label: "Otro" },
]

const REASON_OPTIONS = [
  { value: "hemorroides", label: "Hemorroides" },
  { value: "fisura_o_fistula", label: "Fisura o fístula anal" },
  { value: "sangrado_rectal", label: "Sangrado rectal" },
  { value: "dolor_o_molestia", label: "Dolor o molestia" },
  { value: "colonoscopia_o_revision", label: "Colonoscopia o revisión" },
  { value: "seguimiento_o_control", label: "Seguimiento o control" },
  { value: "otro", label: "Otro" },
]

const DECISION_OPTIONS = [
  { value: "recomendacion", label: "Recomendación" },
  { value: "experiencia", label: "Experiencia" },
  { value: "especialidad", label: "Especialidad" },
  { value: "opiniones_resenas", label: "Opiniones / reseñas" },
  { value: "informacion_internet", label: "Información en internet" },
  { value: "cercania", label: "Cercanía" },
  { value: "confianza", label: "Confianza" },
  { value: "otro", label: "Otro" },
]

const FIRST_VISIT_OPTIONS = [
  { value: "true", label: "Sí" },
  { value: "false", label: "No" },
]

export default function ResearchPage() {
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
      const sessionId = getOrCreateSessionId("research")
      const res = await fetch("/api/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sessionId }),
      })

      if (!res.ok) throw new Error("request-failed")

      router.push("/research/success")
    } catch {
      setSubmitError("No pudimos guardar tu respuesta. Por favor intenta de nuevo.")
    }
  }

  return (
    <FormShell
      title="Antes de tu consulta"
      subtitle="Ayúdanos con estas 5 preguntas rápidas mientras esperas. Toma menos de un minuto."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="city" className="text-sm font-semibold text-gray-800 mb-2.5 block">
            ¿De qué ciudad o municipio nos visitas?
          </label>
          <Input
            id="city"
            placeholder="Ej. Puebla"
            className="h-12 text-base"
            {...register("city")}
          />
          {errors.city && (
            <p className="text-xs text-red-600 mt-1.5">Escribe tu ciudad o municipio.</p>
          )}
        </div>

        <Controller
          control={control}
          name="acquisitionSource"
          render={({ field }) => (
            <ChoiceGroup
              label="¿Cómo conociste al Dr. Fernández?"
              options={SOURCE_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              columns={2}
            />
          )}
        />
        {errors.acquisitionSource && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una opción.</p>
        )}

        <Controller
          control={control}
          name="consultationReason"
          render={({ field }) => (
            <ChoiceGroup
              label="¿Qué te llevó a buscar atención con el doctor?"
              options={REASON_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              columns={2}
            />
          )}
        />
        {errors.consultationReason && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una opción.</p>
        )}

        <Controller
          control={control}
          name="decisionFactor"
          render={({ field }) => (
            <ChoiceGroup
              label="¿Qué fue lo que más influyó para elegir al doctor?"
              options={DECISION_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              columns={2}
            />
          )}
        />
        {errors.decisionFactor && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una opción.</p>
        )}

        <Controller
          control={control}
          name="firstVisit"
          render={({ field }) => (
            <ChoiceGroup
              label="¿Es tu primera consulta con el doctor?"
              options={FIRST_VISIT_OPTIONS}
              value={field.value === undefined ? undefined : String(field.value)}
              onChange={(v) => field.onChange(v === "true")}
              columns={2}
            />
          )}
        />
        {errors.firstVisit && (
          <p className="text-xs text-red-600 -mt-4">Selecciona una opción.</p>
        )}

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
