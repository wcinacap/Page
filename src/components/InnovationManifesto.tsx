import React, { useState } from 'react';
import {
  Sparkles,
  HelpCircle,
  CheckCircle2,
  Cpu,
  Flame,
  Bot,
  Hammer,
  Plane,
  Radio,
  Cog,
  Leaf,
  Send,
  Box,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Info,
  ChevronRight,
  X
} from 'lucide-react';
import heroFigureImg from '../assets/images/grupo_8_modelo_gemini.png';
import { sounds } from '../utils/audioEffects';

interface InnovationManifestoProps {
  onOpenSimulator: () => void;
  onExploreCollection: () => void;
}

export const InnovationManifesto: React.FC<InnovationManifestoProps> = ({
  onOpenSimulator,
  onExploreCollection,
}) => {
  const [selectedConceptIndex, setSelectedConceptIndex] = useState<number>(9); // Default on 10. La Matriz de Control
  const [modalOpen, setModalOpen] = useState(false);

  // The 10 conceptual proposals from the SENATI Innovation Collectibles blueprint
  const innovationProposals = [
    {
      id: 1,
      name: 'SENATrón',
      subtitle: 'El Guardián del Engranaje',
      icon: Cog,
      category: 'Mecatrónica & Precisión',
      status: 'Prototipo Conceptual',
      color: '#0A39E6',
      badge: 'Lore Ancestral',
      summary: 'Centinela mecatrónico de proporciones titánicas que simboliza la fuerza motriz de la industria pesada y la automatización.',
      details: 'Inspirado en la ingeniería robótica y el engranaje histórico de SENATI. Diseñado para representar la estabilidad y el sincronismo operacional en plantas de manufactura continua.',
      techSpec: 'Sensor de par kinético en núcleo central y aleación polimérica reforzada.'
    },
    {
      id: 2,
      name: 'La Forja Cyber-Inca',
      subtitle: 'Neo-Artesano Tech',
      icon: Flame,
      category: 'Neo-Artesanía & DFAM',
      status: 'Fase de Esculpido',
      color: '#FF6600',
      badge: 'Cultura & Futuro',
      summary: 'El cruce definitivo entre la orfebrería precolombina de alta precisión y las técnicas aditivas de sinterizado láser.',
      details: 'Rinde homenaje a la milenaria tradición metalúrgica andina, fusionándola con micro-grabados biomórficos de circuitos impresos y resinas nano-reforzadas.',
      techSpec: 'Pátina de acabado electrodepositado en cobre industrial y azul cobalto.'
    },
    {
      id: 3,
      name: 'Byte-Bot',
      subtitle: 'La Mascota del Código y la Automatización',
      icon: Bot,
      category: 'Tecnologías TI & IA',
      status: 'Variante en Serie 1',
      color: '#00D2FF',
      badge: 'Ecosistema Cloud',
      summary: 'Entidad de asistencia algorítmica para desarrolladores, analistas de datos y arquitectos de ciberseguridad.',
      details: 'Un compañero de escritorio dotado de un visor HUD translúcido interactivo que proyecta el pulso de los servidores y el estado de compilación de software en tiempo real.',
      techSpec: 'Módulo NFC NTAG213 para sincronización de repositorios Git y telemetría.'
    },
    {
      id: 4,
      name: 'El Maestro Tinku-Tech',
      subtitle: 'Escultura de Contraste',
      icon: Hammer,
      category: 'Maestría Técnica & Torno',
      status: 'Estudio Ergonómico',
      color: '#E63946',
      badge: 'Destreza Manual',
      summary: 'La síntesis del saber empírico del maestro de taller con el control numérico computarizado (CNC).',
      details: 'Una figura de alta carga emocional que representa la transmisión generacional del oficio técnico. Porta el calibrador vernier de precisión micrométrica.',
      techSpec: 'Textura bicapa con tolerancias de encastre dimensional bajo norma ISO 2768.'
    },
    {
      id: 5,
      name: 'Dron-Pucará',
      subtitle: 'El Guardián Autónomo',
      icon: Plane,
      category: 'Robótica Aérea & IoT',
      status: 'I+D Aditivo',
      color: '#38B000',
      badge: 'Vigilancia Inteligente',
      summary: 'Unidad de exploración y escaneo topográfico aéreo para minería, agricultura de precisión e inspección estructural.',
      details: 'Inspirado en la figura zoomorfa del Torito de Pucará como símbolo de protección, reconvertido en un cuadricóptero modular de patrullaje industrial.',
      techSpec: 'Chasis de fibra de carbono ultraligera con tren de aterrizaje magnético.'
    },
    {
      id: 6,
      name: 'Operario Cyberpunk 2080',
      subtitle: 'El Técnico Aumentado',
      icon: Cpu,
      category: 'Biónica & Exoesqueletos',
      status: 'Concept Art 3D',
      color: '#9D4EDD',
      badge: 'Visión Futurista',
      summary: 'La proyección del egresado técnico en el centenario del porvenir, asistido por exoesqueleto de potencia.',
      details: 'Diseñado con estética sci-fi distópica elegante. Sus extremidades mecánicas reflejan la evolución del operario hacia la integración ciber-física total.',
      techSpec: 'Articulaciones esféricas multipunto con micro-pistones neumáticos decorativos.'
    },
    {
      id: 7,
      name: 'El Engranaje del Saber',
      subtitle: 'Escultura Kinetic/Modular',
      icon: Cog,
      category: 'Diseño Industrial Kinetic',
      status: 'Modelado Paramétrico',
      color: '#0A39E6',
      badge: 'Desk Toy Activo',
      summary: 'Escultura de escritorio con un tren de engranajes planetarios que giran de forma sincronizada y anti-estrés.',
      details: 'Diseñada como una pieza ceremonial para graduaciones y reconocimientos a la excelencia docente. Demuestra de forma visual las leyes de la termodinámica y transmisión.',
      techSpec: 'Rodamientos cerámicos sellados con giro libre de bajo rozamiento (>90 segundos).'
    },
    {
      id: 8,
      name: 'Eco-Bot Sostenible',
      subtitle: 'La Innovación Verde',
      icon: Leaf,
      category: 'Economía Circular',
      status: 'Formulación Bio-Resina',
      color: '#2A9D8F',
      badge: 'Huella Cero',
      summary: 'Guardián de las energías renovables, la gestión de residuos industriales y la electromovilidad limpia.',
      details: 'Fabricado íntegramente a partir de biopolímeros derivados de residuos orgánicos y resinas vegetales fotosensibles, promoviendo el compromiso ambiental de SENATI.',
      techSpec: 'Matriz de PLA reciclado de alta densidad con tinte mineral biodegradable.'
    },
    {
      id: 9,
      name: 'Chaski 4.0',
      subtitle: 'El Mensajero de la Red',
      icon: Send,
      category: 'Telecomunicaciones 5G',
      status: 'Diseño de Carácter',
      color: '#F77F00',
      badge: 'Conectividad Veloz',
      summary: 'El legendario mensajero del Tahuantinsuyo adaptado a la era del intercambio masivo de paquetes de datos y fibra óptica.',
      details: 'Porta una mochila de retransmisión satelital compacta y un pututo sónico emisor de frecuencias industriales para diagnóstico acústico.',
      techSpec: 'Antena planar integrada y leds de señal con efecto pulsante.'
    },
    {
      id: 10,
      name: 'La Matriz de Control',
      subtitle: 'Línea Blind Box Coleccionable',
      icon: Box,
      category: 'Producto Oficial Disponible',
      status: '⭐ ¡EN PREVENTA ACTIVA 2026!',
      color: '#0A39E6',
      badge: 'FIGURA INSIGNIA OFICIAL',
      summary: 'El núcleo tangible de todo el ecosistema. La figura "Control" producida con manufactura aditiva DFAM, empaque sorpresa y chip NFC.',
      details: 'El primer producto materializado y comercializado del universo SENATI Innovation Collectibles. Proporciones Chibi Art Toy, uniforme técnico emblemático, encastres magnéticos y telemetría en Realidad Aumentada.',
      techSpec: 'Resina híbrida 70/30 (HD + ABS-Like), resolución MSLA 35µm y pintura institucional calibrada.'
    },
  ];

  const activeProposal = innovationProposals[selectedConceptIndex];

  return (
    <section id="manifiesto" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
      
      {/* Background Tech Grids & Ambient Blue/Orange Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A39E6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#0A39E6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF6600]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 text-xs font-black uppercase tracking-widest bg-blue-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
            <Sparkles size={14} className="text-[#FF6600]" />
            SENATI INNOVATION COLLECTIBLES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] tracking-tight text-white">
            El Amuleto de la <span className="text-[#FF6600]">Creatividad Técnica</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Una iniciativa estratégica que transforma el orgullo y la identidad de la comunidad técnica más prestigiosa del país en piezas de arte tangible y coleccionismo contemporáneo.
          </p>
        </div>

        {/* HUD Box: Problem Definition vs Solution (Exact Presentation Blueprint) */}
        <div className="relative rounded-3xl bg-slate-950/90 border-2 border-slate-800 shadow-2xl p-6 sm:p-10 mb-16 overflow-hidden">
          
          {/* Tech HUD Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF6600]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF6600]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

          {/* Top Problem Banner Header */}
          <div className="mb-8 p-4 bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 rounded-2xl border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-cyan-400">
                <HelpCircle size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Definición del Problema Institucional
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white font-['Outfit']">
                  ¿Falta de Identidad y Reconocimiento para el Talento Técnico?
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-[#FF6600]/40 text-[#FF6600] text-xs font-bold shrink-0">
              Solución: Neo-Artesanía Digital
            </div>
          </div>

          {/* Split Grid: Left Figure Showcase vs Right Solution & Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: The "Control" Figure Model as the central totem */}
            <div className="lg:col-span-5 text-center flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/80 p-4 shadow-xl group">
                
                {/* Tech Aura Background */}
                <div className="absolute inset-0 bg-radial from-[#0A39E6]/30 via-transparent to-transparent opacity-75" />
                
                <img
                  src={heroFigureImg}
                  alt="Modelo Central CONTROL - El Amuleto de la Creatividad Técnica"
                  className="w-full h-80 object-contain drop-shadow-[0_15px_25px_rgba(10,57,230,0.5)] group-hover:scale-105 transition-transform duration-500 relative z-10"
                />

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800 text-left z-20">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-black tracking-widest uppercase">
                      OBJETO DE ESCRITORIO OFICIAL
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    Modelo "Control" (Blind Box Series)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Chasis universal, 5 variantes de carrera + 1 Chase secreta.
                  </div>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 font-mono">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Certificado Oficial de Identidad Institucional</span>
              </div>
            </div>

            {/* Right: The Solution & 10 Conceptual Figures Grid */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6600] uppercase tracking-wider">
                  <Zap size={14} />
                  <span>La Solución Integral</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] leading-snug">
                  10 Figuras Conceptuales Creadas para Certificar la Identidad Institucional, Creatividad Técnica e Innovación
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Un universo narrativo diseñado para convertir los escritorios de ingenieros, egresados y empresas en vitrinas de prestigio. Haz clic en cualquiera de las 10 propuestas para explorar sus detalles técnicos:
                </p>
              </div>

              {/* 10 Proposals Interactive Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {innovationProposals.map((prop, idx) => {
                  const Icon = prop.icon;
                  const isSelected = selectedConceptIndex === idx;
                  const isAvailableNow = prop.id === 10;

                  return (
                    <button
                      key={prop.id}
                      onClick={() => {
                        sounds.playClick();
                        setSelectedConceptIndex(idx);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#0A39E6]/30 border-cyan-400 ring-1 ring-cyan-400 shadow-md'
                          : isAvailableNow
                          ? 'bg-[#FF6600]/15 border-[#FF6600]/60 hover:bg-[#FF6600]/25'
                          : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-cyan-400 text-slate-950 font-bold'
                            : isAvailableNow
                            ? 'bg-[#FF6600] text-white'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        <Icon size={14} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-white truncate">
                            {prop.id}. {prop.name}
                          </span>
                          {isAvailableNow && (
                            <span className="text-[9px] font-black uppercase px-1.5 py-0.2 bg-[#FF6600] text-white rounded font-mono shrink-0 animate-pulse">
                              ¡HOY!
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {prop.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Concept Preview Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-950 border border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black text-cyan-300">
                      PROPUESTA #{activeProposal.id} • {activeProposal.category}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeProposal.id === 10
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  }`}>
                    {activeProposal.status}
                  </span>
                </div>

                <div className="text-sm font-extrabold text-white">
                  {activeProposal.name}: {activeProposal.subtitle}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeProposal.summary}
                </p>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">
                    {activeProposal.techSpec}
                  </span>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setModalOpen(true);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver Ficha Completa</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-base sm:text-lg font-black text-white font-['Outfit'] block">
                Potencia tu Marca Institucional Ahora
              </span>
              <span className="text-xs text-slate-400">
                La propuesta <strong>#10 (La Matriz de Control)</strong> ya está en producción física con entrega inmediata y recojo en sedes SENATI.
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenSimulator();
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#FF6600] hover:bg-orange-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={15} />
                <span>Abrir Blind Box</span>
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onExploreCollection();
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Ver la Serie 2026</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Modal: Full Proposal Blueprint Inspector */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 text-left space-y-4 shadow-2xl relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase">
              <Info size={15} />
              <span>FICHA CONCEPTUAL SENATI COLLECTIBLES</span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white font-['Outfit']">
                {activeProposal.id}. {activeProposal.name}
              </h3>
              <p className="text-xs text-[#FF6600] font-bold">
                {activeProposal.subtitle}
              </p>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="text-slate-400"><strong>Categoría:</strong> {activeProposal.category}</div>
              <div className="text-slate-400"><strong>Estado del Proyecto:</strong> <span className="text-white font-semibold">{activeProposal.status}</span></div>
              <div className="text-slate-400"><strong>Especificación Técnica:</strong> <span className="text-cyan-300 font-mono">{activeProposal.techSpec}</span></div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <p><strong>Descripción de Diseño:</strong> {activeProposal.details}</p>
              <p><strong>Impacto Institucional:</strong> Fortalece el sentido de pertenencia técnica, creando un vínculo emocional duradero entre el egresado y su alma máter mediante un objeto de alta factura estética.</p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-[#0A39E6] hover:bg-[#072BB0] text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
