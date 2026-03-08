import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSubscriptionStatus } from '../lib/api';
import { useUsage } from '../App';

export default function SuccessPage() {
  const [searchParams]          = useSearchParams();
  const { setUsage }            = useUsage();
  const [status, setStatus]     = useState('loading'); // loading | ok | error
  const sessionId               = searchParams.get('session_id');

  useEffect(() => {
    let attempts = 0;
    const MAX = 6;
    const DELAY = 2000;

    async function poll() {
      try {
        const data = await getSubscriptionStatus();
        if (data.isPremium) {
          setStatus('ok');
          setUsage(prev => ({ ...prev, isPremium: true, queriesUsed: 0, queriesLimit: null }));
        } else if (attempts < MAX) {
          attempts++;
          setTimeout(poll, DELAY);
        } else {
          // Likely still processing
          setStatus('ok');
        }
      } catch (_) {
        if (attempts < MAX) {
          attempts++;
          setTimeout(poll, DELAY);
        } else {
          setStatus('error');
        }
      }
    }

    poll();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {status === 'loading' && (
        <>
          <div className="text-5xl mb-4 animate-pulse">⏳</div>
          <h1 className="text-xl font-bold text-white mb-2">Confirmando pagamento…</h1>
          <p className="text-slate-400 text-sm">Aguarde alguns instantes enquanto processamos sua assinatura.</p>
        </>
      )}

      {status === 'ok' && (
        <>
          <div className="text-6xl mb-5">🎉</div>
          <h1 className="text-2xl font-bold text-white mb-2">Assinatura ativada!</h1>
          <p className="text-slate-300 text-sm mb-6">
            Bem-vindo ao plano ilimitado. Você agora tem acesso completo a todas as 15 categorias de cálculos.
          </p>
          <Link to="/" className="btn-primary px-8 py-3 text-base">
            Ir para o app ⚙️
          </Link>
          <p className="text-slate-600 text-xs mt-6">
            Um recibo foi enviado para o seu e-mail. Cancele a qualquer momento nas configurações.
          </p>
        </>
      )}

      {status === 'error' && (
        <>
          <div className="text-5xl mb-4">⚠️</div>
          <h1 className="text-xl font-bold text-white mb-2">Algo deu errado</h1>
          <p className="text-slate-400 text-sm mb-4">
            Não foi possível confirmar seu pagamento. Se o débito foi realizado, entre em contato.
          </p>
          <Link to="/" className="btn-primary">Voltar para o app</Link>
        </>
      )}
    </div>
  );
}
