import React, { useState } from 'react';
import { REVIEWS_DATA, FAQ_DATA } from '../data/products';
import { Star, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, MessageSquare, ThumbsUp } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const CommunityReviews: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [likedReviews, setLikedReviews] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    sounds.playClick();
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleLike = (reviewId: string) => {
    sounds.playClick();
    setLikedReviews((prev) =>
      prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]
    );
  };

  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-blue-100 text-[#0A39E6] rounded-full">
            <Star size={14} className="text-[#FF6600] fill-[#FF6600]" />
            Comunidad SENATI & Coleccionistas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-['Outfit'] tracking-tight">
            Opiniones de la <span className="text-[#0A39E6]">Comunidad Técnica</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Descubre lo que estudiantes, ingenieros y entusiastas del Art Toy dicen sobre la serie <strong>Control (Blind Box)</strong>.
          </p>
        </div>

        {/* Rating Summary Scorecard */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-5xl font-black text-slate-900 font-['Outfit']">4.9</div>
              <div className="flex items-center gap-1 text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-500 font-semibold">482 Evaluaciones</div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 w-48 sm:w-56 border-l border-slate-200 pl-6">
              <div className="flex items-center gap-2">
                <span>5★</span>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[94%]" />
                </div>
                <span className="text-[10px] text-slate-400">94%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>4★</span>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[5%]" />
                </div>
                <span className="text-[10px] text-slate-400">5%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>3★</span>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[1%]" />
                </div>
                <span className="text-[10px] text-slate-400">1%</span>
              </div>
            </div>
          </div>

          <div className="text-right space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
              <ShieldCheck size={14} />
              <span>100% Compradores Verificados SENATI</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Control de calidad certificado bajo norma ISO 9001
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
          {REVIEWS_DATA.map((rev) => {
            const isLiked = likedReviews.includes(rev.id);
            return (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Rating Stars & Unboxed Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-blue-50 text-[#0A39E6] rounded border border-blue-100">
                      Abrió: {rev.unboxed}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <span>{rev.author}</span>
                        <ShieldCheck size={13} className="text-[#0A39E6]" />
                      </div>
                      <div className="text-[10px] text-slate-500">{rev.role}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleLike(rev.id)}
                    className={`p-2 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                      isLiked ? 'text-[#0A39E6] bg-blue-50' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <ThumbsUp size={14} className={isLiked ? 'fill-[#0A39E6]' : ''} />
                    <span className="text-[11px] font-bold">{isLiked ? 13 : 12}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0A39E6] uppercase tracking-wider">
              <HelpCircle size={15} />
              <span>Preguntas Frecuentes</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
              Todo lo que necesitas saber sobre "Control (Blind Box)"
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 hover:text-[#0A39E6] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#0A39E6] shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
