import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="AIM Car Travels" className="h-10 w-auto brightness-0 invert" />
              <div>
                <div className="text-lg font-bold leading-tight">AIM Car Travels</div>
                <div className="text-xs font-semibold text-amber-400 tracking-widest uppercase">Premium Rentals</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">South India's trusted self-drive car rental service. Premium cars, honest pricing, and unforgettable journeys.</p>
            <div className="flex gap-3">
              {[<Instagram size={18} />, <Facebook size={18} />, <Twitter size={18} />].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-slate-800 hover:bg-amber-400 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">{Icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[{label:'Our Cars',id:'cars'},{label:'Why Choose Us',id:'why-us'},{label:'About Us',id:'about'},{label:'Reviews',id:'reviews'},{label:'Contact',id:'contact'}].map((link) => (
                <li key={link.id}><button onClick={() => scrollTo(link.id)} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">{link.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Our Fleet</h4>
            <ul className="space-y-2.5">
              {['Hatchbacks','Sedans','Compact SUVs','MUVs','Adventure Cars','Premium Cars'].map((cat) => (
                <li key={cat}><button onClick={() => scrollTo('cars')} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">{cat}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              {[
                {icon:<Phone size={14}/>,text:'+91 99999 99999',href:'tel:+919999999999'},
                {icon:<MessageCircle size={14}/>,text:'WhatsApp Us',href:'https://wa.me/919999999999'},
                {icon:<Mail size={14}/>,text:'info@aimcartravels.com',href:'mailto:info@aimcartravels.com'},
                {icon:<MapPin size={14}/>,text:'Bangalore, Karnataka',href:'https://maps.google.com'},
              ].map((item, i) => (
                <li key={i}><a href={item.href} target={item.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-amber-400 text-sm transition-colors"><span className="text-amber-500 flex-shrink-0">{item.icon}</span>{item.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">\u00a9 {new Date().getFullYear()} AIM Car Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-amber-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-amber-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
