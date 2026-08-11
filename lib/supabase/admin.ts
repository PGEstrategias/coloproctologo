import { createClient } from "@supabase/supabase-js"

// Solo para uso en Route Handlers / Server Components.
// Usa la service role key, que nunca debe llegar al navegador.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error("Faltan variables de entorno de Supabase en el servidor.")
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  })
}
