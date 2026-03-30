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
  Sparkles,
  Phone,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

// Nota: Asegúrate de tener la fuente Poppins cargada en tu proyecto (Google Fonts)
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novumfarmacias-086319.svg";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-['Poppins'] ${
        isScrolled ? "bg-brand-bg/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="block w-48">
          <img 
            src={logoUrl} 
            alt="Novum Farmacias" 
            className={`w-full h-auto object-contain transition-all duration-500 ${!isScrolled ? "brightness-0 invert" : ""}`} 
          />
        </a>

        <div className={`hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-wider transition-colors duration-500 ${isScrolled ? "text-brand-primary" : "text-white"}`}>
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#valores" className="hover:text-brand-secondary transition-colors">Valores</a>
          <a 
            href="https://wa.me/5492494288629"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-bold ${
              isScrolled ? "bg-brand-primary text-white hover:bg-brand-secondary" : "bg-white text-brand-primary hover:bg-brand-bg"
            }`}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <button 
          className={`md:hidden ${isScrolled ? "text-brand-primary" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden font-['Poppins']">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2000" 
          alt="Farmacia Moderna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/85 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-bold leading-[0.9] mb-8 tracking-tighter">
            Te atendemos <br />
            <span className="text-brand-secondary font-light">mejor.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 font-light">
            Cercanía y asesoramiento profesional en cada una de nuestras sucursales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#sucursales" className="bg-brand-secondary text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all text-center">
              Explorar Sucursales
            </a>
          </div>
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
      fullName: "Farmacia Novafarma",
      address: "Quintana y Basilico, Villa Italia",
      whatsapp: "https://wa.me/5492494272729",
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Piedra Que Late",
      fullName: "Farmacia Piedra Que Late",
      address: "Sanllorenti 783, Barrio Procrear",
      whatsapp: "https://wa.me/5492494370055",
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg",
      image: "https://images.unsplash.com/photo-1631549916768-4119b295f926?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Kuala Lumpur",
      fullName: "Farmacia Kuala Lumpur",
      address: "Pinto y 14 de Julio, Centro",
      whatsapp: "https://wa.me/5492494288629",
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1000"
    },
  ];

  return (
    <section id="sucursales" className="py-24 md:py-32 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Cuidamos a Tandil</span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-primary tracking-tight">Nuestras sucursales <br/>te orientan.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-brand-bg/30 p-4 md:p-8 rounded-[2rem]">
          {/* Menú Lateral Izquierdo */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {sucursales.map((suc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-8 text-left rounded-2xl transition-all flex items-center justify-between group ${
                  activeTab === idx 
                  ? "bg-brand-primary text-white shadow-xl translate-x-2" 
                  : "bg-white text-brand-primary hover:bg-white/80"
                }`}
              >
                <span className="text-xl font-bold">{suc.name}</span>
                <ArrowRight className={`transition-transform ${activeTab === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} />
              </button>
            ))}
          </div>

          {/* Contenido Derecha */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-full flex flex-col"
              >
                {/* Imagen con Efecto Hover Logo */}
                <div className="relative h-80 group overflow-hidden">
                  <img 
                    src={sucursales[activeTab].image} 
                    alt={sucursales[activeTab].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <img 
                      src={sucursales[activeTab].logo} 
                      alt="Logo" 
                      className="w-40 h-40 object-contain brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Datos de la Farmacia */}
                <div className="p-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <img src={sucursales[activeTab].logo} alt="Logo" className="w-32 h-auto mb-6 block" />
                    <h3 className="text-3xl font-bold text-brand-primary mb-4">{sucursales[activeTab].fullName}</h3>
                    <div className="flex items-center gap-3 text-brand-text/70 font-medium">
                      <MapPin size={20} className="text-brand-secondary" />
                      {sucursales[activeTab].address}
                    </div>
                  </div>
                  
                  <a 
                    href={sucursales[activeTab].whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-lg transition-all whitespace-nowrap"
                  >
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

const Valores = () => {
  const values = [
    { icon: Heart, title: "Calidez", desc: "Trato humano y empático en cada consulta." },
    { icon: Leaf, title: "Naturalidad", desc: "Transparencia y simplicidad en nuestra atención." },
    { icon: MapPin, title: "Cercanía", desc: "Estamos donde nos necesitás, siempre cerca tuyo." },
    { icon: ShieldCheck, title: "Calidad", desc: "Asesoramiento profesional con los más altos estándares." },
  ];

  return (
    <section id="valores" className="py-24 md:py-32 bg-brand-primary text-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Esencia</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Valores que nos <br /><span className="font-light italic text-brand-secondary">definen.</span></h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
              En Novum Farmacias la prioridad es tu bienestar. Priorizamos la escucha activa y la solución profesional. <br/><br/>
              Nuestra promesa es simple: <span className="text-white font-bold underline decoration-brand-secondary underline-offset-8">Te atendemos mejor.</span>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <val.icon size={32} className="text-brand-secondary mb-6" />
                <h4 className="text-xl font-bold mb-2 uppercase">{val.title}</h4>
                <p className="text-white/50 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contacto = () => {
  const sedes = [
    { name: "Novafarma", link: "https://wa.me/5492494272729", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg" },
    { name: "Piedra Que Late", link: "https://wa.me/5492494370055", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg" },
    { name: "Kuala Lumpur", link: "https://wa.me/5492494288629", logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg" }
  ];

  return (
    <section id="contacto" className="py-24 bg-white text-center font-['Poppins']">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-bold mb-8 text-brand-primary tracking-tighter">¿Hablamos?</h2>
        <p className="text-xl md:text-2xl text-brand-text/60 mb-16">
          Escribinos por WhatsApp y recibí asesoramiento inmediato.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {sedes.map((sede) => (
            <a 
              key={sede.name}
              href={sede.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-bg p-10 rounded-2xl border-2 border-transparent hover:border-brand-secondary transition-all group flex flex-col items-center gap-6"
            >
              <img src={sede.logo} alt={sede.name} className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
              <span className="font-bold text-xs uppercase tracking-widest text-brand-primary">Contactar</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-brand-bg font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <img src="https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novumfarmacias-086319.svg" alt="Novum" className="w-44" />
          
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-brand-text/50">
            <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
            <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
            <a href="#valores" className="hover:text-brand-secondary transition-colors">Valores</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.instagram.com/novumfarmacias/?hl=es" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/novumfarmacias/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com/company/novum-farmacias/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="text-center text-[10px] text-brand-primary/40 pt-8 border-t border-brand-primary/5 uppercase tracking-[0.3em] font-bold">
          @ 2026 Novum Farmacias - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Sucursales />
        <Valores />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
