import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cars from './components/Cars';
import BookingModal from './components/BookingModal';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import type { Car } from './data/cars';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Cars onBook={setSelectedCar} />
      <WhyUs />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}
