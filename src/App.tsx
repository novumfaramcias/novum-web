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
  Phone
} from "lucide-react";
import { useState, useEffect } from "react";

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
  const whatsappUrl = "https://wa.me/5492494288629";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-brand-bg/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="block w-48 transition-all duration-500">
          <img 
            src={logoUrl} 
            alt="Novum Farmacias" 
            className={`w-full h-auto object-contain ${!isScrolled ? "brightness-0 invert" : ""}`} 
          />
        </a>

        <div className={`hidden md:flex items-center space-x-12 text-sm font-bold uppercase tracking-widest transition-colors duration-500 ${isScrolled ? "text-brand-primary" : "text-white"}`}>
          <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
          <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
          <a href="#valores" className="hover:text-brand-secondary transition-colors">Valores</a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all font-bold ${
              isScrolled ? "bg-brand-primary text-white hover:bg-brand-secondary" : "bg-white text-brand-primary hover:bg-brand-bg"
            }`}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <button 
          className={`md:hidden transition-colors duration-500 ${isScrolled ? "text-brand-primary" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg shadow-2xl py-10 px-6 flex flex-col space-y-6 md:hidden"
          >
            <a href="#inicio" className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#sucursales" className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Sucursales</a>
            <a href="#valores" className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Valores</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white p-5 rounded-2xl text-center font-bold flex items-center justify-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=2000" 
          alt="Atención Farmacéutica Profesional" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-display font-bold leading-tight mb-8">
            Te atendemos <br />
            <span className="text-brand-secondary italic font-light">mejor.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed">
            Transformamos la experiencia de farmacia en el corazón de Tandil para acompañarte con calidez, cercanía y asesoramiento profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a 
              href="#sucursales" 
              className="bg-brand-secondary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-brand-primary hover:shadow-2xl transition-all text-center"
            >
              Ver Sucursales
            </a>
            <a 
              href="https://wa.me/5492494288629" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all text-center flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              Consultar ahora
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-6 flex items-center gap-4 text-white/40">
        <div className="w-12 h-[1px] bg-white/40"></div>
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
      </div>
    </section>
  );
};

const Sucursales = () => {
  const sucursales = [
    {
      name: "Novafarma",
      address: "Quintana y Basilico, Villa Italia",
      whatsapp: "https://wa.me/5492494272729",
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/logo-original-591e34.svg"
    },
    {
      name: "Piedra Que Late",
      address: "Sanllorenti 783, Barrio Procrear",
      whatsapp: "https://wa.me/5492494370055",
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/piedra-que-late-8be7d7.svg"
    },
    {
      name: "Kuala Lumpur",
      address: "Pinto y 14 de Julio, Centro",
      whatsapp: "https://wa.me/5492494288629",
      logo: "https://novumfarmacias.com.ar/wp-content/uploads/2026/03/kuala-lumpur-dcb5d4.svg"
    },
  ];

  return (
    <section id="sucursales" className="py-24 md:py-32 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Cuidamos a Tandil</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-brand-primary">Nuestras sucursales <br />te orientan.</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sucursales.map((sucursal, index) => (
            <motion.div
              key={sucursal.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card group flex flex-col items-center text-center p-12"
            >
              <div className="w-24 h-24 mb-8 flex items-center justify-center">
                <img src={sucursal.logo} alt={sucursal.name} className="w-full h-auto object-contain" />
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center gap-3 text-sm font-bold text-brand-secondary">
                  <MapPin size={18} />
                  {sucursal.address}
                </div>
              </div>
              <a 
                href={sucursal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </motion.div>
          ))}
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
    { icon: Sparkles, title: "Tranquilidad", desc: "Un espacio de confianza para cuidar tu bienestar." },
  ];

  return (
    <section id="valores" className="py-24 md:py-32 bg-brand-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Esencia</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Valores que nos <br />
              <span className="italic font-light text-brand-secondary">definen.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              En Novum Farmacias entendemos que detrás de cada receta hay una persona que busca tranquilidad. 
              Por eso, priorizamos la escucha activa y la contención profesional en cada paso. <br/><br/>
              Nuestra promesa es simple: <span className="text-white font-bold">Te atendemos mejor.</span>
            </p>
          </motion.div>
          
          <div className="grid gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                  <val.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">{val.title}</h4>
                  <p className="text-white/60">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
    <section id="contacto" className="py-24 md:py-32 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 text-brand-primary">¿Hablamos?</h2>
          <p className="text-xl md:text-2xl text-brand-text/60 mb-16 leading-relaxed">
            Escribinos por WhatsApp y recibí asesoramiento inmediato y humano.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {sedes.map((sede) => (
              <a 
                key={sede.name}
                href={sede.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-bg p-8 rounded-2xl hover:bg-brand-secondary hover:text-white transition-all group flex flex-col items-center gap-4"
              >
                <img src={sede.logo} alt={sede.name} className="h-10 w-auto object-contain brightness-0 group-hover:invert transition-all" />
                <span className="font-bold text-sm uppercase tracking-widest">Escribinos</span>
              </a>
            ))}
          </div>
          
          <div className="mt-20 flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-brand-primary/30">O envianos un correo</span>
            <a href="mailto:info@novumfarmacias.com.ar" className="text-lg font-bold border-b-2 border-brand-secondary hover:text-brand-secondary transition-colors">
              info@novumfarmacias.com.ar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="w-40">
            <img src="https://novumfarmacias.com.ar/wp-content/uploads/2026/03/novumfarmacias-086319.svg" alt="Novum Farmacias" className="w-full h-auto" />
          </div>
          
          <div className="flex space-x-12 text-sm font-bold uppercase tracking-widest text-brand-text/60">
            <a href="#inicio" className="hover:text-brand-secondary transition-colors">Inicio</a>
            <a href="#sucursales" className="hover:text-brand-secondary transition-colors">Sucursales</a>
            <a href="#valores" className="hover:text-brand-secondary transition-colors">Valores</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.instagram.com/novumfarmacias/?hl=es" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/novumfarmacias/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
              <Facebook size={20} />
            </a>
            <a href="https://linkedin.com/company/novum-farmacias/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center text-xs text-brand-primary/30 pt-8 border-t border-brand-primary/5 uppercase tracking-widest font-bold">
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
