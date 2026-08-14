import React, { useState } from 'react';
import { Layers, ShieldCheck, Magnet, Compass, Wrench, CheckCircle2, ChevronRight, Ruler, Cpu } from 'lucide-react';
import { TECHNICAL_DFAM_SPECS } from '../data/products';
import heroShowcaseImg from '../assets/images/hero_showcase_1786718833822.jpg';
import { sounds } from '../utils/audioEffects';

export const DfamEngineering: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const dfamSteps = [
    {
      title: '1. Despiece Técnico (Keying)',
      subtitle: 'Encastres Macho-Hembra de Alta Precisión',
      desc: 'La figura no se imprime en un solo bloque. Se despieza en cabeza, extremidades, accesorios modulares y base con tolerancias estrictas de 0.15 mm a 0.20 mm para ensamblaje sin marcas visibles de soporte.',
      specTag: 'Tolerancia: ±0.18 mm',
    },
    {
      title: '2. Ahuecado (Hollowing) & Drenaje',
      subtitle: 'Espesor de Pared Uniforme de 2.2 mm',
      desc: 'Ahuecado interno paramétrico con 2 orificios de drenaje de 3 mm en la base oculta. Previene tensiones térmicas internas, reduce el peso a 115g y elimina el riesgo de micro-grietas por resina atrapada.',
      specTag: 'Pared: 2.0 - 2.5 mm',
    },
    {
      title: '3. Formulación Híbrida 70/30',
      subtitle: 'Resina MSLA Standard + ABS-Like Flexible',
      desc: 'Diseñado específicamente para el ecosistema "Desk Object". La combinación al 30% de resina flexible absorbe el impacto de caídas accidentales de hasta 1.2 metros desde escritorios de trabajo.',
      specTag: 'Blend 70% HD / 30% ABS-Like',
    },
    {
      title: '4. Orientación & Postprocesado UV',
      subtitle: 'Ángulo de Inclinación a 45°',
      desc: 'Impresión orientada a 45° respecto a la plataforma para eliminar el efecto escalera (stepping). Post-curado UV de 405nm con cámara térmica y pintura manual con pigmento azul institucional SENATI (RGB: 10, 57, 230).',
      specTag: 'Curado UV 405nm Bicapa',
    },
  ];

  return (
    <section id="ingenieria" className="py-20 bg-white relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-blue-100 text-[#0A39E6] rounded-full">
            <Layers size={14} className="text-[#FF6600]" />
            Manufactura Aditiva DFAM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-['Outfit'] tracking-tight">
            Ingeniería de Producto & <span className="text-[#0A39E6]">Precisión 3D</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Cada detalle de "Control" ha sido optimizado bajo los estándares de <em>Design for Additive Manufacturing (DFAM)</em> para lograr la máxima durabilidad y fidelidad estética.
          </p>
        </div>

        {/* 4 Tech Cards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TECHNICAL_DFAM_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0A39E6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="text-2xl font-black text-[#0A39E6] font-['Outfit']">
                  {spec.metric}
                </div>
                <div className="text-[11px] font-bold text-[#FF6600] uppercase tracking-wider mb-3">
                  {spec.submetric}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-1">
                  {spec.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive DFAM Workflow Stage */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0A194E] rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Steps Navigation */}
            <div className="lg:col-span-6 space-y-3 text-left">
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                PROTOCOLO DE PRODUCCIÓN SENATI DFAM
              </div>

              {dfamSteps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    sounds.playClick();
                    setActiveStep(idx);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-white/10 border-cyan-400 shadow-md ring-1 ring-cyan-400/50'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-extrabold text-sm sm:text-base text-white">
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#0A39E6] text-white rounded">
                      {step.specTag}
                    </span>
                  </div>
                  {activeStep === idx && (
                    <div className="mt-2 text-xs text-slate-300 leading-relaxed animate-in fade-in duration-200">
                      <p className="font-semibold text-cyan-300 mb-1">{step.subtitle}</p>
                      <p>{step.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Showcase Image & Color Chart */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl group">
                <img
                  src={heroShowcaseImg}
                  alt="Manufactura y Escultura de Escritorio SENATI"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="px-2.5 py-1 text-[10px] font-black bg-[#FF6600] text-white rounded uppercase tracking-wider">
                      Cromatografía Institucional
                    </span>
                    <div className="text-sm font-bold text-white mt-1">
                      Azul SENATI RGB (10, 57, 230) & Naranja Industrial
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Swatch Bar */}
              <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#0A39E6] border border-white/20 shadow-xs" title="Azul SENATI" />
                  <div className="w-6 h-6 rounded-lg bg-[#FF6600] border border-white/20 shadow-xs" title="Naranja Institucional" />
                  <div className="w-6 h-6 rounded-lg bg-white border border-white/20 shadow-xs" title="Blanco Pureza Técnica" />
                  <div className="w-6 h-6 rounded-lg bg-[#051B75] border border-white/20 shadow-xs" title="Navy Profundo" />
                </div>
                <span className="font-mono text-[11px] text-cyan-300">
                  Fórmula #0A39E6 Calibrada
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
