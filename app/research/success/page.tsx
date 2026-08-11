import { CheckCircle2 } from "lucide-react"

import { FormShell } from "@/components/patient-forms/form-shell"

export default function ResearchSuccessPage() {
  return (
    <FormShell title="¡Gracias!" showPrivacyNote={false}>
      <div className="flex flex-col items-center text-center py-4">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Recibimos tus respuestas. Esto nos ayuda a mejorar la atención para ti y para
          futuros pacientes.
        </p>
        <p className="text-sm text-gray-400 mt-4">Ya puedes guardar tu teléfono.</p>
      </div>
    </FormShell>
  )
}
