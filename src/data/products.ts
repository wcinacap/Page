// Data for Control (Blind Box) figures and products

import heroFigureImg from '../assets/images/grupo_8_modelo_gemini.png';
import tiFigureImg from '../assets/images/figure_cyber_ti_1786718797949.jpg';
import electroFigureImg from '../assets/images/figure_electrotecnia_1786718815689.jpg';
import mechFigureImg from '../assets/images/figure_metalmecanica_1786718862210.jpg';
import autoFigureImg from '../assets/images/figure_automotriz_1786719020184.jpg';
import secretFigureImg from '../assets/images/figure_secret_chase_1786719035154.jpg';
import boxPackagingImg from '../assets/images/blind_box_packaging_1786718780286.jpg';
import arNfcImg from '../assets/images/ar_nfc_tech_showcase_1786718999727.jpg';
import deskSetupImg from '../assets/images/desk_setup_showcase_1786719076100.jpg';
import heroShowcaseImg from '../assets/images/hero_showcase_1786718833822.jpg';

export interface FigureItem {
  id: string;
  code: string;
  name: string;
  title: string;
  career: string;
  faculty: string;
  rarity: 'Común' | 'Raro' | 'Épico' | 'Legendario' | 'Secreto Chase';
  dropRate: string;
  colorHex: string;
  tagline: string;
  description: string;
  specialTrait: string;
  modularAccessories: string[];
  specs: {
    height: string;
    weight: string;
    material: string;
    nfcTech: string;
    articulation: string;
    editionLimit: string;
  };
  image: string;
  lore: string;
  stats: {
    precision: number;
    innovacion: number;
    resistencia: number;
    potencia: number;
  };
}

