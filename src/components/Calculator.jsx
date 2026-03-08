import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { calculate } from '../lib/api';
import { CATEGORIES, COLOR_MAP } from '../config/categories';
import { useUsage } from '../App';
import ResultDisplay from './ResultDisplay';
import PaywallModal from './PaywallModal';
import { createCheckout } from '../lib/api';

export default function Calculator() {
  const { categoryId }          = useParams();
  const navigate                = useNavigate();
  const { usage, setUsage }     = useUsage();

  const category = CATEGORIES[categoryId];
  if (!category) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-400">Categoria não encontrada.</p>
        <Link to="/" className="btn-primary mt-4 inline-block">Voltar</Link>
      </div>
    );
  }

  const typeList = Object.entries(category.types);
  const [selectedType, setSelectedType] = useState(typeList[0][0]);
  const [formData,     setFormData]     = useState({});
  const [result,       setResult]       = useState(null);
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState('');
  const [showPaywall,  setShowPaywall]  = useState(false);

  const currentType   = category.types[selectedType];
  const colors        = COLOR_MAP[category.color] || COLOR_MAP['slate'];

  function handleTypeChange(typeKey) {
    setSelectedType(typeKey);
    setFormData({});
    setResult(null);
    setError('');
  }

  function handleField(name, value) {
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function buildParams() {
    const params = {};
    (currentType.fields || []).forEach((f) => {
      const raw = formData[f.name];
      const val = raw !== undefined && raw !== '' ? raw : (f.defaultValue ?? f.default ?? undefined);
      if (val !== undefined) {
        params[f.name] = f.type === 'number' ? Number(val) : val;
      }
    });
    return params;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const params = buildParams();
      const res    = await calculate(categoryId, selectedType, params);

      // Update usage context
      if (res.queriesUsed != null) {
        setUsage(prev => ({ ...prev, queriesUsed: res.queriesUsed }));
      }

      setResult(res.result);
    } catch (err) {
      if (err.response?.status === 429 || err.response?.data?.code === 'LIMIT_REACHED') {
        setShowPaywall(true);
      } else {
        setError(err.response?.data?.error || err.message || 'Erro ao calcular.');
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleUpgrade() {
    try {
      const { url } = await createCheckout();
      window.location.href = url;
    } catch (err) {
      alert('Erro ao iniciar pagamento: ' + err.message);
    }
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Dashboard</Link>
          <span>/</span>
          <span className={`${colors.text} font-medium`}>{category.label}</span>
        </div>

        {/* Page header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center text-3xl shadow`}>
            {category.icon}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">{category.label}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{category.description}</p>
          </div>
        </div>

        {/* Usage reminder */}
        {!usage.isPremium && usage.queriesUsed != null && (
          <div className={`text-xs mb-5 py-2.5 px-4 rounded-xl flex items-center gap-2 border ${
            usage.queriesUsed >= (usage.queriesLimit ?? 5)
              ? 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900'
              : 'bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'
          }`}>
            {usage.queriesUsed >= (usage.queriesLimit ?? 5)
              ? '⚠️ Limite atingido. Assine para continuar.'
              : `Consultas esta semana: ${usage.queriesUsed} / ${usage.queriesLimit ?? 5}`
            }
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Type selector */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-4 shadow-card">
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-medium mb-3">Tipo de cálculo</p>
              <div className="flex flex-col gap-1">
                {typeList.map(([key, t]) => (
                  <button
                    key={key}
                    onClick={() => handleTypeChange(key)}
                    className={`type-btn ${selectedType === key ? 'type-btn-active' : ''}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-4 shadow-card">
              {currentType.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">{currentType.description}</p>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {(currentType.fields || []).map((field) => (
                  <div key={field.name}>
                    <label className="label">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-0.5">*</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        className="input"
                        value={formData[field.name] ?? (field.defaultValue ?? field.default ?? '')}
                        onChange={e => handleField(field.name, e.target.value)}
                      >
                        {field.options?.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type || 'number'}
                        className="input"
                        placeholder={field.placeholder || ''}
                        value={formData[field.name] ?? (field.defaultValue !== undefined ? field.defaultValue : field.default !== undefined ? field.default : '')}
                        onChange={e => handleField(field.name, e.target.value)}
                        required={field.required}
                        step="any"
                      />
                    )}
                    {field.hint && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{field.hint}</p>
                    )}
                  </div>
                ))}

                {error && (
                  <p className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-xl">⚠ {error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary mt-1 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Calculando…
                    </>
                  ) : 'Calcular'}
                </button>
              </form>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-2">
            {result ? (
              <ResultDisplay result={result} />
            ) : (
              <div className="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-700
                rounded-2xl h-full min-h-[240px] flex flex-col items-center justify-center text-center p-8">
                <span className="text-5xl mb-3 opacity-40">📐</span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Preencha os dados e clique em <strong>Calcular</strong></p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">O resultado aparecerá aqui com fórmulas e normas</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <PaywallModal
        open={showPaywall}
        onClose={() => setShowPaywall(false)}
        onUpgrade={handleUpgrade}
        usage={usage}
      />
    </>
  );
}
