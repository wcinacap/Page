import React, { useState } from 'react';
import { BUNDLE_OPTIONS, BundleOption } from '../data/products';
import { X, Trash2, Plus, Minus, ShieldCheck, QrCode, CheckCircle2, Truck, ArrowRight, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audioEffects';
import confetti from 'canvas-confetti';
import { SenatiLogo } from './SenatiLogo';

export interface CartItem {
  bundleId: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (bundleId: string, quantity: number) => void;
  onRemoveItem: (bundleId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [docType, setDocType] = useState<'boleta' | 'factura'>('boleta');
  const [shippingMethod, setShippingMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerDni, setCustomerDni] = useState('');

  if (!isOpen) return null;

  // Calculate totals
  const detailedItems = cartItems.map((item) => {
    const bundle = BUNDLE_OPTIONS.find((b) => b.id === item.bundleId) || BUNDLE_OPTIONS[0];
    return {
      bundle,
      quantity: item.quantity,
      lineTotal: bundle.price * item.quantity,
    };
  });

  const subtotal = detailedItems.reduce((acc, curr) => acc + curr.lineTotal, 0);
  const shippingCost = shippingMethod === 'delivery' ? 12.0 : 0.0;
  const total = subtotal + shippingCost;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playClick();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedId = `SEN-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsProcessing(false);
      setOrderConfirmed(true);
      sounds.playUnboxReveal(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0A39E6', '#FF6600', '#FFFFFF', '#38B000'],
      });
    }, 1200);
  };

  const handleFinish = () => {
    sounds.playClick();
    onClearCart();
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-left">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <SenatiLogo variant="icon-only" theme="blue" height={28} />
              <div>
                <h3 className="text-base font-extrabold text-slate-900 font-['Outfit']">
                  Tu Carrito de Reserva
                </h3>
                <span className="text-[11px] text-slate-500 font-medium">
                  {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} artículos seleccionados
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar">
            
            {orderConfirmed ? (
              /* Confirmation Screen */
              <div className="space-y-5 text-center py-6 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-slate-900 font-['Outfit']">
                    ¡Reserva Confirmada!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Tu pedido de la serie <strong>Control (Blind Box)</strong> ha sido registrado con éxito.
                  </p>
                </div>

                {/* Digital Voucher Card */}
                <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 text-left font-mono text-xs border border-slate-700">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="text-[#FF6600] font-bold">SENATI • VOUCHER DIGITAL</span>
                    <span className="text-slate-400">{orderId}</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    <div><strong>Cliente:</strong> {customerName || 'Wilder Cayllahua'}</div>
                    <div><strong>Doc:</strong> {customerDni || '74829103'} ({docType.toUpperCase()})</div>
                    <div><strong>Entrega:</strong> {shippingMethod === 'pickup' ? 'Recojo en Sede Central SENATI' : 'Olva Courier Domicilio'}</div>
                    <div><strong>Total Pagado:</strong> S/. {total.toFixed(2)}</div>
                  </div>
                  <div className="pt-2 border-t border-slate-700 flex items-center justify-between">
                    <div className="text-[9px] text-slate-400">
                      Presenta este código QR o tu DNI al recoger.
                    </div>
                    <QrCode size={32} className="text-white" />
                  </div>
                </div>

                <button
                  onClick={handleFinish}
                  className="w-full py-3 bg-[#0A39E6] text-white font-extrabold text-xs rounded-xl shadow-md hover:bg-[#072BB0] transition-all cursor-pointer"
                >
                  Entendido, volver a la tienda
                </button>
              </div>
            ) : detailedItems.length === 0 ? (
              /* Empty Cart Screen */
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-blue-50 text-[#0A39E6] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles size={28} />
                </div>
                <h4 className="text-base font-bold text-slate-900">Tu carrito está vacío</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explora nuestras opciones de Blind Box individual, Duo Pack o el Display Box Coleccionista x6.
                </p>
              </div>
            ) : (
              /* Active Items List */
              <>
                <div className="space-y-3">
                  {detailedItems.map(({ bundle, quantity, lineTotal }) => (
                    <div
                      key={bundle.id}
                      className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-3"
                    >
                      <img
                        src={bundle.image}
                        alt={bundle.name}
                        className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-slate-200"
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {bundle.name}
                        </div>
                        <div className="text-[11px] text-[#0A39E6] font-bold">
                          S/. {bundle.price.toFixed(2)}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => {
                              sounds.playClick();
                              onUpdateQuantity(bundle.id, quantity - 1);
                            }}
                            className="p-1 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-slate-800">{quantity}</span>
                          <button
                            onClick={() => {
                              sounds.playClick();
                              onUpdateQuantity(bundle.id, quantity + 1);
                            }}
                            className="p-1 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-slate-900">
                          S/. {lineTotal.toFixed(2)}
                        </div>
                        <button
                          onClick={() => {
                            sounds.playClick();
                            onRemoveItem(bundle.id);
                          }}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors mt-2"
                          title="Eliminar del carrito"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Form fields for checkout */}
                <form onSubmit={handleCheckout} className="space-y-3 pt-2 border-t border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">Datos para la Reserva:</div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Nombres y Apellidos"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                    <input
                      type="text"
                      required
                      placeholder="DNI / RUC"
                      value={customerDni}
                      onChange={(e) => setCustomerDni(e.target.value)}
                      className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Correo Electrónico (para voucher)"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                  />

                  {/* Document & Shipping Toggles */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setDocType('boleta')}
                      className={`p-2 rounded-lg border text-center font-bold ${
                        docType === 'boleta' ? 'bg-[#0A39E6] text-white border-[#0A39E6]' : 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      Boleta de Venta
                    </button>
                    <button
                      type="button"
                      onClick={() => setDocType('factura')}
                      className={`p-2 rounded-lg border text-center font-bold ${
                        docType === 'factura' ? 'bg-[#0A39E6] text-white border-[#0A39E6]' : 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      Factura con RUC
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setShippingMethod('pickup')}
                      className={`p-2 rounded-lg border text-center font-bold flex items-center justify-center gap-1 ${
                        shippingMethod === 'pickup' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      <span>Sede SENATI (Gratis)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShippingMethod('delivery')}
                      className={`p-2 rounded-lg border text-center font-bold flex items-center justify-center gap-1 ${
                        shippingMethod === 'delivery' ? 'bg-[#0A39E6] text-white border-[#0A39E6]' : 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      <Truck size={13} />
                      <span>Olva Courier (+S/.12)</span>
                    </button>
                  </div>

                  {/* Summary Totals */}
                  <div className="p-3 bg-blue-50/60 rounded-xl space-y-1.5 pt-2 border border-blue-100">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal Figuras:</span>
                      <span>S/. {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Costo de Envío:</span>
                      <span>{shippingMethod === 'pickup' ? 'GRATIS' : 'S/. 12.00'}</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-900 border-t border-blue-200/60 pt-1">
                      <span>Total Final:</span>
                      <span className="text-[#0A39E6]">S/. {total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3.5 bg-[#0A39E6] hover:bg-[#072BB0] disabled:opacity-50 text-white font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isProcessing ? (
                      <span>Generando comprobante oficial...</span>
                    ) : (
                      <>
                        <ShieldCheck size={16} />
                        <span>Confirmar Reserva Oficial (S/. {total.toFixed(2)})</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

          </div>

          {/* Footer Security Badges */}
          <div className="p-3 bg-slate-100 text-[10px] text-slate-500 border-t border-slate-200 text-center flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-[#0A39E6]" />
              Pago 100% Seguro
            </span>
            <span>•</span>
            <span>Garantía Oficial SENATI</span>
          </div>

        </div>
      </div>
    </div>
  );
};
