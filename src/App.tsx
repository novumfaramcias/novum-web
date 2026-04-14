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

        .brand-logo-container img {
          max-width: 100%;
          height: auto;
          display: block;
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
        {/* Escalado Senior: Proporción áurea aplicada al ancho del logo */}
        <a href="#inicio" className="w-36 xs:w-40 md:w-48 lg:w-56 transition-all duration-500">
          <img 
            src={logoUrl} 
            alt="Novum Farmacias" 
            className={`w-full h-auto object-contain transition-all duration-500 ${isScrolled ? "brightness-0" : ""}`} 
          />
        </a>

        <div className={`hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-brand-primary" : "text-white"}`}>
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#galeria" className="hover:text-brand-secondary transition-colors">Galería</a>
          <a href="https://wa.me/5492494288629" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-extrabold ${isScrolled ? "bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-lg" : "bg-white text-brand-primary hover:bg-brand-bg hover:scale-105"}`}>
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button className={`md:hidden p-2 transition-colors ${isScrolled ? "text-brand-primary" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b absolute top-full left-0 w-full shadow-2xl z-50 overflow-hidden">
            <div className="px-6 py-10 flex flex-col space-y-6 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-2xl tracking-tighter">Inicio</a>
              <a href="#sucursales" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-2xl tracking-tighter">Sucursales</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-brand-primary font-bold text-2xl tracking-tighter">Galería</a>
              <a href="https://wa.me/5492494288629" className="bg-brand-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 text-lg shadow-xl">
                <MessageCircle size={20} /> WhatsApp
              </a>
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
        <img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2000" alt="Fondo" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-brand-primary/85 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between pt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center md:text-left">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-bold leading-[0.85] mb-8 tracking-tighter uppercase">
            Te atendemos <br /> <span className="text-brand-secondary font-light italic normal-case">mejor.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 font-light leading-relaxed">Asesoramiento profesional y calidez humana en cada una de nuestras sedes en Tandil.</p>
          
          <div className="flex flex-col items-center md:items-start gap-8">
            <a href="#sucursales" className="inline-block bg-brand-secondary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-brand-secondary/40">
              ¿Dónde estamos?
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="hidden md:flex flex-col gap-10 border-l border-white/10 pl-10 py-6">
          {redes.map((red, i) => (
            <a key={i} href={red.href} target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand-secondary transition-all transform hover:-translate-x-2">
              <red.Icon size={24} strokeWidth={1.5} />
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
    { 
      name: "Novafarma", 
      address: "Quintana y Basilico, Villa Italia", 
      whatsapp: "https://wa.me/5492494272729", 
      image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum1.jpeg", 
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/novafarma-91b9ac.svg" 
    },
    { 
      name: "Piedra Que Late", 
      address: "Sanllorenti 783, Barrio Procrear", 
      whatsapp: "https://wa.me/5492494370055", 
      image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum2.jpeg", 
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/piedra-que-late-98ef69.svg" 
    },
    { 
      name: "Kuala Lumpur", 
      address: "Pinto y 14 de Julio, Centro", 
      whatsapp: "https://wa.me/5492494288629", 
      image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novum3.jpeg", 
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/kualalumpur-5db8e5.svg" 
    },
  ];

  return (
    <section id="sucursales" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <span className="text-brand-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Ecosistema Novum</span>
          <h2 className="text-5xl md:text-8xl font-extrabold text-brand-primary tracking-tighter leading-none">Nuestras <br className="hidden md:block" /> sucursales.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-brand-bg/30 p-4 md:p-10 rounded-[3rem]">
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-hide">
            {sucursales.map((suc, idx) => (
              <button key={idx} onClick={() => setActiveTab(idx)} className={`p-8 text-center lg:text-left rounded-3xl transition-all flex-1 lg:flex-none flex items-center justify-between min-w-[200px] group ${activeTab === idx ? "bg-brand-primary text-white shadow-2xl scale-[1.02]" : "bg-white text-brand-primary hover:bg-white/80"}`}>
                <span className="font-extrabold text-lg tracking-tight">{suc.name}</span>
                <ArrowRight className={`hidden lg:block transition-transform duration-300 ${activeTab === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} size={20} />
              </button>
            ))}
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.07)]">
                <div className="relative h-72 md:h-[450px] group overflow-hidden">
                  <img src={sucursales[activeTab].image} alt={sucursales[activeTab].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-12 backdrop-blur-sm">
                    {/* Escalado Senior de Logo Interno */}
                    <div className="w-full max-w-[280px] h-24 md:h-32 flex items-center justify-center">
                      <img src={sucursales[activeTab].logo} alt="Sede Logo" className="max-w-full max-h-full object-contain brightness-0 invert" />
                    </div>
                  </div>
                </div>
                <div className="p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-black text-brand-primary mb-4 tracking-tighter">
                      Farmacia {sucursales[activeTab].name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-brand-text/60 text-lg font-light">
                      <div className="p-2 bg-brand-bg rounded-lg text-brand-secondary"><MapPin size={20} /></div> {sucursales[activeTab].address}
                    </div>
                  </div>
                  <a href={sucursales[activeTab].whatsapp} target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#1ebd5b] hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all shrink-0">
                    <MessageCircle size={24} /> WhatsApp
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
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="galeria" className="py-10 md:py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="relative h-[500px] md:h-[800px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
          <AnimatePresence mode="wait">
            <motion.img key={current} src={images[current]} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0 w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-between px-8">
            <button onClick={prev} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all border border-white/20"><ChevronLeft size={36} /></button>
            <button onClick={next} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all border border-white/20"><ChevronRight size={36} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Valores = () => (
  <section id="valores" className="py-32 md:py-48 bg-brand-primary text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-brand-secondary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Nuestra Esencia</span>
          <h2 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter leading-[0.9]">Valores que <br /> nos definen.</h2>
          <p className="text-2xl text-white/60 leading-relaxed font-light italic decoration-brand-secondary underline underline-offset-[12px] decoration-2">Te atendemos mejor.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {[ { i: Heart, t: "Calidez" }, { i: Leaf, t: "Naturalidad" }, { i: MapPin, t: "Cercanía" }, { i: ShieldCheck, t: "Calidad" } ].map((v, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-brand-secondary transition-all duration-500 hover:-translate-y-2">
              <v.i size={40} strokeWidth={1} className="text-brand-secondary mb-6 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold uppercase tracking-widest">{v.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contacto = () => (
  <section id="contacto" className="py-32 md:py-48 bg-white text-center">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-7xl md:text-[11rem] font-black mb-10 text-brand-primary tracking-tighter leading-none">¿Hablamos?</h2>
      <p className="text-xl md:text-3xl text-brand-text/50 mb-20 font-light max-w-3xl mx-auto">Nuestro equipo está listo para brindarte el asesoramiento profesional que necesitás.</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[ 
          { n: "Novafarma", l: "https://wa.me/5492494272729", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/novafarma-91b9ac.svg" },
          { n: "Piedra Que Late", l: "https://wa.me/5492494370055", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/piedra-que-late-98ef69.svg" },
          { n: "Kuala Lumpur", l: "https://wa.me/5492494288629", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/kualalumpur-5db8e5.svg" }
        ].map((sede) => (
          <a key={sede.n} href={sede.l} target="_blank" rel="noreferrer" className="bg-brand-bg/40 p-12 rounded-[3rem] border-2 border-transparent hover:border-brand-secondary hover:bg-white transition-all duration-500 flex flex-col items-center gap-8 shadow-sm group hover:shadow-2xl hover:shadow-brand-secondary/10">
            {/* Escalado Senior en Contacto */}
            <div className="h-12 md:h-16 w-full flex items-center justify-center overflow-hidden">
              <img src={sede.s} alt={sede.n} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />
            </div>
            <div className="px-6 py-2 bg-brand-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 bg-brand-bg relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-16">
        <div className="w-48 md:w-64">
           <img src="https://novumfarmacias.com.ar/wp-content/uploads/2026/04/Horizontal-blanco.png" alt="Novum" className="w-full brightness-0 opacity-80" />
        </div>
        <div className="flex space-x-6">
          {[ {I: Instagram, h: "https://www.instagram.com/novumfarmacias/?hl=es"}, {I: Facebook, h: "https://www.facebook.com/novumfarmacias/"}, {I: Linkedin, h: "https://linkedin.com/company/novum-farmacias/"} ].map((social, i) => (
            <a key={i} href={social.h} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-primary shadow-xl hover:bg-brand-secondary hover:text-white hover:-translate-y-2 transition-all duration-300">
              <social.I size={24} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-[11px] text-brand-primary/30 pt-12 border-t border-brand-primary/5 uppercase tracking-[0.5em] font-black">
        © 2026 Novum Farmacias <span className="mx-4 hidden md:inline">|</span> Todos los derechos reservados
      </div>
    </div>
  </footer>
);
