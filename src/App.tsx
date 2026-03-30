/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin,
  Menu,
  X,
  Heart,
  Leaf,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// 1. IMPORTACIÓN DE FUENTE: Asegúrate de que esto esté en tu CSS o index.html
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novumfarmacias-086319.svg";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 !font-['Poppins'] ${isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="w-40 md:w-52 transition-all">
          <img src={logoUrl} alt="Novum Farmacias" className={`w-full h-auto object-contain ${!isScrolled ? "brightness-0 invert" : ""}`} />
        </a>

        <div className={`hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest ${isScrolled ? "text-brand-primary" : "text-white"}`}>
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#galeria" className="hover:text-brand-secondary transition-colors">Galería</a>
          <a href="https://wa.me/5492494288629" target="_blank" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${isScrolled ? "bg-brand-primary text-white hover:bg-brand-secondary" : "bg-white text-brand-primary hover:bg-brand-bg"}`}>
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button className={`md:hidden p-2 ${isScrolled ? "text-brand-primary" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white border-b absolute top-full left-0 w-full !font-['Poppins'] shadow-2xl">
            <div className="px-6 py-10 flex flex-col space-y-6 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-xl">Inicio</a>
              <a href="#sucursales" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-xl">Sucursales</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-xl">Galería</a>
              <a href="https://wa.me/5492494288629" className="bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Sucursales = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sucursales = [
    { name: "Novafarma", address: "Quintana y Basilico, Villa Italia", whatsapp: "https://wa.me/5492494272729", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum1.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg" },
    { name: "Piedra Que Late", address: "Sanllorenti 783, Barrio Procrear", whatsapp: "https://wa.me/5492494370055", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum2.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg" },
    { name: "Kuala Lumpur", address: "Pinto y 14 de Julio, Centro", whatsapp: "https://wa.me/5492494288629", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum3.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg" },
  ];

  return (
    <section id="sucursales" className="py-20 md:py-32 bg-white !font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Red de atención</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-primary tracking-tighter">Nuestras sucursales.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-brand-bg/40 p-4 md:p-8 rounded-[2rem]">
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {sucursales.map((suc, idx) => (
              <button key={idx} onClick={() => setActiveTab(idx)} className={`p-6 text-center lg:text-left rounded-2xl transition-all flex-1 lg:flex-none flex items-center justify-between min-w-[160px] ${activeTab === idx ? "bg-brand-primary text-white shadow-xl" : "bg-white text-brand-primary"}`}>
                <span className="font-bold text-sm md:text-base">{suc.name}</span>
                <ArrowRight className={`hidden lg:block ${activeTab === idx ? "opacity-100" : "opacity-0"}`} size={18} />
              </button>
            ))}
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-[1.5rem] overflow-hidden shadow-2xl">
                <div className="relative h-60 md:h-80 group">
                  <img src={sucursales[activeTab].image} alt={sucursales[activeTab].name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-12 backdrop-blur-sm">
                    <img src={sucursales[activeTab].logo} alt="Logo" className="max-w-full max-h-32 brightness-0 invert" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-center md:text-left">
                    {/* AJUSTE DE TAMAÑO PARA UNA LÍNEA */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-brand-primary mb-2 whitespace-nowrap">
                      Farmacia {sucursales[activeTab].name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-brand-text/70 text-sm">
                      <MapPin size={16} className="text-brand-secondary shrink-0" /> {sucursales[activeTab].address}
                    </div>
                  </div>
                  <a href={sucursales[activeTab].whatsapp} target="_blank" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1ebd5b] transition-all shrink-0">
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ... (Resto de los componentes: Hero, GaleriaSlider, Valores, Contacto, Footer se mantienen iguales, 
// pero asegúrate de que todos tengan la clase !font-['Poppins'] en sus contenedores principales)

export default function App() {
  return (
    <div className="!font-['Poppins'] selection:bg-brand-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Sucursales />
        {/* ... otros componentes */}
      </main>
      <Footer />
    </div>
  );
}
