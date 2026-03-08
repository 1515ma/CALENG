export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 shadow-card space-y-5">
      {/* Title */}
      {result.title && (
        <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          {result.title}
        </h2>
      )}

      {/* Warning */}
      {result.warning && (
        <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-xl px-3 py-2.5 text-amber-700 dark:text-amber-400 text-xs">
          ⚠ {result.warning}
        </div>
      )}

      {/* Inputs */}
      {result.inputs && Object.keys(result.inputs).length > 0 && (
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">Dados de entrada</p>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 grid grid-cols-2 gap-x-4 gap-y-0">
            {Object.entries(result.inputs).map(([k, v]) => (
              <div key={k} className="result-row">
                <span className="result-key">{k}</span>
                <span className="mono result-value">{String(v)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {result.results && Object.keys(result.results).length > 0 && (
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">Resultados</p>
          <div className="flex flex-col">
            {Object.entries(result.results).map(([k, v]) => {
              const isStatus = k.toLowerCase() === 'status';
              const approved = isStatus && String(v).includes('APROVADO');
              const rejected = isStatus && String(v).includes('REPROVADO');
              return (
                <div
                  key={k}
                  className={`result-row px-3 rounded-lg ${
                    approved ? 'bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900 mb-1' :
                    rejected ? 'bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 mb-1' : ''
                  }`}
                >
                  <span className="result-key">{k}</span>
                  <span className={`mono result-value ${
                    approved ? 'text-green-600 dark:text-green-400' :
                    rejected ? 'text-red-600 dark:text-red-400' : ''
                  }`}>{String(v)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sections */}
      {result.sections && result.sections.map((section, si) => (
        <div key={si}>
          <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">{section.title}</p>
          <div className="flex flex-col gap-1">
            {(section.items || []).map((item, ii) => (
              <div key={ii} className={`flex items-start gap-2 text-sm py-1.5 px-3 rounded-xl ${
                item.critical
                  ? 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30'
                  : 'text-slate-700 dark:text-slate-300'
              }`}>
                <span className="mt-0.5 flex-shrink-0">{item.critical ? '⚠' : '✓'}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Table */}
      {result.table && (
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">Tabela de referência</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  {result.table.headers.map((h, i) => (
                    <th key={i} className="px-3 py-2.5 text-left text-slate-600 dark:text-slate-400 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.table.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2 mono text-slate-700 dark:text-slate-300 whitespace-nowrap">{String(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Formula */}
      {result.formula && (
        <div className="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800/50 rounded-xl px-4 py-3">
          <p className="text-xs text-brand-500 dark:text-brand-400 mb-1 font-semibold">Fórmula utilizada</p>
          <p className="mono text-brand-700 dark:text-brand-300 text-sm leading-relaxed">{result.formula}</p>
        </div>
      )}

      {/* Note */}
      {result.note && (
        <p className="text-slate-400 dark:text-slate-500 text-xs italic">{result.note}</p>
      )}

      {/* Norm */}
      {result.norm && (
        <p className="text-slate-400 dark:text-slate-500 text-xs">📋 <span className="font-medium">{result.norm}</span></p>
      )}
    </div>
  );
}
