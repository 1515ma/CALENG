import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { isDemoMode, clearDemoMode } from '../lib/demo';
import { getUsage, createCheckout } from '../lib/api';
import { useUsage, useTheme } from '../App';
import PaywallModal from './PaywallModal';

export default function Header() {
  const { usage, setUsage } = useUsage();
  const { dark, setDark }   = useTheme();
  const [user,         setUser]         = useState(null);
  const [showPaywall,  setShowPaywall]  = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    getUsage().then(setUsage).catch(() => {});
    // eslint-disable-next-line
  }, []);

  async function handleLogout() {
    if (isDemoMode()) { clearDemoMode(); window.location.reload(); return; }
    await supabase.auth.signOut();
  }

  async function handleUpgrade() {
    try {
      const { url } = await createCheckout();
      window.location.href = url;
    } catch (err) {
      alert('Erro ao iniciar pagamento: ' + err.message);
    }
  }

  const used     = usage.queriesUsed  ?? 0;
  const limit    = usage.queriesLimit ?? 5;
  const pct      = usage.isPremium ? 100 : Math.min((used / limit) * 100, 100);
  const barColor = pct >= 100 ? 'bg-red-500' : pct >= 60 ? 'bg-amber-400' : 'bg-brand-500';

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 h-16
        bg-white/95 dark:bg-slate-950/95 backdrop-blur
        border-b border-slate-200 dark:border-slate-800 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shadow">
              <span className="text-base leading-none">⚙️</span>
            </div>
            <span className="hidden sm:inline font-bold text-slate-900 dark:text-white text-base group-hover:text-brand-600 transition-colors">
              MecCalc
            </span>
          </Link>

          {/* Usage bar */}
          <div className="flex-1 max-w-64 hidden md:block">
            {usage.isPremium ? (
              <span className="badge-premium">⭐ Plano Ilimitado</span>
            ) : (
              <div>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>Consultas esta semana</span>
                  <span className={used >= limit ? 'text-red-500 font-bold' : 'font-medium text-slate-700 dark:text-slate-200'}>
                    {used}/{limit}
                  </span>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${barColor} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(d => !d)}
              title={dark ? 'Modo claro' : 'Modo escuro'}
              className="w-9 h-9 rounded-xl flex items-center justify-center
                text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {!usage.isPremium && (
              <button
                onClick={() => setShowPaywall(true)}
                className="hidden sm:flex items-center gap-1.5 btn-primary py-1.5 px-3 text-sm"
              >
                <span>⭐</span> R$ 5/mês
              </button>
            )}

            {/* Avatar dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="w-9 h-9 rounded-xl bg-brand-600 hover:bg-brand-700 transition-colors
                  flex items-center justify-center text-white font-bold text-sm shadow"
              >
                {isDemoMode() ? '👤' : (user?.email?.[0]?.toUpperCase() || '?')}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-11 w-56
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-700
                  rounded-2xl shadow-xl py-1.5 z-50">
                  <p className="px-4 py-2 text-xs text-slate-400 truncate">
                    {isDemoMode() ? 'Modo Demo' : (user?.email || '')}
                  </p>
                  <hr className="border-slate-100 dark:border-slate-800 my-1" />
                  {!usage.isPremium && (
                    <button
                      onClick={() => { setDropdownOpen(false); setShowPaywall(true); }}
                      className="w-full text-left px-4 py-2 text-sm text-brand-600 dark:text-brand-400
                        hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
                    >
                      ⭐ Assinar por R$ 5/mês
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300
                      hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <PaywallModal
        open={showPaywall}
        onClose={() => setShowPaywall(false)}
        onUpgrade={handleUpgrade}
        usage={usage}
      />
    </>
  );
}
