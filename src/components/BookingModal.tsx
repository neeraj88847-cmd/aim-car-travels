import { useState, useEffect } from 'react';
import { X, MessageCircle, Clock, Calendar } from 'lucide-react';
import type { Car } from '../data/cars';

interface Props {
  car: Car | null;
  onClose: () => void;
}

export default function BookingModal({ car, onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', returnDate: '' });

  useEffect(() => {
    if (car) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [car]);

  if (!car) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hi! I want to book ${car.name}.\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nReturn: ${form.returnDate}\n\nI have paid \u20b91,000 advance via UPI.`);
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-modal-in">
        <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Book {car.name}</h2>
            <p className="text-sm text-slate-500 mt-1">Fill in your trip details and pay \u20b91,000 advance via UPI to confirm.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors ml-4 flex-shrink-0">
            <X size={20} className="text-slate-500" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Customer Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pickup Date</label>
              <input type="date" name="pickup" value={form.pickup} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Return Date</label>
              <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">Pricing Breakdown</div>
            <div className="space-y-2">
              {[
                { label: '12 Hours', icon: <Clock size={14} />, value: `\u20b9${car.price12h.toLocaleString()}` },
                { label: '24 Hours', icon: <Calendar size={14} />, value: `\u20b9${car.price24h.toLocaleString()}` },
                { label: 'Extra Hours', icon: <Clock size={14} />, value: `\u20b9${car.extraHour}/hour` },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-600 text-sm"><span className="text-amber-500">{row.icon}</span>{row.label}</div>
                  <span className="font-bold text-slate-800 text-sm">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 border-gray-100 rounded-2xl p-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <div className="grid grid-cols-3 gap-0.5 mb-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-sm ${[0,2,6,8,4].includes(i) ? 'bg-slate-800' : 'bg-slate-300'}`} />
                  ))}
                </div>
                <span className="text-[9px] font-bold text-slate-500 mt-1">UPI</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">UPI Advance</div>
                <div className="text-base font-extrabold text-slate-900 mb-1">Scan to pay \u20b91,000</div>
                <div className="text-xs text-slate-500 mb-1">UPI ID: <span className="font-semibold text-slate-700">aimcartravels@upi</span></div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">Pay \u20b91,000 advance to confirm your booking and send payment screenshot on WhatsApp.</p>
                <button type="button" onClick={handleWhatsApp} className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold transition-colors">
                  <MessageCircle size={14} /> Send on WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 border-2 border-gray-200 text-slate-600 font-bold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm">Cancel</button>
            <button type="submit" className="flex-1 py-3 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-amber-200 hover:shadow-lg text-sm">Submit Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
}
