import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Box, RotateCw, Layers, Cpu, ArrowRight, Zap, Info } from 'lucide-react';
import heroFigureImg from '../assets/images/grupo_8_modelo_gemini.png';
import boxPackagingImg from '../assets/images/blind_box_packaging_1786718780286.jpg';
import { sounds } from '../utils/audioEffects';

interface HeroProps {
  onOpenSimulator: () => void;
  onSelectBundle: (bundleId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator, onSelectBundle }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'figure' | 'box'>('figure');
  const [rotationAngle, setRotationAngle] = useState(0);

  const hotspots = [
    {
      id: 'helmet',
      top: '15%',
      left: '50%',
      title: 'Casco Técnico & Gafas Naranjas',
      desc: 'Casco azul institucional con franjas naranjas, logotipo SENATI y gafas de protección frontal.',
    },
    {
      id: 'chest',
      top: '43%',
      left: '49%',
      title: 'Emblema Hexagonal SENATI',
      desc: 'Uniforme técnico con escudo hexagonal institucional en el pecho y cuello ergonómico.',
    },
    {
      id: 'hammer',
      top: '62%',
      left: '38%',
      title: 'Martillo Táctico de Precisión',
      desc: 'Herramienta de manufactura con mango de madera y cabeza de impacto para ajustes de precisión.',
    },
    {
      id: 'tablet',
      top: '58%',
      left: '58%',
      title: 'Tablet de Diagnóstico y Telemetría',
      desc: 'Terminal portátil con logotipo SENATI para lectura de planos, parámetros y calibración.',
    },
    {
      id: 'base',
      top: '90%',
      left: '50%',
      title: 'Pedestal Circular con Chip NFC',
      desc: 'Base circular de soporte con microchip integrado para vincular la figura con la app AR.',
    },
  ];

