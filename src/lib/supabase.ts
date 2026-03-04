/**
 * supabase.ts
 * ──────────────────────────────────────────────────────────────
 * Configuración de Supabase para SheSa.
 *
 * 🔧 CÓMO ACTIVAR:
 *  1. Crea un proyecto en https://supabase.com
 *  2. Ve a Project Settings → API
 *  3. Reemplaza VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY
 *     en tu archivo .env.local
 *  4. Descomenta el cliente de Supabase
 *
 * Variables en .env.local:
 *   VITE_SUPABASE_URL=https://xxxx.supabase.co
 *   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
 * ──────────────────────────────────────────────────────────────
 */

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string
// const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY as string

// export const supabase = createClient(supabaseUrl, supabaseKey)

// ── Tipos de ejemplo para cuando integres la DB ──────────────
export interface Product {
  id: string
  name: string
  price: number
  image: string
  category?: 'manualidades' | 'farmasi'
  description?: string
  whatsapp_message?: string
  created_at?: string
}

export interface Lead {
  id?: string
  name: string
  phone: string
  interest: 'emprender' | 'manualidades' | 'farmasi' | 'general'
  created_at?: string
}

// ── Placeholder exportado para no romper imports futuros ──────
export const supabase = null
