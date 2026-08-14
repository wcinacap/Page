import React, { useState } from 'react';
import { Smartphone, Radio, QrCode, ShieldCheck, Sparkles, CheckCircle2, RefreshCw, Cpu, Layers } from 'lucide-react';
import arNfcImg from '../assets/images/ar_nfc_tech_showcase_1786718999727.jpg';
import heroFigureImg from '../assets/images/grupo_8_modelo_gemini.png';
import { sounds } from '../utils/audioEffects';

export const NfcArExperience: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(true);
  const [activeTab, setActiveTab] = useState<'hologram' | 'certificate' | 'passport'>('hologram');

  const handleSimulateScan = () => {
    setIsScanning(true);
    sounds.playNfcBeep();

    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
      sounds.playUnboxReveal(false);
    }, 800);
  };

  return (
    <section id="tecnologia" className="py-20 bg-gradient-to-b from-slate-900 via-[#05113B] to-slate-900 text-white relative overflow-hidden">
      {/* Laser scanline and glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#00D2FF_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full">
            <Radio size={14} className="animate-pulse" />
            Transmedia & Realidad Aumentada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] tracking-tight">
            Tecnología NFC & <span className="text-cyan-400">AR Holográfico</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Cada figura física de la serie "Control" incorpora un microchip NFC de 13.56 MHz imperceptible en la base. Acerca tu smartphone para acceder a la dimensión digital.
          </p>
        </div>

        {/* Two Columns: Phone Simulator + Tech Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Phone Simulator */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Phone Bezel */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-700 ring-1 ring-cyan-500/40">
              
              {/* Camera Notch / Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-900/60 border border-cyan-400/50" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="bg-slate-900 rounded-[34px] overflow-hidden min-h-[580px] flex flex-col justify-between p-4 relative border border-slate-800">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 px-2 z-20">
                  <span className="font-bold">12:00</span>
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono">
                    <Radio size={12} className="animate-pulse" />
                    <span>NFC ACTIVO</span>
                  </div>
                </div>

                {/* Scan Simulator Banner */}
                {isScanning && (
                  <div className="absolute inset-0 bg-cyan-950/90 z-40 flex flex-col items-center justify-center space-y-3 animate-in fade-in duration-150">
                    <Radio size={48} className="text-cyan-400 animate-ping" />
                    <div className="text-sm font-bold text-white">Leyendo chip NTAG213...</div>
                    <div className="text-xs text-cyan-300 font-mono">Desplegando Ficha Holográfica</div>
                  </div>
                )}

                {/* Active Phone Content */}
                {hasScanned && (
                  <div className="space-y-3 pt-6 pb-2 text-left z-10 flex-1 flex flex-col justify-between">
                    
                    {/* Brand Banner in App */}
                    <div className="flex items-center justify-between bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                      <div>
                        <div className="text-[10px] font-black text-cyan-400 uppercase">SENATI AR VISOR</div>
                        <div className="text-xs font-bold text-white">Control #SEN-01-2026</div>
                      </div>
                      <span className="px-2 py-0.5 text-[9px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded">
                        AUTÉNTICO
                      </span>
                    </div>

                    {/* Tabs inside phone */}
                    <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[10px] font-bold">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setActiveTab('hologram');
                        }}
                        className={`flex-1 py-1.5 rounded-lg transition-all ${
                          activeTab === 'hologram' ? 'bg-[#0A39E6] text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Holograma 3D
                      </button>
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setActiveTab('certificate');
                        }}
                        className={`flex-1 py-1.5 rounded-lg transition-all ${
                          activeTab === 'certificate' ? 'bg-[#0A39E6] text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Certificado
                      </button>
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setActiveTab('passport');
                        }}
                        className={`flex-1 py-1.5 rounded-lg transition-all ${
                          activeTab === 'passport' ? 'bg-[#0A39E6] text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Carrera SENATI
                      </button>
                    </div>

                    {/* Tab: Hologram */}
                    {activeTab === 'hologram' && (
                      <div className="relative bg-slate-950/80 rounded-2xl p-3 border border-cyan-500/30 text-center flex-1 flex flex-col items-center justify-center overflow-hidden">
                        {/* Scanning grid line */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,210,255,0.15)_50%,transparent_100%)] h-12 w-full animate-scanline pointer-events-none" />
                        
                        <img
                          src={heroFigureImg}
                          alt="Holograma 3D"
                          className="h-44 mx-auto object-contain filter drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]"
                        />
                        <div className="mt-2 text-[10px] text-cyan-300 font-mono">
                          ▲ 3D Real-time Telemetry Engine OK
                        </div>
                      </div>
                    )}

                    {/* Tab: Certificate */}
                    {activeTab === 'certificate' && (
                      <div className="bg-slate-950/90 rounded-2xl p-4 border border-amber-400/40 text-left space-y-2 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                          <ShieldCheck size={16} />
                          <span>Certificado Digital Oficial</span>
                        </div>
                        <div className="text-[11px] text-slate-300 font-mono space-y-1">
                          <div><strong>SERIE:</strong> CT-2026-MSLA-0842</div>
                          <div><strong>PRODUCCIÓN:</strong> Lote 01 (Lima, Perú)</div>
                          <div><strong>COMPOSICIÓN:</strong> Resina MSLA 70/30</div>
                          <div><strong>REGISTRO:</strong> Blockchain SENATI</div>
                        </div>
                        <div className="p-2 bg-slate-900 rounded-lg text-[9px] text-slate-400 flex items-center gap-2">
                          <QrCode size={24} className="text-white shrink-0" />
                          <span>Firma criptográfica verificada por el Centro de Tecnologías SENATI.</span>
                        </div>
                      </div>
                    )}

                    {/* Tab: Passport */}
                    {activeTab === 'passport' && (
                      <div className="bg-slate-950/90 rounded-2xl p-3.5 border border-blue-500/40 space-y-2 flex-1 flex flex-col justify-center text-xs">
                        <div className="font-bold text-[#FF6600]">Mecatrónica Industrial</div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          La carrera insignia que integra sistemas mecánicos, electrónicos y de software en plantas automatizadas.
                        </p>
                        <div className="text-[10px] text-cyan-400 font-semibold">
                          Desbloquea simuladores de circuitos y becas en el campus virtual.
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* Bottom Interactive Trigger Bar */}
                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={handleSimulateScan}
                    disabled={isScanning}
                    className="w-full py-2.5 px-3 bg-gradient-to-r from-[#0A39E6] to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-98 cursor-pointer"
                  >
                    <Radio size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                    <span>Aproximar Teléfono a la Base NFC</span>
                  </button>
                </div>

              </div>

            </div>

            <p className="text-xs text-slate-400 mt-4 text-center">
              * Compatible nativamente con iOS (iPhone 7+) y todos los teléfonos Android con NFC sin descargar apps adicionales.
            </p>

          </div>

          {/* Right Column: Key Transmedia Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
                Fusión de Patrimonio Técnico y Neo-Artesanía Digital
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A diferencia de los juguetes tradicionales de plástico inyectado, cada figura de SENATI es una <strong>escultura interactiva de escritorio</strong> que funciona como un portal transmedia de valor cultural e institucional.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 hover:border-cyan-500/60 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Radio size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Chip NFC NTAG213 Encapsulado</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Integrado en la base monolítica durante el proceso de manufactura, totalmente invisible y resistente a la humedad y el polvo.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 hover:border-[#FF6600]/60 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF6600] flex items-center justify-center shrink-0">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Visualizador 3D en WebAR</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Despliega el modelo 3D con despiece de piezas, radiografía interna de componentes y animaciones de trabajo técnico en tu propia mesa.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 hover:border-[#0A39E6]/60 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A39E6]/30 text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Certificado Digital Anticopia</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Garantiza que tu figura pertenece a la tirada oficial limitada de SENATI con número de serie único y fecha de curado UV.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
