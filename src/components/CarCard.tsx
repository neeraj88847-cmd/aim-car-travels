import { Users, Gauge } from 'lucide-react';
import type { Car } from '../data/cars';

interface Props {
  car: Car;
  onBook: (car: Car) => void;
}

const categoryColors: Record<string, string> = {
  Hatchbacks: 'bg-blue-100 text-blue-700',
  Sedans: 'bg-green-100 text-green-700',
  'Compact SUVs': 'bg-orange-100 text-orange-700',
  MUVs: 'bg-slate-100 text-slate-700',
  Adventure: 'bg-red-100 text-red-700',
  Premium: 'bg-amber-100 text-amber-700',
};

export default function CarCard({ car, onBook }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-[16/10] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-gray-300">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
            <rect x="5" y="20" width="70" height="22" rx="4" fill="#E5E7EB" />
            <path d="M15 20 L22 8 L58 8 L65 20" fill="#D1D5DB" />
            <circle cx="20" cy="44" r="6" fill="#9CA3AF" />
            <circle cx="60" cy="44" r="6" fill="#9CA3AF" />
            <rect x="25" y="10" width="12" height="8" rx="1" fill="#CBD5E1" />
            <rect x="43" y="10" width="12" height="8" rx="1" fill="#CBD5E1" />
          </svg>
        </div>
        <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${categoryColors[car.category] || 'bg-gray-100 text-gray-600'}`}>
          {car.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{car.name}</h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Users size={15} className="text-amber-500" /><span>{car.seats} Seater</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Gauge size={15} className="text-amber-500" /><span>{car.transmission}</span>
          </div>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="text-2xl font-extrabold text-slate-900">₹{car.displayPrice.toLocaleString()}</div>
            <div className="text-xs text-slate-400 font-medium">per day</div>
          </div>
          <button onClick={() => onBook(car)} className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-amber-100 active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
