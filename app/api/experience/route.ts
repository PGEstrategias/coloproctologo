import { NextResponse } from "next/server"

import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { experienceSchema } from "@/lib/validations"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = experienceSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos. Revisa el formulario e inténtalo de nuevo." },
      { status: 400 }
    )
  }

  const {
    sessionId,
    overallExperience,
    doctorClarity,
    doctorTrust,
    processEase,
    likedMost,
    improvement,
    recommendationScore,
  } = parsed.data

  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from("experience_responses")
      .insert({
        session_id: sessionId,
        overall_experience: overallExperience,
        doctor_clarity: doctorClarity,
        doctor_trust: doctorTrust,
        process_ease: processEase,
        liked_most: likedMost || null,
        improvement: improvement || null,
        recommendation_score: recommendationScore,
      })
      .select("id")
      .single()

    if (error) throw error

    return NextResponse.json({ ok: true, id: data.id })
  } catch {
    return NextResponse.json(
      { error: "No pudimos guardar tu respuesta. Intenta de nuevo en un momento." },
      { status: 500 }
    )
  }
}
