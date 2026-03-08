import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsage } from '../lib/api';
import { useUsage } from '../App';
import { CATEGORY_LIST, COLOR_MAP } from '../config/categories';

export default function Dashboard() {
  const { setUsage } = useUsage();
  const navigate     = useNavigate();

  useEffect(() => {
    getUsage().then(setUsage).catch(() => {});
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30
          text-brand-600 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <span>⚙️</span> Engenharia Mecânica
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Calculadora Técnica
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg">
          15 categorias com fórmulas reais, tabelas normativas e referências ABNT · ISO · DIN · NBR.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CATEGORY_LIST.map((cat) => {
          const colors    = COLOR_MAP[cat.color] || COLOR_MAP['slate'];
          const typeCount = Object.keys(cat.types).length;

          return (
            <button
              key={cat.id}
              onClick={() => navigate(`/calc/${cat.id}`)}
              className="group text-left bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-700/60
                rounded-2xl p-5 shadow-card
                hover:shadow-md hover:-translate-y-0.5 hover:border-brand-300 dark:hover:border-brand-600
                transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center text-2xl mb-3 shadow-sm`}>
                {cat.icon}
              </div>
              <h2 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                {cat.label}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 line-clamp-2">
                {cat.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {typeCount} cálculo{typeCount !== 1 ? 's' : ''}
                </span>
                <span className={`text-xs font-medium ${colors.text}`}>→</span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-10">
        Baseado em normas ABNT · NBR · ISO · DIN · NR-12
      </p>
    </div>
  );
}
