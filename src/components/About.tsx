import { CheckCircle } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Happy Trips' },
  { number: '4.9\u2605', label: 'Avg Rating' },
  { number: '24/7', label: 'Support' },
];

const highlights = [
  'Clean, sanitized & fully serviced vehicles',
  'Transparent all-inclusive pricing',
  'Flexible pickup & drop-off timings',
  'Experienced team with local expertise',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">About Us</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">AIM Car Travels</h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-base">AIM Car Travels is South India's most trusted self-drive car rental service. Founded with a passion for giving travelers the freedom to explore at their own pace, we offer a premium fleet of well-maintained, fully insured vehicles across the region.</p>
            <p className="text-slate-500 leading-relaxed mb-8 text-base">We believe travel should be simple, honest, and enjoyable. That's why we offer transparent pricing with no hidden costs, clean and road-ready cars, and a customer-first approach that puts your comfort and safety above everything else.</p>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-amber-500 flex-shrink-0" />
                  <span className="text-slate-600 text-sm font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9]">
              <img src="https://images.pexels.com/photos/1009871/pexels-photo-1009871.jpeg?auto=compress&cs=tinysrgb&w=800" alt="About AIM Car Travels" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center hover:bg-amber-100 transition-colors">
                  <div className="text-2xl font-extrabold text-amber-500 mb-1">{s.number}</div>
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