export const FIGURES_DATA: FigureItem[] = [
  {
    id: 'control-leader',
    code: 'SEN-01',
    name: 'Control • Edición Prime',
    title: 'El Guardián del Engranaje',
    career: 'Mecatrónica Industrial & Gestión Técnica',
    faculty: 'Facultad de Electrotecnia & Mecatrónica',
    rarity: 'Épico',
    dropRate: '15%',
    colorHex: '#0A39E6',
    tagline: 'El modelo Control insignia con acabado en Azul Institucional SENATI y visor HUD de precisión.',
    description: 'La figura insignia de la colección "Control (Blind Box)". Diseñado con proporciones chibi y estética Art Toy contemporánea de escritorio, viste el uniforme técnico con el emblemático hexágono SENATI en el pecho, casco de seguridad con franjas de alta visibilidad, gafas de protección transparentes y tablet táctica de telemetría.',
    specialTrait: 'Torso con compartimento magnético para intercambiar herramientas y chip NFC de conexión instantánea.',
    modularAccessories: [
      'Martillo de Impacto Táctico',
      'Tablet de Diagnóstico y Telemetría',
      'Casco Modular con Gafas Naranjas UV',
      'Portaherramientas de Cinturón con Llave'
    ],
    specs: {
      height: '8.5 cm',
      weight: '115 g',
      material: 'Resina MSLA Tough/ABS-like (70/30) con base de concreto mineral',
      nfcTech: 'NTAG213 con certificado criptográfico SENATI AR',
      articulation: 'Cuello con encastre esférico imantado de 360°',
      editionLimit: '1,500 unidades numeradas'
    },
    image: heroFigureImg,
    lore: 'Nacido en los laboratorios de innovación avanzada, el modelo Control lidera los escuadrones técnicos que mantienen en marcha las industrias del futuro.',
    stats: {
      precision: 95,
      innovacion: 92,
      resistencia: 90,
      potencia: 88,
    }
  },
  {
    id: 'byte-bot-ti',
    code: 'SEN-02',
    name: 'Control • Edición Byte-Bot TI',
    title: 'Mascota del Código y la Ciberseguridad',
    career: 'Tecnologías de la Información & IA',
    faculty: 'Escuela de Tecnologías de la Información',
    rarity: 'Raro',
    dropRate: '20%',
    colorHex: '#00D2FF',
    tagline: 'El modelo Control en colorway Cyan Neón y circuitos integrados para desarrolladores y sysadmins.',
    description: 'Variante de color y accesorios del modelo Control. Cuenta con un visor HUD translúcido que simula terminales de datos en tiempo real, chaqueta cibernética azul institucional con detalles de circuitos impresos luminiscentes y tablet cuántica.',
    specialTrait: 'Pantalla frontal con micro-grabados holográficos y visor de Realidad Aumentada intercambiable.',
    modularAccessories: [
      'Tablet Cuántica con Encriptación',
      'Visor HUD Holo-Display',
      'Módulo Mochila Servidor Compacto',
      'Antena de Frecuencia Satelital'
    ],
    specs: {
      height: '8.2 cm',
      weight: '108 g',
      material: 'Resina fotopolímera MSLA de alta definición',
      nfcTech: 'NTAG213 con acceso a repositorio de proyectos GitHub/SENATI',
      articulation: 'Brazos articulados con imanes de neodimio de 3mm',
      editionLimit: '2,000 unidades numeradas'
    },
    image: tiFigureImg,
    lore: 'El modelo Control configurado para optimizar algoritmos y proteger la infraestructura digital nacional de SENATI.',
    stats: {
      precision: 98,
      innovacion: 99,
      resistencia: 78,
      potencia: 85,
    }
  },
  {
    id: 'volt-master',
    code: 'SEN-03',
    name: 'Control • Edición Volt-Master',
    title: 'El Ingeniero del Flujo Eléctrico',
    career: 'Electrotecnia & Automatización',
    faculty: 'Escuela de Electrotecnia',
    rarity: 'Común',
    dropRate: '25%',
    colorHex: '#FFA800',
    tagline: 'El modelo Control con acentos amarillo eléctrico y guantes dieléctricos reforzados.',
    description: 'Variante cromática del modelo Control equipada con chaleco de alta visibilidad, multímetro de sonda de precisión y placa de control lógico programable. Su postura firme y estilizada irradia seguridad.',
    specialTrait: 'Sondas de prueba con puntas metálicas doradas y conectores de clic rápido.',
    modularAccessories: [
      'Multímetro Digital con Pantalla LED',
      'Placa PCB Microcontrolador',
      'Juego de Cables Dieléctricos con Puntas',
      'Lentes de Seguridad Fotocromáticos'
    ],
    specs: {
      height: '8.4 cm',
      weight: '112 g',
      material: 'Resina híbrida con acabado satinado anti-arañazos',
      nfcTech: 'NTAG213 con simulador de circuitos en Realidad Aumentada',
      articulation: 'Muñecas y cintura giratorias',
      editionLimit: '2,500 unidades'
    },
    image: electroFigureImg,
    lore: 'El modelo Control calibrado para detectar fallas invisibles y restablecer la energía en sistemas industriales.',
    stats: {
      precision: 94,
      innovacion: 86,
      resistencia: 91,
      potencia: 96,
    }
  },
  {
    id: 'torq-apex',
    code: 'SEN-04',
    name: 'Control • Edición Torq-Apex',
    title: 'El Maestro de la Metalmecánica',
    career: 'Mecánica de Mantenimiento & Soldadura',
    faculty: 'Escuela de Metalmecánica',
    rarity: 'Común',
    dropRate: '25%',
    colorHex: '#E63946',
    tagline: 'El modelo Control en tono rojo industrial y engranaje kinetic giratorio de precisión.',
    description: 'Variante del modelo Control que viste un mameluco industrial clásico con refuerzos ergonómicos, gafas de soldador en la frente, llave de torque de alta precisión y un engranaje planetario que gira suavemente.',
    specialTrait: 'Engranaje de mano con mecanismo kinetic giratorio anti-estrés funcional.',
    modularAccessories: [
      'Engranaje Planetario Kinetic Giratorio',
      'Llave Dinamométrica Cromada',
      'Antorcha TIG de Micro-Soldadura',
      'Careta Facial Abatible'
    ],
    specs: {
      height: '8.6 cm',
      weight: '120 g',
      material: 'Resina resistente cargada con polvo metálico en base',
      nfcTech: 'NTAG213 con visualizador 3D CAD de piezas mecánicas',
      articulation: 'Brazos con tolerancia de encastre de 0.18 mm',
      editionLimit: '2,500 unidades'
    },
    image: mechFigureImg,
    lore: 'Heredero de la tradición manufacturera más exigente, el modelo Control forja las piezas de la industria pesada.',
    stats: {
      precision: 90,
      innovacion: 84,
      resistencia: 99,
      potencia: 94,
    }
  },
  {
    id: 'mech-drive',
    code: 'SEN-05',
    name: 'Control • Edición Mech-Drive',
    title: 'El As de la Mecatrónica Automotriz',
    career: 'Mecatrónica Automotriz & Vehículos Eléctricos',
    faculty: 'Escuela de Mecánica Automotriz',
    rarity: 'Raro',
    dropRate: '18%',
    colorHex: '#38B000',
    tagline: 'El modelo Control en colorway Verde Racing con escáner OBD magnético.',
    description: 'Variante de color motorsport del modelo Control. Viste traje de piloto/mecánico aerodinámico, botas con refuerzo de fibra de carbono y un escáner OBD inalámbrico que se acopla magnéticamente.',
    specialTrait: 'Escáner vehicular magnético que se acopla a la palma de la figura.',
    modularAccessories: [
      'Escáner OBD-III con Conectividad WiFi',
      'Pistola de Impacto Neumática Rápida',
      'Gorra Técnica SENATI Motorsport',
      'Manómetro de Presión'
    ],
    specs: {
      height: '8.3 cm',
      weight: '110 g',
      material: 'Resina MSLA con pintura automotriz bicapa curada UV',
      nfcTech: 'NTAG213 con banco de pruebas de motor virtual en AR',
      articulation: 'Cabezal giratorio y herramientas magnéticas',
      editionLimit: '2,000 unidades'
    },
    image: autoFigureImg,
    lore: 'El modelo Control enfocado en la afinación de motores híbridos y bólidos eléctricos.',
    stats: {
      precision: 93,
      innovacion: 91,
      resistencia: 89,
      potencia: 95,
    }
  },
  {
    id: 'senatron-prime-secret',
    code: 'SEN-SEC',
    name: 'Control • Edición Secreta SENATrón (1/72)',
    title: 'El Mecha Ancestral Cyber-Inca (1/72)',
    career: 'Neo-Artesanía Digital & Manufactura Aditiva DFAM',
    faculty: 'Centro de Excelencia Tecnológica SENATI',
    rarity: 'Secreto Chase',
    dropRate: '1/72 (1.38%)',
    colorHex: '#D4AF37',
    tagline: 'La versión Chase dorada ultra-rara del modelo Control. Oculta en 1 de cada 72 cajas.',
    description: 'La joya secreta de la serie. El modelo Control elevado a su máxima expresión con armadura dorada nacarada, grabados en relieve geométrico precolombino y el engranaje SENATI en acabado oro mate y cromo cobalto.',
    specialTrait: 'Núcleo de energía fotoluminiscente (brilla en la oscuridad) y chip NFC con certificado de coleccionista VIP.',
    modularAccessories: [
      'Núcleo de Fusión Lumínico Traslúcido',
      'Propulsor Dorsal con Silueta de Engranaje',
      'Base Monolítica de Lujo con Placa de Oro',
      'Certificado Físico Holográfico de Edición Limitada'
    ],
    specs: {
      height: '9.2 cm',
      weight: '145 g',
      material: 'Resina transparente fotopolímera premium con partículas nacaradas',
      nfcTech: 'NTAG213 exclusivo con acceso a pase VIP en eventos SENATI',
      articulation: 'Encastres reforzados con imanes de neodimio N52',
      editionLimit: 'Solo 300 unidades mundiales'
    },
    image: secretFigureImg,
    lore: 'Una leyenda forjada en la intersección de la historia ancestral y la robótica de vanguardia.',
    stats: {
      precision: 100,
      innovacion: 100,
      resistencia: 98,
      potencia: 100,
    }
  }
];

