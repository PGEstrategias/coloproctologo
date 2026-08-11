import { NextResponse } from "next/server"

import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { researchSchema } from "@/lib/validations"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = researchSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos. Revisa el formulario e inténtalo de nuevo." },
      { status: 400 }
    )
  }

  const { sessionId, city, acquisitionSource, consultationReason, decisionFactor, firstVisit } =
    parsed.data

  try {
    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from("research_responses").insert({
      session_id: sessionId,
      city,
      acquisition_source: acquisitionSource,
      consultation_reason: consultationReason,
      decision_factor: decisionFactor,
      first_visit: firstVisit,
    })

    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "No pudimos guardar tu respuesta. Intenta de nuevo en un momento." },
      { status: 500 }
    )
  }
}
