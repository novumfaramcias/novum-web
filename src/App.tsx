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

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif !important;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
      `}} />

      <div className="selection:bg-brand-secondary selection:text-white bg-white min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Sucursales />
          <GaleriaSlider />
          <Valores />
          <Contacto />
        </main>
        <Footer />
      </div>
    </>
  );
}

// --- SUB-COMPONENTES ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/Horizontal-blanco.png";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="w-32 xs:w-36 md:w-44 transition-all duration-500">
          <img 
            src={logoUrl} 
            alt="Novum Farmacias" 
            className={`w-full h-auto object-contain transition-all duration-500 ${isScrolled ? "brightness-0" : ""}`} 
          />
        </a>

        <div className={`hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-brand-primary" : "text-white"}`}>
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#galeria" className="hover:text-brand-secondary transition-colors">Galería</a>
          <a href="https://wa.me/5492494288629" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all ${isScrolled ? "bg-brand-primary text-white hover:bg-brand-secondary" : "bg-white text-brand-primary hover:bg-brand-bg"}`}>
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>

        <button className={`md:hidden p-2 ${isScrolled ? "text-brand-primary" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden bg-white border-b absolute top-full left-0 w-full shadow-2xl z-50">
            <div className="px-6 py-8 flex flex-col space-y-5 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-lg">Inicio</a>
              <a href="#sucursales" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-lg">Sucursales</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-lg">Galería</a>
              <a href="https://wa.me/5492494288629" className="bg-brand-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-[90vh] md:h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2000" alt="Fondo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-primary/75 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-extrabold leading-[1.1] mb-6 tracking-tight">
            Te atendemos <br /> <span className="text-brand-secondary font-light italic">mejor.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 font-light leading-relaxed">Asesoramiento profesional y cercanía en Tandil.</p>
          
          <a href="#sucursales" className="inline-block bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
            Nuestras Sucursales
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Sucursales = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sucursales = [
    { name: "Novafarma", address: "Quintana y Basilico", whatsapp: "https://wa.me/5492494272729", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum1.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/novafarma-91b9ac.svg" },
    { name: "Piedra Que Late", address: "Sanllorenti 783", whatsapp: "https://wa.me/5492494370055", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum2.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/piedra-que-late-98ef69.svg" },
    { name: "Kuala Lumpur", address: "Pinto y 14 de Julio", whatsapp: "https://wa.me/5492494288629", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum3.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/kualalumpur-5db8e5.svg" },
  ];

  return (
    <section id="sucursales" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-[10px] mb-2 block">Donde estamos</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tight">Nuestras sedes.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 bg-brand-bg/20 p-4 md:p-6 rounded-[2rem]">
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {sucursales.map((suc, idx) => (
              <button key={idx} onClick={() => setActiveTab(idx)} className={`p-5 text-center lg:text-left rounded-xl transition-all flex-1 lg:flex-none flex items-center justify-between min-w-[160px] ${activeTab === idx ? "bg-brand-primary text-white shadow-lg" : "bg-white text-brand-primary"}`}>
                <span className="font-bold text-sm">{suc.name}</span>
                <ArrowRight size={16} className={activeTab === idx ? "opacity-100" : "opacity-0"} />
              </button>
            ))}
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-brand-primary/5">
                <div className="relative h-60 md:h-80 group">
                  <img src={sucursales[activeTab].image} alt={sucursales[activeTab].name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-primary/60 flex items-center justify-center p-12 backdrop-blur-[2px]">
                     <img src={sucursales[activeTab].logo} alt="Sede Logo" className="h-16 md:h-20 w-auto brightness-0 invert object-contain" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-primary mb-2">Farmacia {sucursales[activeTab].name}</h3>
                    <div className="flex items-center gap-2 text-brand-text/60 text-sm">
                      <MapPin size={16} className="text-brand-secondary" /> {sucursales[activeTab].address}
                    </div>
                  </div>
                  <a href={sucursales[activeTab].whatsapp} target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1ebd5b] transition-all">
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

const GaleriaSlider = () => {
  const images = [
    "https://novumfarmacias.com.ar/wp-content/uploads/2025/11/DSC00081.jpg",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedraquelate-farmacia-interior-2-scaled.jpg",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedraquelate-farmacia-interior-1-scaled.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1)), [images.length]);
  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative h-[350px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img key={current} src={images[current]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"><ChevronLeft size={24} /></button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Valores = () => (
  <section id="valores" className="py-24 bg-brand-primary text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Esencia Novum</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Valores que <br /> nos definen.</h2>
          <p className="text-lg text-white/50 leading-relaxed italic">Te atendemos mejor.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[ { i: Heart, t: "Calidez" }, { i: Leaf, t: "Naturalidad" }, { i: MapPin, t: "Cercanía" }, { i: ShieldCheck, t: "Calidad" } ].map((v, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <v.i size={28} className="text-brand-secondary mb-3" />
              <h4 className="text-sm font-bold uppercase tracking-wider">{v.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contacto = () => (
  <section id="contacto" className="py-24 bg-white text-center">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-primary tracking-tighter">¿Hablamos?</h2>
      <p className="text-base md:text-lg text-brand-text/50 mb-16 font-light max-w-2xl mx-auto">Nuestro equipo está listo para brindarte asesoramiento inmediato vía WhatsApp.</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[ 
          { n: "Novafarma", l: "https://wa.me/5492494272729", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/novafarma-91b9ac.svg" },
          { n: "Piedra Que Late", l: "https://wa.me/5492494370055", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/piedra-que-late-98ef69.svg" },
          { n: "Kuala Lumpur", l: "https://wa.me/5492494288629", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/kualalumpur-5db8e5.svg" }
        ].map((sede) => (
          <a key={sede.n} href={sede.l} target="_blank" rel="noreferrer" className="bg-brand-bg/30 p-8 rounded-2xl border border-transparent hover:border-brand-secondary hover:bg-white transition-all flex flex-col items-center gap-6 shadow-sm group">
            {/* Logos agregados en la sección de contacto */}
            <div className="h-10 md:h-12 flex items-center justify-center">
              <img src={sede.s} alt={sede.n} className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
            </div>
            <div className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
              WhatsApp
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-brand-bg/50">
    <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        <img src="https://novumfarmacias.com.ar/wp-content/uploads/2026/04/Horizontal-blanco.png" alt="Novum" className="w-40 brightness-0 opacity-60" />
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/novumfarmacias/" className="text-brand-primary/60 hover:text-brand-secondary transition-colors"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/novumfarmacias/" className="text-brand-primary/60 hover:text-brand-secondary transition-colors"><Facebook size={20} /></a>
          <a href="https://linkedin.com/company/novum-farmacias/" className="text-brand-primary/60 hover:text-brand-secondary transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="pt-8 border-t border-brand-primary/5 text-[10px] text-brand-primary/40 uppercase tracking-[0.2em] font-medium text-center">
        © 2026 Novum Farmacias. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);