export interface BundleOption {
  id: string;
  name: string;
  subtitle: string;
  boxesCount: number;
  price: number;
  originalPrice: number;
  badge?: string;
  isPopular?: boolean;
  chaseGuarantee?: boolean;
  features: string[];
  idealFor: string;
  image: string;
}

export const BUNDLE_OPTIONS: BundleOption[] = [
  {
    id: 'single-box',
    name: 'Blind Box Individual',
    subtitle: '1 Caja Sorpresa Sellada',
    boxesCount: 1,
    price: 49.90,
    originalPrice: 59.90,
    badge: '¡Prueba tu Suerte!',
    features: [
      '1 Figura coleccionable al azar (Sellada)',
      '1 Accesorio modular magnético sorpresa',
      'Base con Chip NFC y Experiencia AR',
      'Tarjeta de Coleccionista con Ficha Técnica',
      'Probabilidad estándar de figura Secreta (1/72)'
    ],
    idealFor: 'Estudiantes, regalo individual o inicio de colección.',
    image: boxPackagingImg,
  },
  {
    id: 'duo-pack',
    name: 'Duo Pack Técnico',
    subtitle: '2 Cajas Sorpresa con Envío Reducido',
    boxesCount: 2,
    price: 89.90,
    originalPrice: 119.80,
    badge: '15% Descuento',
    isPopular: false,
    features: [
      '2 Figuras coleccionables sin repetir garantizadas',
      '2 Sets de accesorios intercambiables',
      'Doble chip NFC y certificados digitales',
      'Sticker pack holográfico de SENATI de regalo',
      'Ideal para compartir con tu compañero de taller'
    ],
    idealFor: 'Amigos, compañeros de estudio o coleccionistas duales.',
    image: heroShowcaseImg,
  },
  {
    id: 'display-case',
    name: 'Display Box Coleccionista (Set x6)',
    subtitle: 'Caja Display Maestra Completa',
    boxesCount: 6,
    price: 249.00,
    originalPrice: 329.00,
    badge: 'MÁS VENDIDO - SET COMPLETO',
    isPopular: true,
    chaseGuarantee: true,
    features: [
      '6 Cajas selladas en caja expositora oficial',
      '¡Garantía de Cero Repetidos de las 5 figuras base!',
      'Alta probabilidad de obtener la figura Secreta SENATrón',
      'Base soporte display de escritorio para 6 figuras incluida',
      'Envío GRATIS a todas las sedes SENATI a nivel nacional',
      'Certificado de Coleccionista Maestro numerado'
    ],
    idealFor: 'Coleccionistas exigentes, graduados SENATI y amantes del Art Toy.',
    image: deskSetupImg,
  },
  {
    id: 'corporate-b2b',
    name: 'Pack Institucional B2B (Set x24)',
    subtitle: 'Para Empresas, Alianzas y Graduaciones',
    boxesCount: 24,
    price: 899.00,
    originalPrice: 1200.00,
    badge: 'Corporativo & Regalos',
    features: [
      '24 Figuras con estuche de lujo personalizado',
      'Placa metálica grabada con logo de tu empresa o promoción',
      'Facturación electrónica con RUC inmediata',
      'Experiencia AR personalizada con mensaje de felicitación',
      'Atención personalizada con ejecutivo SENATI'
    ],
    idealFor: 'Empresas patrocinadoras, ferias tecnológicas y regalos de fin de año.',
    image: arNfcImg,
  }
];

