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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-['Poppins'] ${isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6 md:py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="w-32 md:w-44 lg:w-52 transition-all">
          <img src={logoUrl} alt="Novum Farmacias" className={`w-full h-auto object-contain ${!isScrolled ? "brightness-0 invert" : ""}`} />
        </a>

        <div className={`hidden md:flex items-center space-x-8 lg:space-x-12 text-[11px] lg:text-xs font-bold uppercase tracking-widest ${isScrolled ? "text-brand-primary" : "text-white"}`}>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b overflow-hidden font-['Poppins']">
            <div className="px-6 py-8 flex flex-col space-y-6 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-lg">Inicio</a>
              <a href="#sucursales" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-lg">Sucursales</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-lg">Galería</a>
              <a href="https://wa.me/5492494288629" className="bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative h-[90vh] md:h-screen flex items-center justify-center md:justify-start overflow-hidden font-['Poppins']">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2000" alt="Novum" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-brand-primary/80 md:bg-brand-primary/70 mix-blend-multiply" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left pt-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold leading-[1] mb-6 md:mb-8 tracking-tighter">
          Te atendemos <br /> <span className="text-brand-secondary font-light">mejor.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mb-10 md:mb-12 font-light mx-auto md:mx-0">
          Cercanía y asesoramiento profesional en Tandil. Tu bienestar es nuestra prioridad.
        </p>
        <a href="#sucursales" className="inline-block bg-brand-secondary text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-brand-primary transition-all shadow-xl">
          ¿Dónde estamos?
        </a>
      </motion.div>
    </div>
  </section>
);

const Sucursales = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sucursales = [
    { name: "Novafarma", address: "Quintana y Basilico, Villa Italia", whatsapp: "https://wa.me/5492494272729", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum1.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg" },
    { name: "Piedra Que Late", address: "Sanllorenti 783, Barrio Procrear", whatsapp: "https://wa.me/5492494370055", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum2.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg" },
    { name: "Kuala Lumpur", address: "Pinto y 14 de Julio, Centro", whatsapp: "https://wa.me/5492494288629", image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum3.jpeg", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg" },
  ];

  return (
    <section id="sucursales" className="py-20 md:py-32 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="text-brand-secondary font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">Red de atención</span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-tight">Nuestras sucursales.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 bg-brand-bg/40 p-4 md:p-8 rounded-[2rem]">
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {sucursales.map((suc, idx) => (
              <button key={idx} onClick={() => setActiveTab(idx)} className={`p-5 md:p-8 text-center lg:text-left rounded-2xl transition-all flex-1 lg:flex-none flex items-center justify-between min-w-[180px] lg:min-w-0 ${activeTab === idx ? "bg-brand-primary text-white shadow-xl" : "bg-white text-brand-primary"}`}>
                <span className="font-bold text-sm md:text-lg">{suc.name}</span>
                <ArrowRight className={`hidden lg:block transition-transform ${activeTab === idx ? "translate-x-0" : "-translate-x-4 opacity-0"}`} />
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 h-full">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-[1.5rem] overflow-hidden shadow-xl border border-brand-bg">
                <div className="relative h-64 md:h-96 group overflow-hidden">
                  <img src={sucursales[activeTab].image} alt={sucursales[activeTab].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12">
                    <img src={sucursales[activeTab].logo} alt="Logo" className="max-w-full max-h-32 object-contain brightness-0 invert" />
                  </div>
                </div>
                <div className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-brand-primary mb-3">Farmacia {sucursales[activeTab].name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-brand-text/70 font-medium">
                      <MapPin size={18} className="text-brand-secondary shrink-0" /> {sucursales[activeTab].address}
                    </div>
                  </div>
                  <a href={sucursales[activeTab].whatsapp} target="_blank" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                    <MessageCircle size={22} /> WhatsApp
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
    <section id="galeria" className="py-20 md:py-32 bg-brand-bg/30 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img key={current} src={images[current]} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
            <button onClick={prev} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all shadow-lg"><ChevronLeft size={32} /></button>
            <button onClick={next} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all shadow-lg"><ChevronRight size={32} /></button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all rounded-full ${current === i ? "w-8 bg-brand-secondary" : "w-2 bg-white/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Valores = () => (
  <section id="valores" className="py-24 bg-brand-primary text-white font-['Poppins']">
    <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Nuestra Esencia</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">Valores que <br /> nos definen.</h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mx-auto md:mx-0">
            En Novum Farmacias la prioridad es tu bienestar. <br /><br />
            <span className="text-white font-bold underline decoration-brand-secondary underline-offset-8">Te atendemos mejor.</span>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {[ { icon: Heart, t: "Calidez" }, { icon: Leaf, t: "Naturalidad" }, { icon: MapPin, t: "Cercanía" }, { icon: ShieldCheck, t: "Calidad" } ].map((v, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <v.icon size={32} className="text-brand-secondary mb-4 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold uppercase">{v.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contacto = () => (
  <section id="contacto" className="py-24 md:py-32 bg-white text-center font-['Poppins']">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-brand-primary tracking-tighter">¿Hablamos?</h2>
      <p className="text-lg md:text-2xl text-brand-text/60 mb-16">
        Escribinos por WhatsApp y recibí asesoramiento inmediato.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {[ 
          { n: "Novafarma", l: "https://wa.me/5492494272729", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg" },
          { n: "Piedra Que Late", l: "https://wa.me/5492494370055", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg" },
          { n: "Kuala Lumpur", l: "https://wa.me/5492494288629", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg" }
        ].map((s) => (
          <a key={s.n} href={s.l} target="_blank" className="bg-brand-bg/50 p-10 rounded-2xl border-2 border-transparent hover:border-brand-secondary transition-all flex flex-col items-center gap-6 group shadow-sm">
            <img src={s.s} alt={s.n} className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
            <span className="font-bold text-xs uppercase tracking-widest text-brand-primary">Contactar</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 md:py-20 bg-brand-bg font-['Poppins']">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
        <img src="https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novumfarmacias-086319.svg" alt="Novum" className="w-40 md:w-48" />
        <div className="flex space-x-6 md:space-x-8 text-[10px] font-bold uppercase tracking-widest text-brand-primary/60">
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#valores" className="hover:text-brand-secondary transition-colors">Valores</a>
        </div>
        <div className="flex space-x-4">
          {[ { i: Instagram, h: "https://www.instagram.com/novumfarmacias/?hl=es" }, { i: Facebook, h: "https://www.facebook.com/novumfarmacias/" }, { i: Linkedin, h: "https://linkedin.com/company/novum-farmacias/" } ].map((s, i) => (
            <a key={i} href={s.h} target="_blank" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-all shadow-sm"><s.i size={18} /></a>
          ))}
        </div>
      </div>
      <div className="text-center text-[10px] text-brand-primary/40 pt-8 border-t border-brand-primary/5 uppercase tracking-[0.3em] font-bold">
        @ 2026 Novum Farmacias - Todos los derechos reservados
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-brand-secondary selection:text-white bg-white">
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
  );
}
