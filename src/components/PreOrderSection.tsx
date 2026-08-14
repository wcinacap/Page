import React, { useState } from 'react';
import { BUNDLE_OPTIONS, BundleOption } from '../data/products';
import { ShoppingBag, Check, ShieldCheck, Truck, Sparkles, Tag, Gift, QrCode, FileText } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

interface PreOrderSectionProps {
  onAddToCart: (bundleId: string, quantity?: number) => void;
  onInstantBuy: (bundle: BundleOption) => void;
}

export const PreOrderSection: React.FC<PreOrderSectionProps> = ({ onAddToCart, onInstantBuy }) => {
  const [selectedCampus, setSelectedCampus] = useState('Lima - Sede Central Independencia');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const campuses = [
    'Lima - Sede Central Independencia',
    'Lima - Sede Surquillo',
    'Lima - Sede San Juan de Lurigancho',
    'Lima - Sede Villa El Salvador',
    'Arequipa - Sede Principal',
    'Trujillo - Sede La Libertad',
    'Chiclayo - Sede Lambayeque',
    'Piura - Sede Piura',
    'Huancayo - Sede Junín',
    'Cusco - Sede Wanchaq',
    'Iquitos - Sede Loreto',
    'Envío a Domicilio Nacional (Olva Courier)',
  ];

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playClick();
    if (couponCode.toUpperCase() === 'SENATI2026' || couponCode.toUpperCase() === 'CONTROL') {
      setDiscountApplied(true);
      sounds.playUnboxReveal(false);
    }
  };

  return (
    <section id="preventa" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-[#0A39E6] text-white rounded-full">
            <Tag size={14} className="text-[#FF6600]" />
            Preventa Oficial Exclusiva
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-['Outfit'] tracking-tight">
            Elige Tu <span className="text-[#0A39E6]">Edición "Control"</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Asegura tu figura del primer lote de manufactura aditiva con precios especiales de lanzamiento y recojo gratuito en todas las sedes de SENATI.
          </p>
        </div>

        {/* Promo Banner Strip */}
        <div className="bg-gradient-to-r from-blue-900 via-[#0A39E6] to-blue-900 text-white rounded-2xl p-4 sm:p-5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Gift className="text-[#FF6600]" size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-orange-300 uppercase tracking-wide">
                ¡BENEFICIO DE PREVENTA 2026!
              </div>
              <div className="text-sm font-semibold text-white">
                Usa el cupón <strong className="text-yellow-300 font-mono font-bold bg-white/10 px-2 py-0.5 rounded">SENATI2026</strong> para un 10% adicional.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Código de cupón"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="px-3 py-2 text-xs bg-white text-slate-900 rounded-xl font-bold uppercase focus:outline-none focus:ring-2 focus:ring-[#FF6600] w-full sm:w-36"
            />
            <button
              onClick={handleApplyCoupon}
              className="px-4 py-2 text-xs font-black bg-[#FF6600] hover:bg-orange-500 text-white rounded-xl transition-colors shrink-0 cursor-pointer"
            >
              {discountApplied ? '✓ Aplicado' : 'Aplicar'}
            </button>
          </div>
        </div>

        {/* 4 Pricing / Bundle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch text-left">
          {BUNDLE_OPTIONS.map((bundle) => {
            const finalPrice = discountApplied ? (bundle.price * 0.9).toFixed(2) : bundle.price.toFixed(2);
            return (
              <div
                key={bundle.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  bundle.isPopular
                    ? 'bg-gradient-to-b from-blue-50 via-white to-blue-50/30 border-2 border-[#0A39E6] shadow-xl ring-2 ring-[#0A39E6]/20'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {bundle.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className={`px-3.5 py-1 text-[11px] font-black rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap ${
                        bundle.isPopular
                          ? 'bg-[#FF6600] text-white'
                          : 'bg-slate-800 text-white'
                      }`}
                    >
                      {bundle.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Thumbnail */}
                  <div className="h-44 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-3 group">
                    <img
                      src={bundle.image}
                      alt={bundle.name}
                      className="max-h-36 w-auto object-contain group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-black text-slate-900 font-['Outfit']">
                      {bundle.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {bundle.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-slate-100 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#0A39E6] font-['Outfit']">
                      S/. {finalPrice}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-semibold">
                      S/. {bundle.originalPrice.toFixed(2)}
                    </span>
                    {discountApplied && (
                      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded ml-auto">
                        -10% CUPÓN
                      </span>
                    )}
                  </div>

                  {/* Features checklist */}
                  <div className="space-y-2 text-xs text-slate-700">
                    {bundle.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check size={15} className="text-[#0A39E6] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onInstantBuy(bundle);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs transition-all shadow-sm active:scale-98 cursor-pointer ${
                      bundle.isPopular
                        ? 'bg-[#0A39E6] hover:bg-[#072BB0] text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Comprar Ahora
                  </button>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      onAddToCart(bundle.id);
                    }}
                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag size={14} />
                    <span>Añadir al Carrito</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pickup Campus Selection & Courier Guarantee */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#0A39E6]">
              <Truck size={18} className="text-[#FF6600]" />
              <span>Red de Distribución y Recojo en Campus SENATI</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-lg">
              Selecciona tu sede preferida para recojo presencial gratuito con tu DNI o solicita entrega a domicilio mediante Olva Courier a cualquier punto del Perú.
            </p>
          </div>

          <div className="w-full md:w-72">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Sede de Entrega Seleccionada:
            </label>
            <select
              value={selectedCampus}
              onChange={(e) => setSelectedCampus(e.target.value)}
              className="w-full p-2.5 text-xs font-bold bg-white text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A39E6]"
            >
              {campuses.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </section>
  );
};
