import React, { useState } from 'react';
import {
  HelpCircle,
  Sparkles,
  Layers,
  Users,
  Cpu,
  ShoppingBag,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Shield,
  FileSpreadsheet,
  Building2,
  Gift,
  Zap,
  Repeat,
  Package,
  Boxes,
  Award,
  Send,
  X,
  Calculator,
  ChevronRight,
  Printer,
  Copy,
  Check,
  LayoutGrid,
  ListOrdered,
  Globe,
  Flame,
  Radio,
  FileText
} from 'lucide-react';
import heroFigureImg from '../assets/images/grupo_8_modelo_gemini.png';
import boxPackagingImg from '../assets/images/blind_box_packaging_1786718780286.jpg';
import deskSetupImg from '../assets/images/desk_setup_showcase_1786719076100.jpg';
import { sounds } from '../utils/audioEffects';

interface ProductPitchProps {
  onOpenSimulator: () => void;
  onGoToPreOrder: () => void;
}

export const ProductPitch: React.FC<ProductPitchProps> = ({
  onOpenSimulator,
  onGoToPreOrder,
}) => {
  const [activeTab, setActiveTab] = useState<'problema' | 'solucion' | 'valor' | 'publico' | 'viabilidad' | 'cta'>('solucion');
  const [viewStyle, setViewStyle] = useState<'tabs' | 'full'>('tabs');
  const [b2bModalOpen, setB2bModalOpen] = useState(false);
  const [b2bQuantity, setB2bQuantity] = useState(50);
  const [b2bType, setB2bType] = useState('welcome-kit');
  const [b2bNfcCustom, setB2bNfcCustom] = useState(true);
  const [b2bEngraving, setB2bEngraving] = useState(true);
  const [b2bContactEmail, setB2bContactEmail] = useState('');
  const [b2bCompanyName, setB2bCompanyName] = useState('');
  const [b2bQuoteSent, setB2bQuoteSent] = useState(false);
  const [copiedPitch, setCopiedPitch] = useState(false);

  // 5 Faculties as stated in the official pitch
  const faculties = [
    { name: 'Mecánica Automotriz', code: 'AUTO-01', color: '#38B000', icon: '⚡' },
    { name: 'Electrotecnia & Automatización', code: 'ELEC-02', color: '#FFA800', icon: '⚡' },
    { name: 'Metalmecánica & Soldadura', code: 'METAL-03', color: '#E63946', icon: '⚙️' },
    { name: 'Tecnologías de la Información (TI)', code: 'TI-04', color: '#00D2FF', icon: '💻' },
    { name: 'Textil & Mecatrónica', code: 'TEXT-05', color: '#0A39E6', icon: '🧵' },
  ];

  // B2B Pricing Calculation
  const getB2bUnitPrice = (qty: number) => {
    if (qty >= 250) return 38.0;
    if (qty >= 100) return 42.5;
    if (qty >= 50) return 46.0;
    return 49.9;
  };

  const unitPrice = getB2bUnitPrice(b2bQuantity);
  const subtotal = unitPrice * b2bQuantity;
  const extrasCost = (b2bEngraving ? 4.5 * b2bQuantity : 0) + (b2bNfcCustom ? 3.0 * b2bQuantity : 0);
  const totalB2b = subtotal + extrasCost;

  const handleSendB2bQuote = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playUnboxReveal(false);
    setB2bQuoteSent(true);
  };

  const copyPitchSummary = () => {
    sounds.playClick();
    const text = `🚀 PITCH DE PRODUCTO: LA MATRIZ DE CONTROL (BLIND BOX) - SENATI 2026

1. EL PROBLEMA
Cinco facultades líderes, pero ninguna forma visual de representar su orgullo individual: Automotriz, Electrotecnia, Metalmecánica, TI y Textil.

2. LA SOLUCIÓN
La primera serie coleccionable oficial de 5 mini-robots (7-8 cm) en formato Blind Box. Art Toy de vanguardia, experiencia de unboxing e intercambio.

3. PROPUESTA DE VALOR Y DIFERENCIACIÓN
• Ultra Precisión MSLA/SLA (35µm)
• Ecosistema de Coleccionismo y Gamificación
• Materiales de Alta Tenacidad (Resina 70/30 anti-impacto)
• Conectividad Transmedia (NFC + Realidad Aumentada)

4. PÚBLICO OBJETIVO
1. Comunidad Estudiantil y Egresados SENATI
2. Kidults y Entusiastas de la Tecnología (25–45 años)
3. Mercado B2B y Regalos Institucionales

5. VIABILIDAD TÉCNICA Y ESCALABILIDAD (DFAM)
• Producción ágil (7-8 cm, 48g resina ahuecada)
• Criterios DFAM con keying magnético y drenaje oculto

6. LLAMADO A LA ACCIÓN
¿Estás listo para completar la matriz? ¡Descubre tu facultad, intercambia tus repetidas y llena tu escritorio de innovación!`;

    navigator.clipboard.writeText(text);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  return (
    <section id="pitch-comercial" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A39E6_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0A39E6]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#FF6600]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pitch Super-Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-gradient-to-r from-blue-600/30 via-orange-500/20 to-blue-600/30 text-cyan-300 border border-cyan-400/40 rounded-full shadow-lg">
            <span className="text-base">🚀</span>
            PITCH DE PRODUCTO: LA MATRIZ DE CONTROL (BLIND BOX)
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] tracking-tight text-white leading-tight">
            La Primera Serie Coleccionable de <span className="text-[#FF6600]">SENATI</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Estructura publicitaria integral diseñada para cautivar tanto a la <strong>comunidad académica</strong> como al <strong>mercado B2B e institucional</strong> de SENATI.
          </p>

          {/* View Mode & Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="bg-slate-800/90 p-1 rounded-xl border border-slate-700 flex items-center gap-1 text-xs">
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewStyle('tabs');
                }}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewStyle === 'tabs' ? 'bg-[#0A39E6] text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <ListOrdered size={14} />
                <span>Vista Interactiva (1 a 6)</span>
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewStyle('full');
                }}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewStyle === 'full' ? 'bg-[#0A39E6] text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid size={14} />
                <span>Pitch Deck Completo</span>
              </button>
            </div>

            <button
              onClick={copyPitchSummary}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              title="Copiar resumen del pitch publicitario"
            >
              {copiedPitch ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedPitch ? '¡Pitch Copiado al Portapapeles!' : 'Copiar Resumen Ejecutivo'}</span>
            </button>
          </div>
        </div>

        {/* TAB NAVIGATION (Visible when viewStyle === 'tabs') */}
        {viewStyle === 'tabs' && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: 'problema', label: '1. El Problema', icon: HelpCircle },
              { id: 'solucion', label: '2. La Solución', icon: Sparkles },
              { id: 'valor', label: '3. Propuesta de Valor', icon: Shield },
              { id: 'publico', label: '4. Público Objetivo', icon: Users },
              { id: 'viabilidad', label: '5. Viabilidad & DFAM', icon: Cpu },
              { id: 'cta', label: '6. Llamado a la Acción', icon: ShoppingBag },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab(tab.id as any);
                  }}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                    isActive
                      ? 'bg-[#0A39E6] text-white border-cyan-400 shadow-[0_0_15px_rgba(10,57,230,0.5)] ring-1 ring-cyan-400'
                      : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-[#FF6600]' : 'text-slate-400'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* CONTAINER: INTERACTIVE TAB VIEW OR FULL INFOGRAPHIC VIEW */}
        {viewStyle === 'tabs' ? (
          /* SINGLE TAB VIEW */
          <div className="bg-slate-950/85 rounded-3xl border-2 border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md">
            
            {/* Tech Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF6600]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF6600]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

            {/* TAB 1: EL PROBLEMA */}
            {activeTab === 'problema' && (
              <div className="space-y-8 animate-in fade-in duration-200 text-left">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-7/12 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs font-mono font-bold uppercase">
                      <HelpCircle size={14} />
                      1. EL PROBLEMA
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit'] leading-tight">
                      Cinco facultades líderes, pero ninguna forma visual de representar su <span className="text-[#FF6600]">orgullo individual</span>.
                    </h3>

                    <blockquote className="p-4 bg-slate-900/90 rounded-2xl border-l-4 border-l-red-500 border-y border-r border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed">
                      SENATI alberga las áreas clave del conocimiento industrial: <strong>Automotriz, Electrotecnia, Metalmecánica, TI y Textil</strong>. Cada facultad posee una cultura viva, espíritu de innovación y alto sentido de pertenencia.
                    </blockquote>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Sin embargo, hasta hoy no existía un objeto contemporáneo que tangibilizara la identidad única de cada carrera, ni una dinamización divertida para que estudiantes y egresados conecten, muestren su orgullo técnico y compartan en la comunidad.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">✕</div>
                        <div className="text-xs text-slate-300">Merchandising plano o genérico sin emoción</div>
                      </div>
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0">✕</div>
                        <div className="text-xs text-slate-300">Cero interacción lúdica entre sedes y alumnos</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-5/12 w-full">
                    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center justify-between">
                        <span>Las 5 Facultades Clave</span>
                        <span className="text-[10px] text-slate-500">SENATI 2026</span>
                      </div>
                      <div className="space-y-2.5">
                        {faculties.map((f, i) => (
                          <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                            <div className="flex items-center gap-3">
                              <span className="w-3.5 h-3.5 rounded-full shadow-xs" style={{ backgroundColor: f.color }} />
                              <span className="text-xs font-bold text-white">{f.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-cyan-400 font-bold">{f.code}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setActiveTab('solucion');
                        }}
                        className="w-full py-3 bg-[#0A39E6] hover:bg-[#072BB0] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer mt-2 shadow-lg"
                      >
                        <span>Descubrir la Solución</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LA SOLUCIÓN */}
            {activeTab === 'solucion' && (
              <div className="space-y-8 animate-in fade-in duration-200 text-left">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-6/12 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-300 rounded-lg text-xs font-mono font-bold uppercase">
                      <Sparkles size={14} className="text-[#FF6600]" />
                      2. LA SOLUCIÓN
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit'] leading-tight">
                      La Matriz de Control: <span className="text-[#0A39E6]">La primera serie coleccionable de SENATI</span>
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      Presentamos una línea exclusiva de <strong>5 mini-robots operarios en formato Blind Box (caja sorpresa)</strong> de 7 a 8 cm de altura. Cada figura representa estilizadamente el espíritu, las herramientas y la tecnología de las facultades principales.
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Award size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-white">Formato Art Toy de Vanguardia</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            Estética <em>chibi / Hard Surface</em> de escala compacta que convierte tu estación de trabajo en un espacio con identidad técnica.
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-[#FF6600] flex items-center justify-center shrink-0 mt-0.5">
                          <Repeat size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-white">Experiencia Unboxing & Intercambio</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            La intriga de no saber qué facultad descubrirás al abrir la caja impulsa el coleccionismo, el intercambio entre compañeros y el sentido de comunidad.
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Layers size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-white">Cultura + Neo-Artesanía Digital</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            Un objeto de escritorio (<em>Desk Object</em>) que proyecta la educación técnica a la era de la Industria 4.0.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-6/12 w-full flex flex-col items-center">
                    <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 text-center shadow-2xl">
                      <img
                        src={boxPackagingImg}
                        alt="Blind Box Packaging La Matriz de Control"
                        className="h-64 sm:h-72 w-auto mx-auto object-contain drop-shadow-[0_10px_25px_rgba(10,57,230,0.4)] hover:scale-105 transition-transform"
                      />
                      <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-mono text-cyan-300 font-bold">5 Figuras + 1 Chase Secreto</span>
                        <span className="font-mono text-emerald-400 font-bold">Escala 7-8 cm</span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => {
                            sounds.playClick();
                            onOpenSimulator();
                          }}
                          className="flex-1 py-2.5 bg-[#FF6600] hover:bg-orange-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                        >
                          <Sparkles size={14} />
                          <span>Probar Simulador</span>
                        </button>
                        <button
                          onClick={() => {
                            sounds.playClick();
                            setActiveTab('valor');
                          }}
                          className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer border border-slate-700"
                        >
                          <span>Ver Diferenciales</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PROPUESTA DE VALOR Y DIFERENCIACIÓN */}
            {activeTab === 'valor' && (
              <div className="space-y-8 animate-in fade-in duration-200 text-left">
                <div className="text-center max-w-3xl mx-auto space-y-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-mono font-bold uppercase">
                    <Shield size={14} />
                    3. PROPUESTA DE VALOR Y DIFERENCIACIÓN
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                    4 Pilares de Excelencia que Aseguran el Éxito
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pillar 1 */}
                  <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-400/50 transition-all space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-cyan-400 flex items-center justify-center text-xl">
                        ⚙️
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">Pilar 01</span>
                        <h4 className="text-base sm:text-lg font-black text-white font-['Outfit']">
                          Ultra Precisión y Alta Fidelidad (MSLA/SLA)
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Fabricados con tecnología de manufactura aditiva que captura detalles finos a <strong>35 micrómetros de resolución</strong>, con esquemas de tolerancias exactos y ensamble perfecto.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-[#FF6600]/50 transition-all space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/40 text-[#FF6600] flex items-center justify-center text-xl">
                        🔄
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#FF6600] font-bold uppercase tracking-wider">Pilar 02</span>
                        <h4 className="text-base sm:text-lg font-black text-white font-['Outfit']">
                          Ecosistema de Coleccionismo y Gamificación
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      El formato de caja ciega promueve la compra recurrente, la interacción social dentro del campus y el coleccionismo entre egresados mediante comunidades de intercambio.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-emerald-400/50 transition-all space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-xl">
                        🛡️
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Pilar 03</span>
                        <h4 className="text-base sm:text-lg font-black text-white font-['Outfit']">
                          Materiales de Alta Tenacidad
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Fabricados utilizando mezclas de resina estándar (70%) y flexible (30%) para garantizar <strong>resistencia comprobada a caídas accidentales</strong> en el escritorio.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-purple-400/50 transition-all space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-400 flex items-center justify-center text-xl">
                        🌐
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider">Pilar 04</span>
                        <h4 className="text-base sm:text-lg font-black text-white font-['Outfit']">
                          Conectividad Transmedia (Opcional)
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Posibilidad de integrar un microchip NFC en la base para desplegar certificados digitales de autenticidad y experiencias interactivas de Realidad Aumentada (AR).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: PÚBLICO OBJETIVO */}
            {activeTab === 'publico' && (
              <div className="space-y-8 animate-in fade-in duration-200 text-left">
                <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-[#FF6600] rounded-lg text-xs font-mono font-bold uppercase">
                    <Users size={14} />
                    4. PÚBLICO OBJETIVO
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                    Tres Segmentos de Alta Demanda
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Segment 1 */}
                  <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                        Segmento 01
                      </div>
                      <h4 className="text-lg font-bold text-white font-['Outfit']">
                        1. Comunidad Estudiantil y Egresados SENATI
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Estudiantes de primer ingreso y graduados que buscan un símbolo identitario en su escritorio de trabajo o estudio. Sentido de pertenencia y orgullo por su carrera técnica.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
                      • Venta individual en campus y online
                    </div>
                  </div>

                  {/* Segment 2 */}
                  <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-500/20 text-[#FF6600] border border-orange-500/30">
                        Segmento 02 (25–45 años)
                      </div>
                      <h4 className="text-lg font-bold text-white font-['Outfit']">
                        2. Kidults y Entusiastas de la Tecnología
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Coleccionistas de Art Toys que valoran la estética geek, la cultura industrial y los objetos de diseño. Interés en completar la serie completa de 5 figuras y buscar el secreto 1/72.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] text-[#FF6600] font-mono">
                      • Sets completos y cajas de exhibición
                    </div>
                  </div>

                  {/* Segment 3 */}
                  <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Segmento 03 • B2B
                      </div>
                      <h4 className="text-lg font-bold text-white font-['Outfit']">
                        3. Mercado B2B y Regalos Institucionales
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Solución perfecta para paquetes de bienvenida (<em>Welcome Kits</em>), eventos corporativos, merchandising oficial y souvenirs de graduación de alto valor percibido.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setB2bModalOpen(true);
                      }}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Briefcase size={14} />
                      <span>Cotizar Pedido B2B</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: VIABILIDAD TÉCNICA Y ESCALABILIDAD DE PRODUCCIÓN */}
            {activeTab === 'viabilidad' && (
              <div className="space-y-8 animate-in fade-in duration-200 text-left">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="lg:w-7/12 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-lg text-xs font-mono font-bold uppercase">
                      <Cpu size={14} />
                      5. VIABILIDAD TÉCNICA Y ESCALABILIDAD DE PRODUCCIÓN
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit'] leading-tight">
                      Manufactura Ágil con Criterios <span className="text-cyan-400">DFAM Rigurosos</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                          <Zap size={16} />
                          <span>Producción Ágil y Eficiente</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Al ser piezas compactas (<strong>7–8 cm</strong>), optimizan los tiempos de impresión 3D y el consumo de resina, permitiendo fabricar por granjas de impresión MSLA o duplicar mediante moldes de silicona de colada masiva.
                        </p>
                      </div>

                      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#FF6600]">
                          <Layers size={16} />
                          <span>Criterios DFAM (Design for Additive Manufacturing)</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Diseñadas con despiece técnico (<em>keying</em>), ahuecado inteligente y drenajes invisibles que garantizan cero defectos cosméticos y la máxima durabilidad del producto final.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-5/12 w-full">
                    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3">
                      <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                        Métricas de Fabricación DFAM
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-slate-950 rounded-xl flex justify-between">
                          <span className="text-slate-400">Tiempo por bandeja (6 unidades):</span>
                          <span className="text-white font-mono font-bold">2.4 horas</span>
                        </div>
                        <div className="p-2.5 bg-slate-950 rounded-xl flex justify-between">
                          <span className="text-slate-400">Consumo de resina por figura:</span>
                          <span className="text-white font-mono font-bold">48 gramos (Ahuecado)</span>
                        </div>
                        <div className="p-2.5 bg-slate-950 rounded-xl flex justify-between">
                          <span className="text-slate-400">Tolerancia de encastre magnético:</span>
                          <span className="text-white font-mono font-bold">±0.05 mm</span>
                        </div>
                        <div className="p-2.5 bg-slate-950 rounded-xl flex justify-between">
                          <span className="text-slate-400">Capacidad granja mensual:</span>
                          <span className="text-emerald-400 font-mono font-bold">3,500 unidades</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: LLAMADO A LA ACCIÓN (CTA) */}
            {activeTab === 'cta' && (
              <div className="space-y-8 animate-in fade-in duration-200 text-center py-4">
                <div className="max-w-3xl mx-auto space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-500/20 border border-orange-500/40 text-[#FF6600] rounded-full text-xs font-mono font-bold uppercase">
                    <Sparkles size={14} />
                    6. LLAMADO A LA ACCIÓN (CALL TO ACTION / CTA)
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit']">
                    ¿Estás listo para completar la matriz?
                  </h3>

                  <p className="text-lg sm:text-xl text-slate-200 font-semibold max-w-2xl mx-auto">
                    ¡Descubre tu facultad, intercambia tus repetidas y llena tu escritorio de innovación!
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onGoToPreOrder();
                      }}
                      className="w-full sm:w-auto px-8 py-4 bg-[#FF6600] hover:bg-orange-500 text-white font-black text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <ShoppingBag size={18} />
                      <span>¡Consigue tu Blind Box aquí!</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => {
                        sounds.playClick();
                        setB2bModalOpen(true);
                      }}
                      className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Briefcase size={18} className="text-emerald-400" />
                      <span>Cotizar para Pedidos B2B e Institucionales</span>
                    </button>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      Recojo gratuito en sedes SENATI
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      Facturación con RUC disponible
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* FULL PITCH DECK VIEW (ALL 6 SECTIONS SEQUENTIALLY) */
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* 1. EL PROBLEMA */}
            <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase">
                <HelpCircle size={15} />
                <span>1. EL PROBLEMA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                Cinco facultades líderes, pero ninguna forma visual de representar su <span className="text-[#FF6600]">orgullo individual</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                SENATI alberga las áreas clave del conocimiento industrial: <strong>Automotriz, Electrotecnia, Metalmecánica, TI y Textil</strong>. Cada facultad posee una cultura viva, espíritu de innovación y alto sentido de pertenencia. Sin embargo, hasta hoy no existía un objeto contemporáneo que tangibilizara la identidad única de cada carrera, ni una dinamización divertida para que estudiantes y egresados conecten, muestren su orgullo técnico y compartan en la comunidad.
              </p>
            </div>

            {/* 2. LA SOLUCIÓN */}
            <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                <Sparkles size={15} className="text-[#FF6600]" />
                <span>2. LA SOLUCIÓN</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                La Matriz de Control: <span className="text-[#0A39E6]">La primera serie coleccionable de SENATI</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Presentamos una línea exclusiva de <strong>5 mini-robots operarios en formato Blind Box (caja sorpresa)</strong> de 7 a 8 cm de altura. Cada figura representa estilizadamente el espíritu, las herramientas y la tecnología de las facultades principales.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Formato Art Toy de Vanguardia</div>
                  <div className="text-xs text-slate-400">Estética <em>chibi / Hard Surface</em> de escala compacta que convierte tu estación de trabajo en un espacio con identidad técnica.</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Experiencia Unboxing & Intercambio</div>
                  <div className="text-xs text-slate-400">La intriga de no saber qué facultad descubrirás al abrir la caja impulsa el coleccionismo y la comunidad.</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Cultura + Neo-Artesanía Digital</div>
                  <div className="text-xs text-slate-400">Un objeto de escritorio (<em>Desk Object</em>) que proyecta la educación técnica a la Industria 4.0.</div>
                </div>
              </div>
            </div>

            {/* 3. PROPUESTA DE VALOR */}
            <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                <Shield size={15} />
                <span>3. PROPUESTA DE VALOR Y DIFERENCIACIÓN</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="text-xl">⚙️</span>
                  <div>
                    <div className="font-bold text-white text-xs">Ultra Precisión y Alta Fidelidad (MSLA/SLA)</div>
                    <div className="text-xs text-slate-400 mt-0.5">Fabricados con manufactura aditiva que captura detalles finos a 35µm, esquemas de tolerancias exactos y ensamble perfecto.</div>
                  </div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="text-xl">🔄</span>
                  <div>
                    <div className="font-bold text-white text-xs">Ecosistema de Coleccionismo y Gamificación</div>
                    <div className="text-xs text-slate-400 mt-0.5">El formato de caja ciega promueve la compra recurrente, la interacción en campus y el coleccionismo entre egresados.</div>
                  </div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="text-xl">🛡️</span>
                  <div>
                    <div className="font-bold text-white text-xs">Materiales de Alta Tenacidad</div>
                    <div className="text-xs text-slate-400 mt-0.5">Fabricados con mezclas de resina estándar (70%) y flexible (30%) para garantizar resistencia a caídas accidentales.</div>
                  </div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <div className="font-bold text-white text-xs">Conectividad Transmedia (Opcional)</div>
                    <div className="text-xs text-slate-400 mt-0.5">Integración de chip NFC en la base para desplegar certificados digitales y experiencias interactivas AR.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PÚBLICO OBJETIVO */}
            <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase">
                <Users size={15} />
                <span>4. PÚBLICO OBJETIVO</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-cyan-300 text-xs mb-1">1. Comunidad Estudiantil y Egresados</div>
                  <p className="text-xs text-slate-400">Estudiantes y graduados que buscan un símbolo identitario en su escritorio de estudio o trabajo.</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-orange-400 text-xs mb-1">2. Kidults & Entusiastas (25–45 años)</div>
                  <p className="text-xs text-slate-400">Coleccionistas de Art Toys que valoran la estética geek, cultura industrial y objetos de diseño.</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-emerald-400 text-xs mb-1">3. Mercado B2B & Institucional</div>
                  <p className="text-xs text-slate-400">Welcome Kits, eventos corporativos, merchandising oficial y souvenirs de graduación de alto valor.</p>
                </div>
              </div>
            </div>

            {/* 5. VIABILIDAD TÉCNICA */}
            <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                <Cpu size={15} />
                <span>5. VIABILIDAD TÉCNICA Y ESCALABILIDAD DE PRODUCCIÓN</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Producción Ágil y Eficiente</div>
                  <div className="text-xs text-slate-400">Piezas compactas (7–8 cm) que optimizan tiempos de impresión y resina, aptas para granjas MSLA o moldes de silicona.</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xs mb-1">Criterios DFAM (Design for Additive Manufacturing)</div>
                  <div className="text-xs text-slate-400">Despiece técnico (keying), ahuecado inteligente y drenajes invisibles que garantizan cero defectos y máxima durabilidad.</div>
                </div>
              </div>
            </div>

            {/* 6. LLAMADO A LA ACCIÓN (CTA) */}
            <div className="bg-gradient-to-r from-blue-950/80 to-slate-950 rounded-3xl border-2 border-orange-500/40 p-8 text-center space-y-4">
              <div className="text-xs font-mono text-[#FF6600] font-bold uppercase">
                6. LLAMADO A LA ACCIÓN (CALL TO ACTION / CTA)
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                ¿Estás listo para completar la matriz?
              </h3>
              <p className="text-slate-300 text-sm font-semibold max-w-xl mx-auto">
                ¡Descubre tu facultad, intercambia tus repetidas y llena tu escritorio de innovación!
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    sounds.playClick();
                    onGoToPreOrder();
                  }}
                  className="px-6 py-3 bg-[#FF6600] hover:bg-orange-500 text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={15} />
                  <span>🛒 ¡Consigue tu Blind Box aquí!</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setB2bModalOpen(true);
                  }}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-600 flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase size={15} className="text-emerald-400" />
                  <span>📦 Cotizar para Pedidos B2B e Institucionales</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* MODAL: B2B Quotation Generator */}
      {b2bModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-left space-y-5 shadow-2xl relative animate-in zoom-in-95 duration-150">
            
            <button
              onClick={() => {
                sounds.playClick();
                setB2bModalOpen(false);
                setB2bQuoteSent(false);
              }}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
              <Calculator size={16} />
              <span>COTIZADOR INSTITUCIONAL & B2B • SENATI 2026</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white font-['Outfit']">
                Cotización de Pedidos Corporativos
              </h3>
              <p className="text-xs text-slate-400">
                Calcula precios por volumen para Welcome Kits, ceremonias de graduación o regalos a empresas colaboradoras.
              </p>
            </div>

            {!b2bQuoteSent ? (
              <form onSubmit={handleSendB2bQuote} className="space-y-4 text-xs">
                
                {/* Destination use */}
                <div>
                  <label className="text-slate-300 font-bold block mb-1.5">
                    Tipo de Destino / Evento:
                  </label>
                  <select
                    value={b2bType}
                    onChange={(e) => setB2bType(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 text-white rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="welcome-kit">Welcome Kit Nuevos Ingresantes (Formatos Surtidos)</option>
                    <option value="graduation">Souvenir de Graduación para Egresados</option>
                    <option value="corporate-gift">Regalo Protocolar a Empresas Colaboradoras</option>
                    <option value="merchandising">Merchandising Oficial Tienda de Sede</option>
                  </select>
                </div>

                {/* Quantity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-slate-300 font-bold">
                      Cantidad de Unidades:
                    </label>
                    <span className="font-mono text-sm font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">
                      {b2bQuantity} unidades
                    </span>
                  </div>
                  <input
                    type="range"
                    min={25}
                    max={500}
                    step={25}
                    value={b2bQuantity}
                    onChange={(e) => setB2bQuantity(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>25 u. (S/. 49.90 c/u)</span>
                    <span>50 u. (S/. 46.00 c/u)</span>
                    <span>100 u. (S/. 42.50 c/u)</span>
                    <span>250+ u. (S/. 38.00 c/u)</span>
                  </div>
                </div>

                {/* Extras selection */}
                <div className="space-y-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-slate-300 font-bold mb-1">Personalizaciones Institucionales:</div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={b2bEngraving}
                      onChange={(e) => setB2bEngraving(e.target.checked)}
                      className="accent-emerald-500 rounded"
                    />
                    <span className="text-slate-300">Grabado láser de logotipo empresarial en la base (+S/. 4.50 c/u)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={b2bNfcCustom}
                      onChange={(e) => setB2bNfcCustom(e.target.checked)}
                      className="accent-emerald-500 rounded"
                    />
                    <span className="text-slate-300">Programación de Chip NFC hacia URL personalizada de bienvenida (+S/. 3.00 c/u)</span>
                  </label>
                </div>

                {/* Company info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">Empresa / Sede SENATI:</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Minera Las Bambas / Sede Arequipa"
                      value={b2bCompanyName}
                      onChange={(e) => setB2bCompanyName(e.target.value)}
                      className="w-full p-2.5 bg-slate-950 text-white rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">Email de Contacto:</label>
                    <input
                      type="email"
                      required
                      placeholder="contacto@empresa.com"
                      value={b2bContactEmail}
                      onChange={(e) => setB2bContactEmail(e.target.value)}
                      className="w-full p-2.5 bg-slate-950 text-white rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Cost summary */}
                <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/40 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-emerald-300 font-bold">TOTAL ESTIMADO (Incluye IGV):</div>
                    <div className="text-xs text-slate-400">Precio unitario base: S/. {unitPrice.toFixed(2)}</div>
                  </div>
                  <div className="text-2xl font-black text-white font-['Outfit']">
                    S/. {totalB2b.toFixed(2)}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Enviar Solicitud Formal de Cotización</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4 text-center py-6">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-white">¡Cotización Registrada con Éxito!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Hemos generado la propuesta formal para <strong>{b2bCompanyName}</strong> por <strong>{b2bQuantity} unidades (S/. {totalB2b.toFixed(2)})</strong>. Un asesor de la división institucional te enviará la proforma con RUC y condiciones de entrega a <strong>{b2bContactEmail}</strong> en menos de 2 horas hábiles.
                </p>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setB2bModalOpen(false);
                    setB2bQuoteSent(false);
                  }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
