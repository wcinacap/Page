import React from 'react';
import { Users, Sparkles, Briefcase, GraduationCap, Check, ArrowUpRight } from 'lucide-react';
import deskSetupImg from '../assets/images/desk_setup_showcase_1786719076100.jpg';
import { sounds } from '../utils/audioEffects';

interface TargetAudienceProps {
  onSelectBundle: (bundleId: string) => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onSelectBundle }) => {
  const profiles = [
    {
      id: 'alumni',
      icon: GraduationCap,
      badge: 'Orgullo SENATI',
      title: '1. Comunidad Estudiantil y Egresados',
      target: 'Estudiantes de primer ingreso, alumnos activos y graduados',
      motivation: 'Buscan un símbolo identitario en su escritorio de trabajo o estudio. Representa el esfuerzo, la pasión por su facultad y el orgullo de pertenecer a la institución líder del Perú.',
      perks: [
        'Identidad directa con las 5 facultades clave',
        'Estética Art Toy Chibi de alta resolución (35µm)',
        'Caja sorpresa (Blind Box) con factor emoción e intercambio'
      ],
      color: 'border-blue-200 bg-blue-50/60 text-[#0A39E6]',
      bundleTarget: 'display-case',
    },
    {
      id: 'kidult',
      icon: Users,
      badge: '25 – 45 Años',
      title: '2. Kidults y Entusiastas de la Tecnología',
      target: 'Coleccionistas de Art Toys, diseñadores, programadores y makers',
      motivation: 'Valoran la estética geek, la cultura industrial y los objetos de diseño (Desk Objects) de escala compacta (7–8 cm) que elevan sus estaciones de trabajo.',
      perks: [
        'Manufactura DFAM en resina de alta tenacidad (70/30)',
        'Chase Secreto exclusivo con ratio 1/72',
        'Chip NFC con hologramas en Realidad Aumentada'
      ],
      color: 'border-orange-200 bg-orange-50/60 text-[#FF6600]',
      bundleTarget: 'master-case',
    },
    {
      id: 'b2b',
      icon: Briefcase,
      badge: 'Corporativo & B2B',
      title: '3. Mercado B2B y Regalos Institucionales',
      target: 'Empresas industriales colaboradoras, directivos y eventos institucionales',
      motivation: 'Solución perfecta para paquetes de bienvenida (Welcome Kits), eventos corporativos, merchandising oficial y souvenirs de graduación de alto valor percibido.',
      perks: [
        'Grabado láser de logotipo empresarial en la base',
        'Programación de Chip NFC hacia URLs corporativas',
        'Facturación con RUC y condiciones de entrega prioritarias'
      ],
      color: 'border-emerald-200 bg-emerald-50/60 text-emerald-700',
      bundleTarget: 'corporate-b2b',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-orange-100 text-[#FF6600] rounded-full">
            <Sparkles size={14} />
            SEGMENTACIÓN DEL PRODUCTO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-['Outfit'] tracking-tight">
            Diseñado para Cautivar a <span className="text-[#0A39E6]">Tres Mercados Clave</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Una propuesta de valor validada que conecta la emoción del coleccionismo con el prestigio institucional y corporativo.
          </p>
        </div>

        {/* Ambient Desk Setup Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-xl border border-slate-200 group">
          <img
            src={deskSetupImg}
            alt="Control Art Toy en escritorio moderno de trabajo"
            className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white text-left">
            <span className="text-xs font-mono text-cyan-300 font-bold tracking-wider uppercase mb-1">
              • AMBIENT WORKSPACE SHOWCASE •
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-['Outfit']">
              "Una extensión de tu identidad técnica y pasión por el desarrollo."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Las figuras en el escritorio actúan como anclas de motivación, señalización de valores de precisión y pertenencia a la comunidad tecnológica más prestigiosa del país.
            </p>
          </div>
        </div>

        {/* 3 Target Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {profiles.map((prof) => {
            const Icon = prof.icon;
            return (
              <div
                key={prof.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#0A39E6] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${prof.color} border`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {prof.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">
                    {prof.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-700">
                    {prof.target}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {prof.motivation}
                  </p>

                  {/* Perks list */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {prof.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={15} className="text-[#0A39E6] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onSelectBundle(prof.bundleTarget);
                    }}
                    className="w-full flex items-center justify-between text-xs font-extrabold text-[#0A39E6] hover:text-[#FF6600] group cursor-pointer"
                  >
                    <span>Ver Opciones Recomendadas</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