export const TECHNICAL_DFAM_SPECS = [
  {
    icon: 'Layers',
    title: 'Manufactura Aditiva MSLA / SLA',
    description: 'Impresión 3D en resina con resolución de capa de 35 micras. Superficies lisas libres del efecto escalera convencional.',
    metric: '35 µm',
    submetric: 'Resolución de Capa'
  },
  {
    icon: 'Shield',
    title: 'Fórmula Híbrida 70/30 Tough/Flexible',
    description: 'Mezcla formulada con 70% resina estándar de alta definición y 30% resina flexible tipo ABS para absorber caídas accidentales de escritorio.',
    metric: '70 / 30',
    submetric: 'Blend Anti-Impacto'
  },
  {
    icon: 'Magnet',
    title: 'Encastres con Imanes de Neodimio N52',
    description: 'Tolerancias macho-hembra calibradas a 0.18 mm para encastre perfecto y accesorios modulares intercambiables sin desgaste.',
    metric: '0.18 mm',
    submetric: 'Tolerancia Mecánica'
  },
  {
    icon: 'Radio',
    title: 'Transmedia NFC + Realidad Aumentada',
    description: 'Microchip NFC NTAG213 encapsulado en la base. Acercando cualquier smartphone se despliega el modelo 3D y pasaporte digital.',
    metric: '13.56 MHz',
    submetric: 'Chip NFC Integrado'
  }
];

