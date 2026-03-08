import { createClient } from '@supabase/supabase-js';

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL     || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

if (!import.meta.env.VITE_SUPABASE_URL) {
  console.warn('[MecCalc] VITE_SUPABASE_URL não definida — crie o arquivo frontend/.env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
