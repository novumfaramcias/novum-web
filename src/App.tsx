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
  ChevronRight,
  CreditCard,
  Truck
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
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
          <DestacadosInfo />
          <PromocionesSlider />
          <BannersParalelos />
          <BannerWhatsapp />
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

// --- HERO CARRUSEL ---

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-1.webp",
      tag: null,
      title: <>Te atendemos <br /> <span className="text-brand-secondary font-light italic">mejor.</span></>,
      description: "Asesoramiento profesional y cercanía en Tandil.",
      buttonText: "Nuestras Sucursales",
      buttonLink: "#sucursales",
      isExternal: false
    },
    {
      id: 2,
      image: "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/laboratorio-magistrales.webp",
      tag: "Laboratorio Magistral",
      title: <>Fórmulas pensadas <br /><span className="text-brand-secondary font-light italic">para tu bienestar.</span></>,
      description: "Elaboramos cada preparado de manera personalizada, respetando la indicación exacta de tu profesional de salud. Combinamos rigor técnico y atención cercana para darte el cuidado que necesitás.",
      buttonText: "Escribinos",
      buttonLink: "https://wa.me/5492494288629",
      isExternal: true
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="inicio" className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-black touch-pan-y">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        >
          <img
            src={slides[current].image}
            alt="Novum Farmacias Hero"
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-brand-primary/75 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl pointer-events-auto"
          >
            {slides[current].tag && (
              <span className="inline-block text-brand-secondary font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">
                {slides[current].tag}
              </span>
            )}
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-extrabold leading-[1.1] mb-6 tracking-tight">
              {slides[current].title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
              {slides[current].description}
            </p>

            <a
              href={slides[current].buttonLink}
              target={slides[current].isExternal ? "_blank" : "_self"}
              rel={slides[current].isExternal ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest font-owners"
            >
              {slides[current].buttonText}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-20 hidden md:flex items-center justify-between px-6 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"
          aria-label="Anterior Slide"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"
          aria-label="Siguiente Slide"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === idx ? "w-8 bg-brand-secondary" : "w-2.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const DestacadosInfo = () => {
  const items = [
    {
      icon: CreditCard,
      title: "Medios de pago",
      subtitle: "Promociones y beneficios bancarios vigentes para acompañar tu día a día."
    },
    {
      icon: Truck,
      title: "Envíos en Tandil",
      subtitle: "Llegamos con rapidez y cuidado a cada rincón de la ciudad."
    },
    {
      icon: MessageCircle,
      title: "Atención WhatsApp",
      subtitle: "Escribinos para recibir asesoramiento profesional inmediato."
    }
  ];

  return (
    <section id="destacados" className="w-full bg-brand-bg/40 border-y border-brand-primary/5 py-8 md:py-0 md:min-h-[200px] md:h-[200px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center text-center md:text-left gap-4 px-4 lg:px-8 py-2 md:py-0 ${
                idx !== items.length - 1 ? "md:border-r md:border-brand-primary/10" : ""
              }`}
            >
              <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-brand-primary/5 text-brand-secondary shrink-0">
                <item.icon size={30} strokeWidth={1.8} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl font-bold text-brand-primary mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-brand-text/70 font-light leading-relaxed max-w-xs">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SLIDER DE PROMOCIONES ---

const PromocionesSlider = () => {
  const promoImages = [
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-descuento-banco.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-descuento-2.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-descuento-4.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-descuento-3.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-descuento-7.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-descuento-6.webp"
  ];

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === promoImages.length - 1 ? 0 : prev + 1));
  }, [promoImages.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? promoImages.length - 1 : prev - 1));
  }, [promoImages.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="promociones" className="w-full bg-white pt-8 md:pt-16 pb-4 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-brand-bg/20 touch-pan-y">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                if (info.offset.x > 50) prev();
              }}
              className="w-full flex items-center justify-center bg-[#F1EDE8] cursor-grab active:cursor-grabbing"
            >
              <img
                src={promoImages[current]}
                alt={`Promoción Novum ${current + 1}`}
                className="w-full h-auto max-h-[450px] object-contain md:object-cover pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 hidden md:flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-primary transition-all shadow-md"
              aria-label="Anterior promoción"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-primary transition-all shadow-md"
              aria-label="Siguiente promoción"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {promoImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? "w-6 bg-brand-secondary" : "w-2 bg-black/30 hover:bg-black/50"
                }`}
                aria-label={`Ver promoción ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- BANNERS PARALELOS (PANALAB Y BAGOVIT) ---

const BannersParalelos = () => {
  return (
    <section id="banners-destacados" className="w-full bg-white pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="overflow-hidden rounded-2xl shadow-lg border border-brand-primary/5 bg-brand-bg/10 transition-transform duration-300 hover:scale-[1.01]">
            <img
              src="https://novumfarmacias.com.ar/wp-content/uploads/2026/07/panalab.webp"
              alt="Destacado Panalab"
              className="w-full h-auto object-cover block"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-brand-primary/5 bg-brand-bg/10 transition-transform duration-300 hover:scale-[1.01]">
            <img
              src="https://novumfarmacias.com.ar/wp-content/uploads/2026/07/bagovit-productos.webp"
              alt="Destacado Bagóvit"
              className="w-full h-auto object-cover block"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- BANNER FINO DE WHATSAPP ---

const BannerWhatsapp = () => {
  return (
    <section id="banner-asesoramiento" className="w-full bg-brand-primary py-6 md:py-8 my-4 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl font-medium tracking-tight leading-snug">
            ¿Buscás asesoramiento personalizado? <span className="text-brand-secondary font-semibold">Escribinos por WhatsApp</span> y te guiamos en salud, belleza y cuidado personal.
          </p>
        </div>
        <a
          href="https://wa.me/5492494288629"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-white hover:text-brand-primary text-white px-7 py-3 rounded-xl font-bold transition-all shadow-md text-xs md:text-sm uppercase tracking-wider shrink-0 font-owners"
        >
          <MessageCircle size={18} />
          Escribinos por WhatsApp
        </a>
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
                  <a href={sucursales[activeTab].whatsapp} target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1ebd5b] transition-all font-owners">
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

// --- NUEVA GALERÍA DE IMÁGENES REDUCIDA A LA MITAD Y EN FORMATO CARRUSEL CUADRADO ---

const GaleriaSlider = () => {
  const images = [
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-atencion.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/kuala-lumpur-farmacia-novum.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novum-farmacias-tandil-kuala-lumpur.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/tandil-novum.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/novafarma-novum.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/farmacias-tandil-atencion.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/piedra-que-late-tandil-farmacias.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/piedra-que-late-tandil-novum-farmacias.webp",
    "https://novumfarmacias.com.ar/wp-content/uploads/2026/07/kuala-lumpur-atencion-novum-farmacias.webp"
  ];

  const [startIndex, setStartIndex] = useState(0);

  const next = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Obtener 3 imágenes consecutivas manteniendo el loop
  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length]
  ];

  return (
    <section id="galeria" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative group">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                if (info.offset.x > 50) prev();
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 cursor-grab active:cursor-grabbing touch-pan-y"
            >
              {visibleImages.map((imgUrl, idx) => (
                <div
                  key={`${startIndex}-${idx}`}
                  className={`relative aspect-square overflow-hidden rounded-2xl shadow-md border border-brand-primary/5 bg-brand-bg/20 ${
                    idx >= 1 ? "hidden sm:block" : ""
                  } ${idx === 2 ? "hidden md:block" : ""}`}
                >
                  <img
                    src={imgUrl}
                    alt={`Galería Novum ${idx + 1}`}
                    className="w-full h-full object-cover pointer-events-none hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Flechas de navegación (Desktop) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-between pointer-events-none -mx-5">
            <button
              onClick={prev}
              className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 shadow-lg text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-brand-primary/10"
              aria-label="Anterior en galería"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 shadow-lg text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-brand-primary/10"
              aria-label="Siguiente en galería"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Puntos de posición inferiores */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  startIndex === idx ? "w-6 bg-brand-secondary" : "w-2 bg-brand-primary/20 hover:bg-brand-primary/40"
                }`}
                aria-label={`Ir a foto ${idx + 1}`}
              />
            ))}
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
      
      <div className="grid md:grid-cols-3 gap-8">
        {[ 
          { n: "Novafarma", l: "https://wa.me/5492494272729", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/novafarma-91b9ac.svg" },
          { n: "Piedra Que Late", l: "https://wa.me/5492494370055", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/piedra-que-late-98ef69.svg" },
          { n: "Kuala Lumpur", l: "https://wa.me/5492494288629", s: "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/kualalumpur-5db8e5.svg" }
        ].map((sede) => (
          <a key={sede.n} href={sede.l} target="_blank" rel="noreferrer" className="bg-brand-bg/30 p-10 rounded-[2rem] border-2 border-transparent hover:border-brand-secondary hover:bg-white transition-all duration-300 flex flex-col items-center gap-8 shadow-sm group">
            <div className="h-16 md:h-20 w-full flex items-center justify-center">
              <img src={sede.s} alt={sede.n} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="px-5 py-2 bg-brand-primary text-white rounded-full text-[10px] font-bold uppercase tracking-widest font-owners">
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
