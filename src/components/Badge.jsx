import { Gauge, Recycle, Trash2, AlertTriangle, Leaf } from 'lucide-react';

const badgeConfig = {
  // Difficulty
  'Mudah': { color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: Gauge },
  'Sedang': { color: 'bg-amber-50 text-amber-700 border-amber-200', icon: Gauge },
  'Sulit': { color: 'bg-red-50 text-red-700 border-red-200', icon: Gauge },
  // Categories
  'Organik': { color: 'bg-green-50 text-green-700 border-green-200', icon: Leaf },
  'Anorganik': { color: 'bg-blue-50 text-blue-700 border-blue-200', icon: Trash2 },
  'Daur Ulang': { color: 'bg-cyan-50 text-cyan-700 border-cyan-200', icon: Recycle },
  'Berbahaya': { color: 'bg-red-50 text-red-700 border-red-200', icon: AlertTriangle },
};

export default function Badge({ label, type }) {
  const config = badgeConfig[label] || { color: 'bg-gray-50 text-gray-700 border-gray-200', icon: null };
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${config.color}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {type && <span className="text-[10px] uppercase tracking-wide opacity-60 mr-0.5">{type}:</span>}
      {label}
    </span>
  );
}
