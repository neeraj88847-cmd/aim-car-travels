import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  { initials: 'RK', name: 'Rajesh Kumar', rating: 5, text: 'Excellent service! The car was spotless and well-maintained. Pickup was smooth and the team was very helpful. Will definitely rent again for my next trip.', date: 'March 2025' },
  { initials: 'PS', name: 'Priya Sharma', rating: 5, text: 'AIM Car Travels made our family road trip perfect. Transparent pricing with zero hidden charges. The Innova was in great condition. Highly recommended!', date: 'February 2025' },
  { initials: 'AV', name: 'Arun Venkat', rating: 5, text: 'Booked the Thar for a Coorg trip \u2014 absolute beast of a car! The booking process was super simple and the support team was available throughout. 10/10!', date: 'January 2025' },
  { initials: 'MM', name: 'Meera Murthy', rating: 5, text: 'Best self-drive rental in the area. Clean car, honest pricing, and the team responded instantly on WhatsApp. Felt completely safe throughout the journey.', date: 'April 2025' },
  { initials: 'SK', name: 'Suresh K', rating: 4, text: 'Good experience overall. The car was clean and pickup was on time. Pricing is fair and there are no surprise charges. Would use again.', date: 'March 2025' },
  { initials: 'DN', name: 'Divya Nair', rating: 5, text: 'Outstanding rental experience! The Dzire Automatic was perfect for city driving. AIM Car Travels goes above and beyond for their customers.', date: 'May 2025' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Customer Reviews</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What our travelers say</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm flex-shrink-0">{r.initials}</div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://g.page/r/aim-car-travels/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white font-bold rounded-2xl transition-all duration-200 text-sm">
            <ExternalLink size={16} /> View More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
