import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Menu, 
  X,
  Droplets,
  Home,
  Building2,
  Sparkles
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "+918595416642"; // Apna WhatsApp number yahan likhein
  const phoneNumber = "+918595416652"; // Apna Phone number yahan likhein

  const services = [
    {
      title: "Deep Home Cleaning",
      description: "Complete sanitization and deep cleaning of every corner of your home.",
      icon: <Home className="w-8 h-8 text-blue-600" />,
      price: "Starting from ₹call for best price"
    },
    {
      title: "Kitchen Cleaning",
      description: "Degreasing of chimneys, cabinets, and deep cleaning of all appliances.",
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      price: "Starting from ₹999"
    },
    {
      title: "Office Cleaning",
      description: "Professional cleaning for workspaces to ensure a healthy environment.",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      price: "Custom Quote"
    },
    {
      title: "Sofa & Carpet",
      description: "Shampooing and vacuuming to remove deep-seated dust and stains.",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      price: "Starting from ₹125 per seat"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900 tracking-tight">PureDeep<span className="text-blue-600">Clean</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition">About</a>
              <a href={`tel:${phoneNumber}`} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition flex items-center">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
            <a href="#home" className="block text-gray-600 font-medium">Home</a>
            <a href="#services" className="block text-gray-600 font-medium">Services</a>
            <a href="#about" className="block text-gray-600 font-medium">About</a>
            <a href={`tel:${phoneNumber}`} className="flex items-center text-blue-600 font-bold">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <ShieldCheck className="w-4 h-4 mr-2" /> 100% Satisfaction Guaranteed
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Professional <span className="text-blue-600">Deep Cleaning</span> <br />For Your Happy Home
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience the joy of a spotless home with our premium cleaning services. 
            We use eco-friendly products and expert techniques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-6 h-6 mr-2" /> Book on WhatsApp
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black transition flex items-center justify-center shadow-lg shadow-gray-200"
            >
              <Phone className="w-6 h-6 mr-2" /> Call for Quote
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Happy Clients", value: "500+" },
            { label: "Expert Cleaners", value: "50+" },
            { label: "Rating", value: "4.9/5" },
            { label: "Cities", value: "10+" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a wide range of cleaning solutions tailored to your specific needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-blue-600 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose PureDeep Clean?</h2>
              <div className="space-y-6">
                {[
                  { title: "Trained Professionals", desc: "Our team is background-checked and professionally trained.", icon: <Star className="text-yellow-500" /> },
                  { title: "Eco-Friendly Products", desc: "We use safe, non-toxic cleaning agents for your family and pets.", icon: <ShieldCheck className="text-green-500" /> },
                  { title: "On-Time Service", desc: "We value your time and always arrive as scheduled.", icon: <Clock className="text-blue-500" /> },
                  { title: "Best Price Guarantee", desc: "Premium service at the most competitive market rates.", icon: <CheckCircle2 className="text-purple-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800" 
                alt="Cleaning Service" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold">U{i}</div>
                    ))}
                  </div>
                  <div className="text-sm font-bold">Trusted by 500+ <br/>Local Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">PureDeep Clean</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for professional deep cleaning services. Making homes cleaner and healthier since 2020.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{phoneNumber}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Serving All Major Local Areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span>Available 24/7 on WhatsApp</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 text-gray-400">
                <a href="#home" className="hover:text-white transition">Home</a>
                <a href="#services" className="hover:text-white transition">Services</a>
                <a href="#about" className="hover:text-white transition">About Us</a>
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} PureDeep Clean. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex gap-3">
        <a 
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center shadow-2xl"
        >
          <Phone className="w-5 h-5 mr-2" /> Call
        </a>
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center shadow-2xl"
        >
          <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;