  const handleRotate = () => {
    sounds.playClick();
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  return (
    <section id="producto" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Background high-tech grid subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A39E6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Ambient gradient orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0A39E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Product Information & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badges strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-[#0A39E6] text-white rounded-full shadow-xs">
                <ShieldCheck size={14} className="text-blue-200" />
                OFICIAL SENATI 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-orange-100 text-[#FF6600] border border-orange-200 rounded-full">
                <Sparkles size={13} />
                NEO-ARTESANÍA DIGITAL & DFAM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-full">
                <Box size={13} />
                DESK OBJECT ART TOY
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-['Outfit']">
                CONTROL <span className="text-[#0A39E6] block sm:inline">(Blind Box)</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-700 tracking-tight">
                El Art Toy coleccionable que redefine la identidad técnica e innovación de SENATI.
              </p>
            </div>

            {/* Description matching the provided PDF document */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Diseñado bajo la filosofía de la <strong>neo-artesanía digital</strong> y manufactura aditiva (DFAM) en resina MSLA de alta definición. Cada caja sellada oculta un robot operario representativo de nuestras facultades o la cotizada <strong>Edición Secreta SENATrón Prime</strong>. Equipado con base NFC interactiva y accesorios magnéticos intercambiables.
            </p>

            {/* Quick Tech Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A39E6]">
                  <Layers size={14} />
                  <span>Capa 35 µm</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Resina MSLA Ultra HD</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF6600]">
                  <Zap size={14} />
                  <span>Resina 70/30</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Anti-impacto escritorio</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A39E6]">
                  <Cpu size={14} />
                  <span>Chip NFC + AR</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Holograma & Ficha 3D</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
                  <Sparkles size={14} />
                  <span>Ratio 1/72</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Chase Secreto Oculto</div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-open-simulator-btn"
                onClick={() => {
                  sounds.playClick();
                  onOpenSimulator();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-extrabold text-white bg-[#0A39E6] hover:bg-[#072BB0] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 group cursor-pointer"
              >
                <Sparkles size={18} className="text-[#FF6600] group-hover:rotate-12 transition-transform" />
                <span>Simulador de Apertura 3D</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#preventa"
                onClick={() => {
                  sounds.playClick();
                  onSelectBundle('display-case');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0A39E6] rounded-xl transition-all shadow-2xs"
              >
                <span>Reservar Preventa (Desde S/. 49.90)</span>
              </a>
            </div>

            {/* Limited Batch Progress bar */}
            <div className="p-3.5 bg-blue-50/80 border border-blue-100 rounded-xl max-w-xl">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="text-[#0A39E6] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-ping" />
                  Primer Lote de Producción MSLA
                </span>
                <span className="text-slate-700">86% Asignado (Quedan 210 unidades)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0A39E6] via-blue-500 to-[#FF6600] rounded-full w-[86%]" />
              </div>
            </div>

          </div>

          {/* Right Column: 3D Product Interactive Turntable & Inspection */}
          <div className="lg:col-span-5 relative">
            
            {/* View Switcher pill */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode('figure');
                }}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  viewMode === 'figure'
                    ? 'bg-[#0A39E6] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Figura "Control"
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode('box');
                }}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  viewMode === 'box'
                    ? 'bg-[#0A39E6] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Packaging Blind Box
              </button>
              <button
                onClick={handleRotate}
                className="p-1.5 bg-white text-slate-600 border border-slate-200 hover:text-[#0A39E6] rounded-lg transition-all flex items-center gap-1 text-xs font-semibold px-2.5"
                title="Girar figura"
              >
                <RotateCw size={14} />
                <span>Girar</span>
              </button>
            </div>

            {/* Main 3D Card Display */}
            <div className="relative bg-gradient-to-b from-white to-slate-100 rounded-3xl p-6 border-2 border-slate-200 shadow-xl overflow-hidden group">
              
              {/* Institutional Hexagon watermark */}
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-48 h-48 fill-[#0A39E6]">
                  <path d="M50 4L88 26V74L50 96L12 74V26L50 4Z" />
                </svg>
              </div>

              {/* Rarity & Spec Tag Top Left */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase bg-[#0A39E6] text-white rounded-md">
                  SERIE 01 • PROTOTIPO OFICIAL
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-200">
                  Escala: 8.5 cm | Desk Object
                </span>
              </div>

              {/* Central Figure/Box Image Container */}
              <div className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
                
                {/* Turntable Pedestal Base Graphic */}
                <div className="absolute bottom-6 w-64 h-16 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-[100%] shadow-md border border-slate-300 transform -rotate-x-12 blur-[1px]" />
                <div className="absolute bottom-2 w-48 h-6 bg-slate-400/20 rounded-full blur-md" />

                {/* The Product Image */}
                <img
                  src={viewMode === 'figure' ? heroFigureImg : boxPackagingImg}
                  alt={viewMode === 'figure' ? 'Figura Coleccionable Control SENATI' : 'Packaging Blind Box Control'}
                  className="relative z-10 max-h-[380px] w-auto object-contain transition-transform duration-500 ease-out filter drop-shadow-2xl hover:scale-105"
                  style={{
                    transform: `rotateY(${rotationAngle}deg)`,
                  }}
                />

                {/* Interactive Hotspots on the figure (when in figure mode) */}
                {viewMode === 'figure' &&
                  hotspots.map((spot) => (
                    <div
                      key={spot.id}
                      className="absolute z-30"
                      style={{ top: spot.top, left: spot.left }}
                    >
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                        }}
                        aria-label={`Ver detalle de ${spot.title}`}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all ${
                          activeHotspot === spot.id
                            ? 'bg-[#FF6600] scale-125 ring-4 ring-orange-200 ring-opacity-80 animate-none'
                            : 'bg-[#0A39E6] hover:bg-[#FF6600] animate-pulse ring-2 ring-white shadow-md'
                        }`}
                      >
                        +
                      </button>

                      {/* Hotspot Popover Detail */}
                      {activeHotspot === spot.id && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-60 p-3 bg-slate-900 text-white rounded-xl text-xs shadow-2xl border border-slate-700 z-40 animate-in fade-in zoom-in-95 duration-150">
                          <div className="font-bold text-orange-400 mb-1 flex items-center justify-between">
                            <span>{spot.title}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveHotspot(null);
                              }}
                              className="text-slate-400 hover:text-white"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            {spot.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {/* Bottom Instructions Info */}
              <div className="relative z-20 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-[#0A39E6]">
                  <Info size={13} />
                  Haz clic en los puntos (+) para explorar detalles técnicos
                </span>
                <span className="hidden sm:inline text-slate-400">
                  Resina MSLA • 115g
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
