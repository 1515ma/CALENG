import axios from 'axios';
import { supabase } from './supabase';
import { isDemoMode, demoUsage, getMockResult } from './demo';

const BASE_URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({ baseURL: BASE_URL });

// Interceptor – injeta o JWT do Supabase em cada requisição
api.interceptors.request.use(async (config) => {
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.access_token) {
    config.headers.Authorization = `Bearer ${session.access_token}`;
  }
  return config;
});

// ── Cálculo ──────────────────────────────────────────────────────────────────
export async function calculate(category, type, params) {
  if (isDemoMode()) {
    await new Promise(r => setTimeout(r, 600)); // simula latência
    return { success: true, result: getMockResult(category), queriesUsed: 3, queriesLimit: 5 };
  }
  const { data } = await api.post('/api/calculate', { category, type, params });
  return data;
}

// ── Uso semanal ───────────────────────────────────────────────────────────────
export async function getUsage() {
  if (isDemoMode()) return { ...demoUsage };
  const { data } = await api.get('/api/usage');
  return data;
}

// ── Stripe ───────────────────────────────────────────────────────────────────
export async function createCheckout() {
  if (isDemoMode()) { alert('Modo demo: pagamento desabilitado.'); return { url: '' }; }
  const { data } = await api.post('/api/stripe/create-checkout');
  return data; // { url }
}

export async function getSubscriptionStatus() {
  if (isDemoMode()) return { isPremium: false };
  const { data } = await api.get('/api/stripe/status');
  return data; // { isPremium, subscription }
}

export async function cancelSubscription() {
  if (isDemoMode()) return {};
  const { data } = await api.post('/api/stripe/cancel');
  return data;
}
