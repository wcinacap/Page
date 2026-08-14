import React, { useState, useEffect } from 'react';
import { SenatiLogo } from './SenatiLogo';
import { ShoppingBag, Volume2, VolumeX, Sparkles, Menu, X, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSimulator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) sounds.playClick();
  };

  const navLinks = [
    { label: 'El Producto', href: '#producto' },
    { label: 'Pitch Comercial & B2B', href: '#pitch-comercial' },
    { label: 'Colección (5+1)', href: '#coleccion' },
    { label: 'El Amuleto (10 Propuestas)', href: '#manifiesto' },
    { label: 'Simulador 3D', href: '#simulador' },
    { label: 'NFC & AR', href: '#tecnologia' },
    { label: 'Preventa & Precios', href: '#preventa' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top institutional strip */}
      <div className="bg-[#0A39E6] text-white text-[11px] font-medium tracking-wide py-1 px-4 text-center hidden md:flex items-center justify-between border-b border-[#072BB0]">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF6600] animate-pulse"></span>
            <span>PROYECTO OFICIAL DE NEO-ARTESANÍA DIGITAL SENATI • MANUFACTURA ADITIVA DFAM</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-blue-100">Colores Institucionales: <strong className="text-white">Azul SENATI (RGB: 10, 57, 230)</strong></span>
            <span className="text-slate-300">|</span>
            <span className="text-orange-300 font-semibold">Envío a más de 80 Sedes Nacionales</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0A39E6] rounded-lg p-1"
            onClick={() => sounds.playClick()}
            aria-label="Ir al inicio de SENATI Control Blind Box"
          >
            <SenatiLogo variant="horizontal" theme="blue" height={32} />
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-xs font-black tracking-widest text-[#0A39E6] uppercase font-['Outfit']">
                CONTROL
              </span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                Blind Box Series
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => sounds.playClick()}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#0A39E6] hover:bg-blue-50/80 rounded-md transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={toggleAudio}
            title={isMuted ? 'Activar efectos de sonido' : 'Silenciar efectos'}
            className="p-2 text-slate-500 hover:text-[#0A39E6] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Alternar sonido"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Quick Unboxing Simulator CTA */}
          <button
            id="nav-unbox-simulator-btn"
            onClick={() => {
              sounds.playClick();
              onOpenSimulator();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#0A39E6] bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg transition-all shadow-xs"
          >
            <Sparkles size={14} className="text-[#FF6600] animate-spin" style={{ animationDuration: '4s' }} />
            <span>Simulador 3D</span>
          </button>

          {/* Cart Button */}
          <button
            id="cart-drawer-trigger"
            onClick={() => {
              sounds.playClick();
              onOpenCart();
            }}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white bg-[#0A39E6] hover:bg-[#072BB0] rounded-lg transition-all shadow-sm active:scale-95"
            aria-label={`Ver carrito de compras con ${cartCount} productos`}
          >
            <ShoppingBag size={16} />
            <span className="hidden xs:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-black bg-[#FF6600] text-white rounded-full ml-0.5 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0A39E6] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">
            Navegación
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0A39E6] hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight size={16} className="text-slate-400" />
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-[#0A39E6] bg-blue-50 border border-blue-200 rounded-lg"
            >
              <Sparkles size={16} className="text-[#FF6600]" />
              <span>Abrir Simulador de Blind Box 3D</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
