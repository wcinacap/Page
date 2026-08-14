import React, { useState } from 'react';
import { FIGURES_DATA, FigureItem } from '../data/products';
import { Sparkles, Eye, Magnet, Cpu, ChevronRight, ShieldCheck, X, Activity, Award } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

interface CollectionShowcaseProps {
  onSelectFigureToBuy: (figure: FigureItem) => void;
}

export const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({ onSelectFigureToBuy }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('Todas');
  const [activeModalFigure, setActiveModalFigure] = useState<FigureItem | null>(null);

  const faculties = [
    'Todas',
    'Mecatrónica',
    'Tecnologías TI',
    'Electrotecnia',
    'Metalmecánica',
    'Automotriz',
    'Chase Secreto',
  ];

  const filteredFigures = FIGURES_DATA.filter((fig) => {
    if (selectedFaculty === 'Todas') return true;
    if (selectedFaculty === 'Chase Secreto') return fig.rarity === 'Secreto Chase';
    return fig.faculty.toLowerCase().includes(selectedFaculty.toLowerCase()) || fig.career.toLowerCase().includes(selectedFaculty.toLowerCase());
  });

  const handleOpenModal = (fig: FigureItem) => {
    sounds.playClick();
    setActiveModalFigure(fig);
  };

  const handleCloseModal = () => {
    sounds.playClick();
    setActiveModalFigure(null);
  };

  return (
    <section id="coleccion" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-blue-100 text-[#0A39E6] rounded-full">
            <Award size={14} className="text-[#FF6600]" />
            Línea Oficial 2026
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-['Outfit'] tracking-tight">
            El Modelo Central <span className="text-[#0A39E6]">"CONTROL (Blind Box)"</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Un único modelo escultórico icónico con 5 variantes cromáticas especializadas por carrera técnica de SENATI y la codiciada edición especial <em>Chase Dorada (1/72)</em>. Mismo chasis de alta precisión, diferentes configuraciones de color y herramientas modulares.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
          {faculties.map((fac) => (
            <button
              key={fac}
              onClick={() => {
                sounds.playClick();
                setSelectedFaculty(fac);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedFaculty === fac
                  ? 'bg-[#0A39E6] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {fac}
            </button>
          ))}
        </div>

        {/* Figures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredFigures.map((figure) => {
            const isSecret = figure.rarity === 'Secreto Chase';
            return (
              <div
                key={figure.id}
                className={`group relative bg-white rounded-3xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between ${
                  isSecret
                    ? 'border-amber-400/80 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 shadow-md ring-1 ring-amber-400/40'
                    : 'border-slate-200 hover:border-[#0A39E6]/60'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-extrabold text-slate-400">
                    {figure.code}
                  </span>
                  <span
                    className={`px-3 py-0.5 text-[11px] font-black rounded-full uppercase tracking-wider ${
                      isSecret
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : figure.rarity === 'Épico'
                        ? 'bg-[#0A39E6] text-white'
                        : figure.rarity === 'Raro'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    {figure.rarity} ({figure.dropRate})
                  </span>
                </div>

                {/* Figure Image with soft hover zoom */}
                <div className="relative py-4 my-2 flex items-center justify-center min-h-[240px] bg-slate-50/60 rounded-2xl overflow-hidden group-hover:bg-blue-50/40 transition-colors">
                  <img
                    src={figure.image}
                    alt={figure.name}
                    className="max-h-[220px] w-auto object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-lg"
                  />
                  {/* Quick inspect overlay button */}
                  <button
                    onClick={() => handleOpenModal(figure)}
                    className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px]"
                  >
                    <Eye size={18} />
                    <span>Ver Ficha Técnica 3D</span>
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-2 text-left pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF6600]">
                    {figure.faculty}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">
                    {figure.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    {figure.title}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {figure.description}
                  </p>
                </div>

                {/* Features Mini Tags */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1" title="Accesorios Magnéticos">
                      <Magnet size={13} className="text-[#FF6600]" />
                      <span>{figure.modularAccessories.length} Accesorios</span>
                    </span>
                    <span className="flex items-center gap-1" title="Chip NFC en Base">
                      <Cpu size={13} className="text-[#0A39E6]" />
                      <span>NFC AR</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenModal(figure)}
                    className="p-2 text-slate-400 hover:text-[#0A39E6] hover:bg-blue-50 rounded-lg transition-colors"
                    aria-label={`Ver detalles de ${figure.name}`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Dialog */}
      {activeModalFigure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar border border-slate-200 shadow-2xl p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Figure Preview Column */}
              <div className="md:col-span-5 bg-gradient-to-b from-slate-100 to-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200">
                <img
                  src={activeModalFigure.image}
                  alt={activeModalFigure.name}
                  className="max-h-[300px] w-auto object-contain drop-shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 text-xs font-black bg-[#0A39E6] text-white rounded-full uppercase tracking-wider">
                    {activeModalFigure.code} • {activeModalFigure.rarity}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">
                    Probabilidad: {activeModalFigure.dropRate}
                  </div>
                </div>
              </div>

              {/* Technical Lore & Specs Column */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">
                    {activeModalFigure.faculty}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
                    {activeModalFigure.name}
                  </h3>
                  <div className="text-sm font-bold text-[#0A39E6]">
                    {activeModalFigure.title}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeModalFigure.description}
                </p>

                {/* Modular Accessories */}
                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A39E6]">
                    <Magnet size={14} className="text-[#FF6600]" />
                    <span>Accesorios Magnéticos Modulares (Neodimio N52):</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                    {activeModalFigure.modularAccessories.map((acc, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A39E6]" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-semibold">DIMENSIÓN / PESO</span>
                    <span className="font-bold text-slate-800">{activeModalFigure.specs.height} • {activeModalFigure.specs.weight}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-semibold">CHIP NFC INTEGRADO</span>
                    <span className="font-bold text-[#0A39E6]">NTAG213 Hologram</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 col-span-2">
                    <span className="text-[10px] text-slate-400 block font-semibold">FORMULACIÓN DE RESINA</span>
                    <span className="font-bold text-slate-800">{activeModalFigure.specs.material}</span>
                  </div>
                </div>

                {/* Stats Radar Progress */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1">
                      <Activity size={13} className="text-[#0A39E6]" />
                      Nivel de Precisión Técnica
                    </span>
                    <span>{activeModalFigure.stats.precision}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0A39E6] rounded-full"
                      style={{ width: `${activeModalFigure.stats.precision}%` }}
                    />
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex items-center gap-3">
                  <a
                    href="#preventa"
                    onClick={() => {
                      handleCloseModal();
                      onSelectFigureToBuy(activeModalFigure);
                    }}
                    className="w-full py-3 px-4 bg-[#0A39E6] hover:bg-[#072BB0] text-white text-center font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-98"
                  >
                    Obtener en Display Set Coleccionista
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
