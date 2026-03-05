import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Star, Clock, Phone, MapPin, Mail, CheckCircle, Menu, X } from 'lucide-react';

// --- Components (All in one) ---

const Navbar = ({ onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-zinc-900 tracking-tight">PureDeep<span className="text-emerald-600">Clean</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Why Us</a>
            <a href="#contact" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            <button onClick={onBookNow} className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">Book Now</button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
    </nav>
  );
};

// --- Main App ---

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookNow={() => setIsBookingOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">✨ #1 Cleaning Service in New Delhi</span>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 leading-tight">
              Professional Deep Cleaning <br /> <span className="text-emerald-600">For Your Home & Office</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">Expert sanitization, sofa cleaning, and full home hygiene services in Mahaveer Enclave, Palam, and across Delhi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsBookingOpen(true)} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl">Book Now <ArrowRight className="w-5 h-5" /></button>
              <a href="tel:+919876543210" className="bg-zinc-100 text-zinc-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">Call Us <Phone className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Expert Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Full Home Deep Cleaning", desc: "Complete sanitization of every corner, including kitchen and bathrooms." },
              { title: "Sofa & Carpet Cleaning", desc: "Professional shampooing and vacuuming for a brand new look." },
              { title: "Kitchen Degreasing", desc: "Deep cleaning of chimneys, tiles, and cabinets to remove tough oil stains." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                <CheckCircle className="text-emerald-600 w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a href="https://wa.me/919876543210" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform">
        <Phone className="w-8 h-8" />
      </a>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400">© 2024 PureDeep Clean. All rights reserved.</p>
          <p className="mt-2 text-emerald-500 font-bold">Serving Mahaveer Enclave, Palam & Delhi NCR</p>
        </div>
      </footer>
    </div>
  );
            }
