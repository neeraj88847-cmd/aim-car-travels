import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const contacts = [
  { icon: <Phone size={22} />, label: 'CALL US', primary: '+91 99999 99999', secondary: 'Mon\u2013Sun, 6 AM \u2013 10 PM', href: 'tel:+919999999999' },
  { icon: <MessageCircle size={22} />, label: 'WHATSAPP', primary: '+91 99999 99999', secondary: 'Chat with us anytime', href: 'https://wa.me/919999999999' },
  { icon: <Mail size={22} />, label: 'EMAIL', primary: 'info@aimcartravels.com', secondary: 'We reply within 2 hours', href: 'mailto:info@aimcartravels.com' },
  { icon: <MapPin size={22} />, label: 'ADDRESS', primary: 'Bangalore, Karnataka', secondary: 'South India Wide Service', href: 'https://maps.google.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Get In Touch</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contact us</h2>
          <p className="text-slate-500 mt-3 text-base max-w-md mx-auto">Have questions? Reach out and we'll get back to you right away.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center block">
              <div className="w-12 h-12 bg-amber-50 group-hover:bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-4 transition-colors">{c.icon}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">{c.label}</div>
              <div className="font-bold text-slate-800 text-sm mb-1">{c.primary}</div>
              <div className="text-xs text-slate-400">{c.secondary}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
