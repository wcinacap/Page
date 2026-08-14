import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { FIGURES_DATA, FigureItem } from '../data/products';
import { Sparkles, Trophy, RotateCcw, Box, CheckCircle2, QrCode, Smartphone, Volume2, Shield } from 'lucide-react';
import { sounds } from '../utils/audioEffects';
import boxPackagingImg from '../assets/images/blind_box_packaging_1786718780286.jpg';

interface BlindBoxSimulatorProps {
  unlockedFigures: string[];
  onUnlockFigure: (id: string) => void;
  onAddToCart: (bundleId: string) => void;
}

export const BlindBoxSimulator: React.FC<BlindBoxSimulatorProps> = ({
  unlockedFigures,
  onUnlockFigure,
  onAddToCart,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [openedFigure, setOpenedFigure] = useState<FigureItem | null>(null);
  const [openCount, setOpenCount] = useState(0);
  const [showRarityTable, setShowRarityTable] = useState(false);
  const [simulatedBoxType, setSimulatedBoxType] = useState<'single' | 'six'>('single');
  const [multiResults, setMultiResults] = useState<FigureItem[]>([]);

  // Probability weighted random selector
  const drawRandomFigure = (): FigureItem => {
    const rand = Math.random() * 100;

    // 1.38% Secret Chase
    if (rand < 1.38) {
      return FIGURES_DATA.find((f) => f.id === 'senatron-prime-secret') || FIGURES_DATA[0];
    }
    // 15% Epic (Control Prime)
    if (rand < 1.38 + 15) {
      return FIGURES_DATA.find((f) => f.id === 'control-leader') || FIGURES_DATA[0];
    }
    // 18% Rare (Mech-Drive)
    if (rand < 1.38 + 15 + 18) {
      return FIGURES_DATA.find((f) => f.id === 'mech-drive') || FIGURES_DATA[4];
    }
    // 20% Rare (Byte-Bot)
    if (rand < 1.38 + 15 + 18 + 20) {
      return FIGURES_DATA.find((f) => f.id === 'byte-bot-ti') || FIGURES_DATA[1];
    }
    // Remaining ~45.6% split between common (Volt-Master & Torq-Apex)
    if (rand < 75) {
      return FIGURES_DATA.find((f) => f.id === 'volt-master') || FIGURES_DATA[2];
    }
    return FIGURES_DATA.find((f) => f.id === 'torq-apex') || FIGURES_DATA[3];
  };

  const handleOpenSingle = () => {
    if (isOpening) return;
    setIsOpening(true);
    setOpenedFigure(null);
    setMultiResults([]);

    sounds.playBoxShake();
    setTimeout(() => sounds.playBoxShake(), 300);
    setTimeout(() => sounds.playBoxShake(), 600);

    setTimeout(() => {
      const winner = drawRandomFigure();
      setOpenedFigure(winner);
      setIsOpening(false);
      setOpenCount((prev) => prev + 1);
      onUnlockFigure(winner.id);

      const isSecret = winner.rarity === 'Secreto Chase';
      sounds.playUnboxReveal(isSecret);

      confetti({
        particleCount: isSecret ? 180 : 90,
        spread: isSecret ? 100 : 70,
        origin: { y: 0.6 },
        colors: isSecret
          ? ['#D4AF37', '#FF6600', '#0A39E6', '#FFFFFF', '#FFD700']
          : ['#0A39E6', '#FF6600', '#38B000', '#FFFFFF'],
      });
    }, 1200);
  };

  const handleOpenDisplayBox = () => {
    if (isOpening) return;
    setIsOpening(true);
    setOpenedFigure(null);
    setMultiResults([]);

    sounds.playBoxShake();

    setTimeout(() => {
      // 6 boxes: 5 base + chance for 1 secret or 1 duplicate
      const results: FigureItem[] = [];
      const baseFigures = FIGURES_DATA.filter((f) => f.id !== 'senatron-prime-secret');
      
      // Check 15% chance to replace one with Secret Chase
      const gotSecret = Math.random() < 0.18;
      
      baseFigures.forEach((fig) => {
        results.push(fig);
        onUnlockFigure(fig.id);
      });

      if (gotSecret) {
        const secret = FIGURES_DATA.find((f) => f.id === 'senatron-prime-secret')!;
        results[results.length - 1] = secret;
        onUnlockFigure(secret.id);
      } else {
        // Add random bonus from base
        const bonus = baseFigures[Math.floor(Math.random() * baseFigures.length)];
        results.push(bonus);
      }

      setMultiResults(results);
      setIsOpening(false);
      setOpenCount((prev) => prev + 6);

      sounds.playUnboxReveal(gotSecret);

      confetti({
        particleCount: gotSecret ? 220 : 120,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#0A39E6', '#FF6600', '#D4AF37', '#38B000'],
      });
    }, 1500);
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'Secreto Chase':
        return 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-md animate-pulse';
      case 'Épico':
        return 'bg-[#0A39E6] text-white font-bold';
      case 'Raro':
        return 'bg-cyan-600 text-white font-bold';
      default:
        return 'bg-slate-700 text-white font-semibold';
    }
  };

  const collectionPercent = Math.round((unlockedFigures.length / FIGURES_DATA.length) * 100);

  return (
    <section id="simulador" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0A39E6]/25 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[400px] h-[400px] bg-[#FF6600]/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-[#0A39E6] text-white rounded-full">
            <Sparkles size={14} className="text-[#FF6600]" />
            Experiencia Interactiva 3D
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] tracking-tight">
            Simulador de Apertura <span className="text-[#FF6600]">Blind Box</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experimenta la emoción del desempaquetado digital. Abre cajas selladas con las probabilidades oficiales de la serie de SENATI y desbloquea tu álbum de coleccionista.
          </p>
        </div>

        {/* Collection Tracker Bar */}
        <div className="bg-slate-800/80 border border-slate-700 p-4 sm:p-5 rounded-2xl mb-10 max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="text-amber-400" size={20} />
              <span className="font-bold text-sm">Tu Álbum de Coleccionista:</span>
              <span className="text-xs text-amber-400 font-extrabold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                {unlockedFigures.length} de {FIGURES_DATA.length} Desbloqueados ({collectionPercent}%)
              </span>
            </div>
            <div className="text-xs text-slate-400">
              Total Cajas Simuladas: <strong className="text-white">{openCount}</strong>
            </div>
          </div>

          {/* Mini thumbnails collection binder */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
            {FIGURES_DATA.map((fig) => {
              const isUnlocked = unlockedFigures.includes(fig.id);
              return (
                <div
                  key={fig.id}
                  className={`p-2 rounded-xl border text-center transition-all ${
                    isUnlocked
                      ? 'bg-slate-700/80 border-[#0A39E6] shadow-sm'
                      : 'bg-slate-800/40 border-slate-700/50 opacity-45 grayscale'
                  }`}
                >
                  <img
                    src={fig.image}
                    alt={fig.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto object-contain mb-1"
                  />
                  <div className="text-[10px] font-bold truncate text-slate-200">{fig.name}</div>
                  <div className="text-[9px] text-slate-400 truncate">{fig.rarity}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Stage: 3D Box / Reveal Card */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 relative min-h-[440px] flex flex-col items-center justify-center text-center shadow-2xl">
            
            {/* Reveal Mode: Single Figure Result */}
            {openedFigure && !isOpening && (
              <div className="w-full space-y-4 animate-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs rounded-full uppercase tracking-wider ${getRarityBadge(openedFigure.rarity)}`}>
                    {openedFigure.rarity} • Ratio {openedFigure.dropRate}
                  </span>
                  <span className="text-xs font-mono text-slate-400">ID: {openedFigure.code}-AR</span>
                </div>

                <div className="relative py-2">
                  <div className="absolute inset-0 bg-radial from-[#0A39E6]/30 via-transparent to-transparent blur-xl pointer-events-none" />
                  <img
                    src={openedFigure.image}
                    alt={openedFigure.name}
                    className="h-56 sm:h-64 mx-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] animate-float-slow"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black font-['Outfit'] text-white">
                    {openedFigure.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF6600]">
                    {openedFigure.title}
                  </p>
                  <p className="text-xs text-slate-300 max-w-md mx-auto line-clamp-2">
                    {openedFigure.description}
                  </p>
                </div>

                {/* NFC Card simulation */}
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700 text-left text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="text-cyan-400" size={18} />
                    <div>
                      <div className="font-bold text-white">Chip NFC NTAG213 Vinculado</div>
                      <div className="text-[10px] text-slate-400">Modelo 3D y Certificado AR Listo para Escanear</div>
                    </div>
                  </div>
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                </div>
              </div>
            )}

            {/* Reveal Mode: Multi 6 Boxes Result */}
            {multiResults.length > 0 && !isOpening && (
              <div className="w-full space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-black bg-emerald-500 text-slate-950 rounded-full">
                    ¡Display Box x6 Desempaquetado!
                  </span>
                  <span className="text-xs text-slate-400">6 Figuras Obtenidas</span>
                </div>

                <div className="grid grid-cols-3 gap-3 py-2">
                  {multiResults.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/80 border border-slate-700 rounded-xl p-2.5 text-center">
                      <img src={item.image} alt={item.name} className="h-20 mx-auto object-contain mb-1" />
                      <div className="text-[11px] font-bold text-white truncate">{item.name}</div>
                      <div className="text-[9px] text-[#FF6600] truncate">{item.rarity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Waiting or Shake Box Stage */}
            {!openedFigure && multiResults.length === 0 && (
              <div className="space-y-4 py-6">
                <div className="relative">
                  {isOpening && (
                    <div className="absolute inset-0 bg-radial from-[#FF6600]/40 to-transparent blur-2xl animate-pulse" />
                  )}
                  <img
                    src={boxPackagingImg}
                    alt="Blind Box Cerrada"
                    className={`h-60 mx-auto object-contain drop-shadow-2xl transition-transform ${
                      isOpening ? 'animate-bounce scale-110 rotate-6' : 'hover:scale-105 duration-300'
                    }`}
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    {isOpening ? '¡Rompiendo el sello de la caja...!' : 'Caja Sorpresa Sellada'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isOpening ? 'Generando figura con algoritmos criptográficos...' : 'Haz clic en el botón inferior para abrir tu Blind Box.'}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Right Controls & Actions */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black font-['Outfit'] text-white">
                Elige tu Modo de Apertura
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prueba abrir una caja individual al azar o abre la caja completa Display x6 con garantía de no repetidos y probabilidad aumentada de Secret Chase.
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                id="btn-open-single-box"
                disabled={isOpening}
                onClick={handleOpenSingle}
                className="w-full flex items-center justify-between p-4 bg-[#0A39E6] hover:bg-[#072BB0] disabled:opacity-50 text-white rounded-2xl font-bold text-sm shadow-lg transition-all active:scale-98 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Box className="text-[#FF6600] group-hover:rotate-12 transition-transform" size={22} />
                  <div className="text-left">
                    <div className="font-extrabold text-base">Abrir 1 Caja Sorpresa</div>
                    <div className="text-[11px] text-blue-200">1 Figura al azar • Ratios oficiales</div>
                  </div>
                </div>
                <span className="text-xs bg-white/20 px-2.5 py-1 rounded-lg font-mono">GRATIS</span>
              </button>

              <button
                id="btn-open-display-six"
                disabled={isOpening}
                onClick={handleOpenDisplayBox}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-600 to-[#FF6600] hover:from-orange-500 hover:to-orange-600 disabled:opacity-50 text-white rounded-2xl font-bold text-sm shadow-lg transition-all active:scale-98 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="text-yellow-200 group-hover:rotate-45 transition-transform" size={22} />
                  <div className="text-left">
                    <div className="font-extrabold text-base">Abrir Display Set x6</div>
                    <div className="text-[11px] text-orange-100">Set Completo • 0 Repetidos Garantizados</div>
                  </div>
                </div>
                <span className="text-xs bg-black/30 px-2.5 py-1 rounded-lg font-mono">SET 6X</span>
              </button>
            </div>

            {/* Drop Rates Table Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowRarityTable(!showRarityTable)}
                className="text-xs text-blue-300 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
              >
                <Shield size={14} />
                <span>{showRarityTable ? 'Ocultar probabilidades oficiales' : 'Ver tabla de probabilidades oficiales'}</span>
              </button>

              {showRarityTable && (
                <div className="mt-3 p-3.5 bg-slate-800/90 border border-slate-700 rounded-xl space-y-2 text-xs animate-in fade-in duration-200">
                  <div className="font-bold text-white border-b border-slate-700 pb-1">
                    Tasas de Probabilidad por Caja:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex justify-between text-slate-300">
                      <span>Común (Volt / Torq):</span>
                      <strong className="text-white">25% c/u</strong>
                    </div>
                    <div className="flex justify-between text-cyan-300">
                      <span>Raro (TI / Auto):</span>
                      <strong className="text-white">18-20%</strong>
                    </div>
                    <div className="flex justify-between text-blue-300">
                      <span>Épico (Control):</span>
                      <strong className="text-white">15%</strong>
                    </div>
                    <div className="flex justify-between text-amber-400 font-bold">
                      <span>SENATrón Secreto:</span>
                      <strong>1/72 (1.38%)</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Conversion CTA */}
            <div className="p-4 bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-800/60 rounded-2xl flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">¿Te encantó tu figura?</div>
                <div className="text-[11px] text-slate-300">Reserva la figura física con envío a tu sede.</div>
              </div>
              <a
                href="#preventa"
                onClick={() => {
                  sounds.playClick();
                  onAddToCart('single-box');
                }}
                className="px-3.5 py-2 text-xs font-black bg-white text-[#0A39E6] hover:bg-slate-100 rounded-xl transition-all shadow-sm shrink-0 whitespace-nowrap"
              >
                Comprar S/. 49.90
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
