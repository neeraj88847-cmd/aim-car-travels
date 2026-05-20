import { ArrowRight, Star, MapPin, Shield } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-20 lg:pt-24 min-h-screen bg-white flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-700 text-sm font-semibold">South India's Trusted Self-Drive Rentals</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Drive Your Journey,{' '}
            <span className="text-amber-500 relative">
              Your Way
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 6 Q75 2 150 6 Q225 10 298 6" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Premium self-drive car rentals with verified cars, transparent pricing, and 24/7 support. Explore South India on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => scrollTo('cars')} className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-2xl text-base transition-all duration-200 shadow-lg hover:shadow-amber-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
              Browse Cars <ArrowRight size={18} />
            </button>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-600 font-bold rounded-2xl text-base transition-all duration-200">
              Talk to Us
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10">
            {[
              { icon: <Shield size={16} />, text: 'Fully Insured' },
              { icon: <Star size={16} className="fill-amber-500" />, text: '4.9★ Rated' },
              { icon: <MapPin size={16} />, text: 'South India Wide' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <span className="text-amber-500">{b.icon}</span>{b.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 aspect-[4/3] shadow-2xl">
            <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Premium Car" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Starting from</div>
                <div className="text-2xl font-extrabold text-slate-900">₹2,500<span className="text-sm font-normal text-slate-400">/day</span></div>
              </div>
              <button onClick={() => scrollTo('cars')} className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-xl text-sm transition-colors">View Fleet</button>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full opacity-60 blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-50 rounded-full opacity-80 blur-2xl" />
        </div>
      </div>
      <div className="bg-slate-50 border-t border-gray-100 py-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Welcome to Aim <span className="text-amber-500">Travels</span></h2>
          <p className="mt-3 text-slate-500 text-base leading-relaxed max-w-xl mx-auto">Your freedom to explore starts here. Choose from our premium fleet and hit the road with confidence.</p>
        </div>
      </div>
    </section>
  );
}
