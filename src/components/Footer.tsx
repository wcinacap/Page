import React from 'react';
import { SenatiLogo } from './SenatiLogo';
import { Mail, MapPin, Phone, ShieldCheck, Award, Heart, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 text-left relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A39E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Institutional Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SenatiLogo variant="horizontal" theme="white" height={36} />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong>Control (Blind Box)</strong> es la iniciativa de neo-artesanía digital y manufactura aditiva que transforma la identidad técnica de SENATI en piezas de colección de alta ingeniería.
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-slate-300 pt-2 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0A39E6] border border-white/40 inline-block" />
                <span>Color Institucional: <strong className="text-white">Azul SENATI RGB (10, 57, 230)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF6600] inline-block" />
                <span>Acento: <strong className="text-white">Naranja Industrial (#FF6600)</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Carreras & Colección (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FF6600] font-['Outfit']">
              Ediciones del Modelo "Control"
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#coleccion" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Control • Edición Prime</a></li>
              <li><a href="#coleccion" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Control • Edición Byte-Bot TI</a></li>
              <li><a href="#coleccion" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Control • Edición Volt-Master</a></li>
              <li><a href="#coleccion" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Control • Edición Torq-Apex</a></li>
              <li><a href="#coleccion" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Control • Edición Mech-Drive</a></li>
              <li><a href="#coleccion" onClick={() => sounds.playClick()} className="hover:text-amber-400 text-amber-400/90 font-semibold transition-colors">Control • Edición Chase SENATrón (1/72)</a></li>
            </ul>
          </div>

          {/* Col 3: Tecnologías & DFAM (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0A39E6] font-['Outfit']">
              Innovación & B2B
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#pitch-comercial" onClick={() => sounds.playClick()} className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">Pitch de Producto (B2B)</a></li>
              <li><a href="#manifiesto" onClick={() => sounds.playClick()} className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">El Amuleto (10 Propuestas)</a></li>
              <li><a href="#ingenieria" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Manufactura MSLA 35µm</a></li>
              <li><a href="#ingenieria" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Blend Resina 70/30</a></li>
              <li><a href="#tecnologia" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Microchip NFC NTAG213</a></li>
              <li><a href="#tecnologia" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Realidad Aumentada WebAR</a></li>
              <li><a href="#simulador" onClick={() => sounds.playClick()} className="hover:text-white transition-colors">Simulador Blind Box 3D</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto Institucional (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 font-['Outfit']">
              Contacto
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-[#0A39E6] shrink-0 mt-0.5" />
                <a href="mailto:wilder.cayllahua.senatinacap@gmail.com" className="hover:text-white break-all">
                  wilder.cayllahua.senatinacap@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#FF6600] shrink-0 mt-0.5" />
                <span>Sede Central: Av. Alfredo Mendiola 3520, Independencia, Lima.</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
                <Award size={14} />
                <span>SENATI Perú Oficial</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Servicio Nacional de Adiestramiento en Trabajo Industrial (SENATI).</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Hecho con precisión para la comunidad técnica del Perú</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
