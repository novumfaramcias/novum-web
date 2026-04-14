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

  // Nuevo Logo actualizado
  const logoUrl = "https://novumfarmacias.com.ar/wp-content/uploads/2026/04/Horizontal-blanco.png";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="w-40 md:w-52">
