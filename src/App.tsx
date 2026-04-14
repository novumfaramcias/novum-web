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
        <a href="#inicio" className="w-40 md:w-52">
          {/* Aplicamos brillo 0 (negro) solo cuando hay scroll, ya que el logo original es blanco */}
          <img 
            src={logoUrl} 
            alt="Novum Farmacias" 
            className={`w-full h-auto object-contain transition-all duration-500 ${isScrolled ? "brightness-0" : ""}`} 
          />
        </a>

        <div className={`hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest ${isScrolled ? "text-brand-primary" : "text-white"}`}>
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#galeria" className="hover:text-brand-secondary transition-colors">Galería</a>
          <a href="https://wa.me/5492494288629" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${isScrolled ? "bg-brand-primary text-white hover:bg-brand-secondary" : "bg-white text-brand-primary hover:bg-brand-bg"}`}>
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button className={`md:hidden p-2 ${isScrolled ? "text-brand-primary" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white border-b absolute top-full left-0 w-full shadow-2xl z-50">
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

const Hero = () => {
  const redes = [
    { Icon: Instagram, href: "https://www.instagram.com/novumfarmacias/?hl=es" },
    { Icon: Facebook, href: "https://www.facebook.com/novumfarmacias/" },
    { Icon: Linkedin, href: "https://linkedin.com/company/novum-farmacias/" }
  ];

  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2000" alt="Fondo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center md:text-left">
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-bold leading-[0.9] mb-8 tracking-tighter">
            Te atendemos <br /> <span className="text-brand-secondary font-light italic">mejor.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 font-light">Cercanía y asesoramiento profesional en Tandil.</p>
          
          <div className="flex flex-col items-center md:items-start gap-8">
            <a href="#sucursales" className="inline-block bg-brand-secondary text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
              ¿Dónde estamos?
            </a>
            
            <div className="flex md:hidden gap-8 mt-2">
              {redes.map((red, i) => (
                <a key={i} href={red.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-brand-secondary">
                  <red.Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="hidden md:flex flex-col gap-8 border-l border-white/20 pl-8 py-4">
          {redes.map((red, i) => (
            <a key={i} href={red.href} target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand-secondary transition-all hover:-translate-x-1">
              <red.Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
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
    <section id="sucursales" className="py-20 md:py-32 bg-white">
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
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-[1.5rem] overflow-hidden shadow-2xl">
                <div className="relative h-64 md:h-80 group">
                  <img src={sucursales[activeTab].image} alt={sucursales[activeTab].name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-12 backdrop-blur-sm">
                    <img src={sucursales[activeTab].logo} alt="Logo" className="max-w-full max-h-32 brightness-0 invert" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-center md:text-left overflow-hidden">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-brand-primary mb-2 whitespace-nowrap overflow-ellipsis">
                      Farmacia {sucursales[activeTab].name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-brand-text/70 text-sm">
                      <MapPin size={16} className="text-brand-secondary shrink-0" /> {sucursales[activeTab].address}
                    </div>
                  </div>
                  <a href={sucursales[activeTab].whatsapp} target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1ebd5b] transition-all shrink-0">
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
    <section id="galeria" className="py-20 md:py-32 bg-brand-bg/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img key={current} src={images[current]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"><ChevronLeft size={30} /></button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"><ChevronRight size={30} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Valores = () => (
  <section id="valores" className="py-24 bg-brand-primary text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Esencia</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">Valores que <br /> nos definen.</h2>
          <p className="text-xl text-white/70 leading-relaxed underline decoration-brand-secondary underline-offset-8">Te atendemos mejor.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[ { i: Heart, t: "Calidez" }, { i: Leaf, t: "Naturalidad" }, { i: MapPin, t: "Cercanía" }, { i: ShieldCheck, t: "Calidad" } ].map((v, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
              <v.i size={32} className="text-brand-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold uppercase">{v.t}</h4>
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
      <h2 className="text-6xl md:text-8xl font-bold mb-8 text-brand-primary tracking-tighter">¿Hablamos?</h2>
      <p className="text-xl md:text-2xl text-brand-text/60 mb-16 font-light">Escribinos por WhatsApp y recibí asesoramiento inmediato.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[ 
          { n: "Novafarma", l: "https://wa.me/5492494272729", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg" },
          { n: "Piedra Que Late", l: "https://wa.me/5492494370055", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg" },
          { n: "Kuala Lumpur", l: "https://wa.me/5492494288629", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg" }
        ].map((sede) => (
          <a key={sede.n} href={sede.l} target="_blank" rel="noreferrer" className="bg-brand-bg/50 p-10 rounded-2xl border-2 border-transparent hover:border-brand-secondary transition-all flex flex-col items-center gap-6 shadow-sm group">
            <img src={sede.s} alt={sede.n} className="h-10 w-auto grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all" />
            <span className="font-bold text-xs uppercase tracking-widest text-brand-primary">WhatsApp</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-brand-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
        {/* Usamos brillo 0 para que el logo blanco se vea negro sobre el fondo claro del footer */}
        <img src="https://novumfarmacias.com.ar/wp-content/uploads/2026/04/Horizontal-blanco.png" alt="Novum" className="w-44 brightness-0" />
        <div className="flex space-x-5">
          <a href="https://www.instagram.com/novumfarmacias/?hl=es" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-secondary hover:text-white transition-all"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/novumfarmacias/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-secondary hover:text-white transition-all"><Facebook size={20} /></a>
          <a href="https://linkedin.com/company/novum-farmacias/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-secondary hover:text-white transition-all"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="text-center text-[10px] text-brand-primary/40 pt-8 border-t border-brand-primary/5 uppercase tracking-[0.3em] font-bold">
        @ 2026 Novum Farmacias - Todos los derechos reservados
      </div>
    </div>
  </footer>
);
