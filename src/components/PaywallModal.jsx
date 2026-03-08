export default function PaywallModal({ open, onClose, onUpgrade, usage }) {
  if (!open) return null;

  const used  = usage?.queriesUsed  ?? 5;
  const limit = usage?.queriesLimit ?? 5;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden">

        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-brand-500 to-brand-400" />

        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >&#x2715;</button>

          <div className="text-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-3xl mx-auto mb-3">&#11088;</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Limite semanal atingido</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Voce usou <strong className="text-slate-800 dark:text-white">{used} de {limit}</strong> consultas gratuitas desta semana.
            </p>
          </div>

          {/* Features */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 mb-5 space-y-2">
            <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-2">O que voce ganha:</p>
            {[
              'Consultas ilimitadas, sem restricoes',
              'Todas as 15 categorias de engenharia',
              'Normas ABNT, ISO, DIN e NBR completas',
              'Acesso imediato apos o pagamento',
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="text-green-500 flex-shrink-0 font-bold">&#x2713;</span>
                {f}
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline justify-center gap-1 mb-5">
            <span className="text-slate-400 text-sm">R$</span>
            <span className="text-5xl font-bold text-slate-900 dark:text-white">5</span>
            <span className="text-slate-400 text-sm">/mes</span>
          </div>

          <button onClick={onUpgrade} className="w-full btn-primary text-base py-3">
            Assinar agora - R$ 5/mes
          </button>

          <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-3">
            Cancele a qualquer momento · Pagamento seguro via Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
