import { useState } from 'react';
import { cars, categories } from '../data/cars';
import CarCard from './CarCard';
import type { Car } from '../data/cars';

interface Props {
  onBook: (car: Car) => void;
}

export default function Cars({ onBook }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? cars : cars.filter((c) => c.category === activeCategory);

  return (
    <section id="cars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Available Cars</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Choose your ride</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-amber-400 text-white shadow-md shadow-amber-200' : 'bg-white text-slate-600 border border-gray-200 hover:border-amber-300 hover:text-amber-600'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => <CarCard key={car.id} car={car} onBook={onBook} />)}
        </div>
        {filtered.length === 0 && <div className="text-center py-20 text-slate-400 text-lg font-medium">No cars found in this category.</div>}
      </div>
    </section>
  );
}
