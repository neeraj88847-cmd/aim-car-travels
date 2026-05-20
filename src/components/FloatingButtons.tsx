import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, MapPin } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-300 hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95" title="Chat on WhatsApp">
        <MessageCircle size={26} />
      </a>
      <a href="https://maps.google.com/?q=Bangalore+Karnataka" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-amber-400 hover:bg-amber-500 text-white rounded-full shadow-lg hover:shadow-amber-300 hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95" title="Find us on Map">
        <MapPin size={24} />
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-24 right-6 z-40 w-11 h-11 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`} title="Back to Top">
        <ArrowUp size={18} />
      </button>
    </>
  );
}
