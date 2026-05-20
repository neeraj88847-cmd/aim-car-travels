import { ShieldCheck, IndianRupee, Clock, Headphones } from 'lucide-react';

const features = [
  { icon: <ShieldCheck size={24} />, title: 'Verified & Insured', desc: 'Every car is sanitized, serviced and fully insured for your safety.' },
  { icon: <IndianRupee size={24} />, title: 'Transparent Pricing', desc: 'Flat per-day rates. No hidden fees, no surprises at drop-off.' },
  { icon: <Clock size={24} />, title: '24/7 Availability', desc: 'Book any time. Pickup and drop available around the clock.' },
  { icon: <Headphones size={24} />, title: 'Real Human Support', desc: 'Talk to us directly on WhatsApp \u2014 no bots, no waiting.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Why Choose Us</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Built for travelers who care</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-5">{f.icon}</div>
              <h3 className="text-base font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
