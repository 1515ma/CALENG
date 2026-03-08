import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { setDemoMode } from '../lib/demo';

export default function Auth() {
  const [mode,     setMode]     = useState('login');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [message,  setMessage]  = useState(null);
  const [error,    setError]    = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else if (mode === 'register') {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: window.location.origin }
        });
        if (error) throw error;
        setMessage('Verifique seu e-mail para confirmar o cadastro.');
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/login`
        });
        if (error) throw error;
        setMessage('Link de redefinição enviado para seu e-mail.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      {/* Left panel – branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-brand-600 text-white p-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            ⚙️
          </div>
          <span className="font-bold text-xl">MecCalc</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Cálculos de engenharia mecânica na palma da mão.
          </h2>
          <p className="text-brand-200 text-sm leading-relaxed">
            15 categorias · Fórmulas reais · Normas ABNT/ISO/DIN · Tabelas técnicas
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {['Dimensionamento','Tolerâncias ISO','Fixação e Roscas','Hidráulica'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-brand-100">
                <span className="text-brand-300">✓</span> {f}
              </div>
            ))}
          </div>
        </div>
        <p className="text-brand-300 text-xs">5 consultas gratuitas/semana · R$ 5/mês ilimitado</p>
      </div>

      {/* Right panel – form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-base">⚙️</span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-lg">MecCalc</span>
        </div>

        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            {mode === 'login' ? 'Bem-vindo de volta' : mode === 'register' ? 'Criar conta' : 'Recuperar senha'}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-7">
            {mode === 'login' ? 'Entre para acessar seus cálculos' : mode === 'register' ? '5 consultas gratuitas toda semana' : 'Enviaremos um link para o seu e-mail'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">E-mail</label>
              <input className="input" type="email" value={email}
                onChange={e => setEmail(e.target.value)} required
                placeholder="seu@email.com" autoComplete="email" />
            </div>

            {mode !== 'reset' && (
              <div>
                <label className="label">Senha</label>
                <input className="input" type="password" value={password}
                  onChange={e => setPassword(e.target.value)} required
                  placeholder="••••••••" minLength={6}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
              </div>
            )}

            {error   && <p className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/30 px-3 py-2 rounded-xl">{error}</p>}
            {message && <p className="text-green-600 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/30 px-3 py-2 rounded-xl">{message}</p>}

            <button className="btn-primary w-full" type="submit" disabled={loading}>
              {loading ? 'Aguarde…' : mode === 'login' ? 'Entrar' : mode === 'register' ? 'Criar conta' : 'Enviar link'}
            </button>
          </form>

          <div className="mt-5 space-y-2 text-sm text-center text-slate-500">
            {mode === 'login' && (
              <>
                <button onClick={() => setMode('register')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block w-full">
                  Não tem conta? <span className="text-brand-600 dark:text-brand-400 font-medium">Criar gratuitamente</span>
                </button>
                <button onClick={() => setMode('reset')} className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors block w-full">
                  Esqueceu a senha?
                </button>
              </>
            )}
            {mode !== 'login' && (
              <button onClick={() => setMode('login')} className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                ← Voltar para login
              </button>
            )}
          </div>

          {/* Demo */}
          <div className="mt-6 border border-dashed border-amber-300 dark:border-amber-700/50 rounded-2xl p-4 text-center bg-amber-50 dark:bg-amber-950/30">
            <p className="text-amber-700 dark:text-amber-400 text-xs font-semibold mb-2">⚡ Explorar sem cadastro</p>
            <button
              onClick={() => { setDemoMode(); window.location.reload(); }}
              className="w-full py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              Entrar em modo demo
            </button>
            <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">Dados simulados · sem backend necessário</p>
          </div>
        </div>
      </div>
    </div>
  );
}
