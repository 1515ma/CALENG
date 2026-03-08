export default function UsageBar({ usage }) {
  if (!usage) return null;

  if (usage.isPremium) {
    return (
      <span className="badge-premium text-xs">⭐ Premium – Ilimitado</span>
    );
  }

  const used  = usage.queriesUsed  ?? 0;
  const limit = usage.queriesLimit ?? 5;
  const pct   = Math.min((used / limit) * 100, 100);

  const barColor =
    pct >= 100 ? 'bg-red-500' :
    pct >= 80  ? 'bg-yellow-500' :
    'bg-blue-500';

  const textColor =
    pct >= 100 ? 'text-red-400' :
    pct >= 80  ? 'text-yellow-400' :
    'text-slate-300';

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-slate-500">Consultas esta semana</span>
        <span className={textColor}>{used}/{limit}</span>
      </div>
      <div className="h-2 bg-surface-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {pct >= 100 && (
        <p className="text-red-400 text-xs mt-1">Limite atingido. Assine para continuar.</p>
      )}
    </div>
  );
}
