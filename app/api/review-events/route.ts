import { NextResponse } from "next/server"

import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { reviewEventSchema } from "@/lib/validations"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = reviewEventSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 })
  }

  const { sessionId, platform, reviewRequestId } = parsed.data

  try {
    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from("review_events").insert({
      session_id: sessionId,
      platform,
      review_request_id: reviewRequestId ?? null,
    })

    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch {
    // No bloqueamos al usuario: el click hacia Google/Doctoralia ya ocurrió.
    return NextResponse.json({ error: "No se pudo registrar el evento." }, { status: 500 })
  }
}