export const REVIEWS_DATA = [
  {
    id: 'rev-1',
    author: 'Ing. Carlos Mendoza',
    role: 'Egresado Mecatrónica (Sede Independencia)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Hace 3 días',
    comment: '¡La calidad del acabado es increíble! El nivel de detalle en el casco y la tablet parece de una figura importada de 100 dólares. Lo tengo en mi oficina y todos mis colegas me preguntan dónde lo compré.',
    verifiedPurchase: true,
    unboxed: 'Control Prime (Épico)'
  },
  {
    id: 'rev-2',
    author: 'Luciana Valdivia',
    role: 'Estudiante de Ciberseguridad & TI',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Pedí la Display Box de 6 y me salió el Byte-Bot 4.0 junto con el SENATrón Prime secreto. La función de escanear la base con NFC y ver el modelo en Realidad Aumentada con el teléfono es simplemente genial.',
    verifiedPurchase: true,
    unboxed: 'SENATrón Prime (Chase Secret)'
  },
  {
    id: 'rev-3',
    author: 'Marco Antonio Quispe',
    role: 'Coleccionista de Art Toys & Diseñador',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Una propuesta impecable de neo-artesanía digital. SENATI logró fusionar la identidad de la formación técnica con la cultura Pop Mart y Kidult contemporánea. 100% recomendado.',
    verifiedPurchase: true,
    unboxed: 'Torq-Apex (Metalmecánica)'
  }
];

export const FAQ_DATA = [
  {
    question: '¿Qué es una "Blind Box" o Caja Sorpresa?',
    answer: 'Una Blind Box es un empaque sellado donde el contenido es un misterio hasta que lo abres. En la serie "Control", cada caja contiene una de las 5 figuras oficiales de las carreras de SENATI o, con algo de suerte, la ultra-rara figura secreta "SENATrón Prime" (ratio 1 en 72 cajas).'
  },
  {
    question: '¿Si compro el Display Set de 6 cajas recibiré figuras repetidas?',
    answer: '¡No! El Display Box Maestro de 6 cajas garantiza que recibirás las 5 figuras base sin repetir. Además, en los sets afortunados, una de las figuras base es reemplazada por la exclusiva figura Secreta Chase SENATrón Prime.'
  },
  {
    question: '¿Cómo funciona la tecnología NFC y Realidad Aumentada (AR)?',
    answer: 'Cada figura cuenta con un microchip NFC imperceptible en su base circular. Al acercar cualquier smartphone compatible con NFC (iPhone o Android), se abrirá automáticamente el visor de Realidad Aumentada donde podrás ver el modelo 3D animado, su ficha técnica y el certificado de autenticidad único con número de serie.'
  },
  {
    question: '¿Hacen envíos a todas las provincias y sedes de SENATI en el Perú?',
    answer: 'Sí, realizamos envíos a todo el Perú mediante Olva Courier o recojo gratuito en cualquiera de las más de 80 sedes de SENATI a nivel nacional (Lima, Arequipa, Trujillo, Chiclayo, Piura, Cusco, Huancayo, Iquitos, etc.). Los envíos demoran entre 24 y 72 horas hábiles.'
  },
  {
    question: '¿Emite Boleta o Factura electrónica con RUC?',
    answer: 'Sí, durante el proceso de compra puedes elegir entre Boleta de Venta o Factura Electrónica ingresando la Razón Social y RUC de tu empresa o institución.'
  }
];
