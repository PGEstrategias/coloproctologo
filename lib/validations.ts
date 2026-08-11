import { z } from "zod"

// Longitudes/rangos acotados para evitar payloads inesperados.
const shortText = (max: number) => z.string().trim().min(1).max(max)
const optionalText = (max: number) => z.string().trim().max(max).optional()

export const ACQUISITION_SOURCES = [
  "google",
  "google_maps",
  "doctoralia",
  "instagram",
  "facebook",
  "tiktok",
  "referral",
  "other",
] as const

export const CONSULTATION_REASONS = [
  "hemorroides",
  "fisura_o_fistula",
  "sangrado_rectal",
  "dolor_o_molestia",
  "colonoscopia_o_revision",
  "seguimiento_o_control",
  "otro",
] as const

export const DECISION_FACTORS = [
  "recomendacion",
  "experiencia",
  "especialidad",
  "opiniones_resenas",
  "informacion_internet",
  "cercania",
  "confianza",
  "otro",
] as const

export const researchSchema = z.object({
  sessionId: z.string().uuid(),
  city: shortText(80),
  acquisitionSource: z.enum(ACQUISITION_SOURCES),
  consultationReason: z.enum(CONSULTATION_REASONS),
  decisionFactor: z.enum(DECISION_FACTORS),
  firstVisit: z.boolean(),
})

export type ResearchInput = z.infer<typeof researchSchema>

const scale1to5 = z.number().int().min(1).max(5)

export const experienceSchema = z.object({
  sessionId: z.string().uuid(),
  overallExperience: scale1to5,
  doctorClarity: scale1to5,
  doctorTrust: scale1to5,
  processEase: scale1to5,
  likedMost: optionalText(500),
  improvement: optionalText(500),
  recommendationScore: z.number().int().min(0).max(10),
})

export type ExperienceInput = z.infer<typeof experienceSchema>

export const REVIEW_PLATFORMS = ["google", "doctoralia"] as const

export const reviewEventSchema = z.object({
  sessionId: z.string().uuid(),
  platform: z.enum(REVIEW_PLATFORMS),
  reviewRequestId: z.string().uuid().optional(),
})

export type ReviewEventInput = z.infer<typeof reviewEventSchema>
