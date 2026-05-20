import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src="/logo.png" alt="AIM Car Travels" className="h-10 w-auto" />
            <div>
              <div className="text-lg font-bold text-slate-800 leading-tight">AIM Car Travels</div>
              <div className="text-xs font-semibold text-amber-500 tracking-widest uppercase">Premium Rentals</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {['cars', 'why-us', 'about', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-slate-600 hover:text-amber-500 font-medium capitalize transition-colors duration-200 text-sm tracking-wide">
                {item === 'why-us' ? 'Why Us' : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919999999999" className="flex items-center gap-2 px-4 py-2 border-2 border-slate-200 rounded-full text-slate-700 hover:border-amber-400 hover:text-amber-600 transition-all duration-200 text-sm font-semibold">
              <Phone size={15} /> Call Us
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-full text-sm font-bold transition-all duration-200 shadow-md hover:shadow-amber-200 hover:shadow-lg">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
          <button className="lg:hidden p-2 text-slate-600 hover:text-amber-500 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {['cars', 'why-us', 'about', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-4 py-2.5 text-slate-700 hover:bg-amber-50 hover:text-amber-600 rounded-xl font-medium transition-colors capitalize">
              {item === 'why-us' ? 'Why Us' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="tel:+919999999999" className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-slate-200 rounded-xl text-slate-700 text-sm font-semibold"><Phone size={15} /> Call Us</a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-amber-400 text-white rounded-xl text-sm font-bold"><MessageCircle size={15} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
