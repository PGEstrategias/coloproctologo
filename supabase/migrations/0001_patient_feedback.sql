-- Módulo de investigación y experiencia del paciente (MVP).
-- Ejecutar en el SQL Editor de Supabase.

create extension if not exists pgcrypto;

create table if not exists research_responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  city text not null,
  acquisition_source text not null check (
    acquisition_source in (
      'google', 'google_maps', 'doctoralia', 'instagram',
      'facebook', 'tiktok', 'referral', 'other'
    )
  ),
  consultation_reason text not null check (
    consultation_reason in (
      'hemorroides', 'fisura_o_fistula', 'sangrado_rectal',
      'dolor_o_molestia', 'colonoscopia_o_revision',
      'seguimiento_o_control', 'otro'
    )
  ),
  decision_factor text not null check (
    decision_factor in (
      'recomendacion', 'experiencia', 'especialidad', 'opiniones_resenas',
      'informacion_internet', 'cercania', 'confianza', 'otro'
    )
  ),
  first_visit boolean not null,
  created_at timestamptz not null default now()
);

create table if not exists experience_responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  overall_experience smallint not null check (overall_experience between 1 and 5),
  doctor_clarity smallint not null check (doctor_clarity between 1 and 5),
  doctor_trust smallint not null check (doctor_trust between 1 and 5),
  process_ease smallint not null check (process_ease between 1 and 5),
  liked_most text,
  improvement text,
  recommendation_score smallint not null check (recommendation_score between 0 and 10),
  created_at timestamptz not null default now()
);

create table if not exists review_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  platform text not null check (platform in ('google', 'doctoralia')),
  review_request_id uuid references experience_responses(id),
  created_at timestamptz not null default now()
);

create index if not exists research_responses_created_at_idx on research_responses (created_at desc);
create index if not exists experience_responses_created_at_idx on experience_responses (created_at desc);
create index if not exists review_events_created_at_idx on review_events (created_at desc);

-- RLS activado sin políticas públicas: solo la service role key (usada
-- exclusivamente en el servidor, nunca en el navegador) puede leer/escribir.
alter table research_responses enable row level security;
alter table experience_responses enable row level security;
alter table review_events enable row level security;
