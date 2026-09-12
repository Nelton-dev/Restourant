import { MenuItem, GalleryImage, EventPackage } from '../types';

import heroImg from '../assets/images/chicken_hut_hero_1786394340103.jpg';
import comboImg from '../assets/images/chicken_hut_combo_1786394351242.jpg';
import burgerImg from '../assets/images/chicken_hut_burger_1786394361167.jpg';
import storeImg from '../assets/images/chicken_hut_store_1786394371911.jpg';

export const RESTAURANT_INFO = {
  name: 'Chicken Hut 1',
  tagline: 'O Sabor Autêntico do Frango Grelhado e Crocante de Maputo',
  subtitle: 'RESTAURANTE & TAKEAWAY • MAPUTO & MATOLA, MOÇAMBIQUE',
  address: 'Rua da Resistência, Nº 1475 (Próximo à Total Kumbeza / Patrice Lumumba)',
  locationDetail: 'Malhangalene & Matola Sede, Maputo, Moçambique',
  phone: '+258 84 562 9559',
  phoneSecondary: '+258 84 821 4995',
  formattedPhone: '+258845629559',
  whatsappNumber: '258845629559',
  whatsappPrefill: encodeURIComponent('Olá Chicken Hut 1! Gostaria de fazer um pedido para entrega/takeaway em Maputo.'),
  hours: {
    dinner: 'Segunda a Domingo: 08:00 – 22:00 (Aberto todos os dias)',
    delivery: 'Entregas Expressas das 09:00 às 21:30',
  },
  group: 'Chicken Hut Moçambique',
  groupDescription: 'O Chicken Hut 1 é referência em Maputo e Matola para quem busca frango grelhado no carvão com o autêntico molho Peri-Peri moçambicano, frango crocante dourado, combos familiares fartos e rapidez no atendimento.',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/place/CHICKEN+HUT+1/@-25.8913791,32.5303228,10835m/data=!3m1!1e3!4m16!1m8!2m7!1sCHICKEN+HUT+1!3m5!2sTotal+Kumbeza!3s0x1ee69159c44c1171:0xbf1ab175f8af9e12!4m2!1d32.6155036!2d-25.829904!3m6!1s0x1ee690eadf956607:0xc855273c00b0c991!8m2!3d-25.8913791!4d32.6024017',
  images: {
    hero: heroImg,
    combo: comboImg,
    burger: burgerImg,
    store: storeImg,
    grilled: heroImg,
    wings: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1200&q=80',
    fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80',
    drink: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // FRANGO GRELHAR (PERI-PERI)
  {
    id: 'grelhado-1',
    name: 'Frango Inteiro Grelhado Peri-Peri',
    ptName: 'Frango Inteiro no Carvão',
    category: 'grilled-chicken',
    description: 'Frango macio marinado em especiarias locais e assado lentamente no carvão. Servido com molho Peri-Peri à escolha, batata frita estaladiça e salada Coleslaw.',
    priceMzn: 850,
    image: heroImg,
    spiceLevel: 'Picante Peri-Peri',
    dietary: ['mais-vendido', 'recomendado-do-chef', 'halal'],
    featured: true,
    servingSize: 'Ideal para 2 a 3 pessoas'
  },
  {
    id: 'grelhado-2',
    name: 'Meio Frango Grelhado Especial',
    ptName: 'Meio Frango com Acompanhamento',
    category: 'grilled-chicken',
    description: 'Metade de frango grelhado na hora com escolha de molho (Limão & Ervas, Suave ou Extra Picante), acompanhado de batatas fritas ou papas.',
    priceMzn: 480,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Médio',
    dietary: ['mais-vendido', 'halal'],
    featured: true,
    servingSize: '1 Pessoa faminta'
  },
  {
    id: 'grelhado-3',
    name: 'Quarto de Frango (Coxa + Sobrecoxa)',
    ptName: '1/4 Frango Grelhado',
    category: 'grilled-chicken',
    description: 'Suculenta coxa de frango grelhada no carvão regada com nosso famoso molho especial de alho e peri-peri.',
    priceMzn: 280,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Suave',
    dietary: ['halal'],
    featured: false,
    servingSize: 'Refeição Individual'
  },

  // FRANGO CROCANTE
  {
    id: 'crocante-1',
    name: 'Asinhas Crocantes Chicken Hut (10 Unidades)',
    ptName: 'Asinhas Crocantes',
    category: 'crispy-chicken',
    description: 'Asas de frango crocantes empanadas com segredo de ervas da casa, fofas por fora e extremamente suculentas por dentro.',
    priceMzn: 450,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Crocante Sem Pimenta',
    dietary: ['mais-vendido'],
    featured: true,
    servingSize: '10 Peças'
  },
  {
    id: 'crocante-2',
    name: 'Tiras de Peito Crocante (Chicken Tenders - 6 Unidades)',
    ptName: 'Tiras Crocantes',
    category: 'crispy-chicken',
    description: 'Filetes de peito de frango 100% puro empanados, acompanhados de dip especial de maionese de alho ou molho barbecue.',
    priceMzn: 350,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Crocante Sem Pimenta',
    dietary: ['novo'],
    featured: false,
    servingSize: '6 Tiras grandes'
  },

  // COMBOS & BALDES
  {
    id: 'combo-1',
    name: 'Balde Família Hut (8 Peças Crocantes + 2 Batatas Grandes + 1.5L Sumo)',
    ptName: 'Mega Combo Família',
    category: 'combos-buckets',
    description: 'O combo supremo para reuniões familiares e grupos! 8 grandes peças de frango crocante, 2 porções famintos de batata frita e refrigerante de 1.5L.',
    priceMzn: 1250,
    image: comboImg,
    spiceLevel: 'Médio',
    dietary: ['familiar', 'mais-vendido'],
    featured: true,
    servingSize: 'Serve 4 a 5 pessoas'
  },
  {
    id: 'combo-2',
    name: 'Combo Casal (1 Frango Inteiro + Batata Frita XG + 2 Refrigerantes 500ml)',
    ptName: 'Combo Casal Peri-Peri',
    category: 'combos-buckets',
    description: '1 Frango Inteiro Grelhado no Carvão + Porção Extra Grande de Batatas Fritas Douradas + 2 Bebidas bem frescas.',
    priceMzn: 980,
    image: heroImg,
    spiceLevel: 'Picante Peri-Peri',
    dietary: ['mais-vendido'],
    featured: true,
    servingSize: '2 a 3 Pessoas'
  },
  {
    id: 'combo-3',
    name: 'Box Individual Crispy (2 Peças + Batata M + Bebida 350ml)',
    ptName: 'Box Executivo',
    category: 'combos-buckets',
    description: 'Refeição rápida e deliciosa: 2 peças de frango crocante, batatas fritas crocantes e bebida bem gelada.',
    priceMzn: 390,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Suave',
    dietary: ['recomendado-do-chef'],
    featured: false,
    servingSize: 'Individual'
  },

  // BURGERS & WRAPS
  {
    id: 'burger-1',
    name: 'Chicken Hut Royale Burger',
    ptName: 'Hut Royale',
    category: 'burgers-wraps',
    description: 'Suculento hambúrguer de frango empanado crocante, queijo cheddar derretido, alface fresca, tomate e molho especial em pão brioche.',
    priceMzn: 390,
    image: burgerImg,
    spiceLevel: 'Médio',
    dietary: ['mais-vendido'],
    featured: true,
    servingSize: 'Acompanha Batata Frita'
  },
  {
    id: 'burger-2',
    name: 'Wrap de Frango Grelhado Peri-Peri',
    ptName: 'Wrap Peri-Peri',
    category: 'burgers-wraps',
    description: 'Tortilla de trigo tostada recheada com tiras de frango grelhado no carvão, milho doce, alface e maionese temperada com especiarias de Moçambique.',
    priceMzn: 320,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Picante Peri-Peri',
    dietary: ['novo'],
    featured: false,
    servingSize: '1 Wrap recheado'
  },
  {
    id: 'burger-3',
    name: 'Prego de Frango no Pão Tradicional',
    ptName: 'Prego de Frango Moçambicano',
    category: 'burgers-wraps',
    description: 'Bife de peito de frango tenro marinado em alho e louro, servido no pão d’água caseiro com molho piri-piri moinho.',
    priceMzn: 290,
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80',
    spiceLevel: 'Picante Peri-Peri',
    dietary: ['recomendado-do-chef'],
    featured: false,
    servingSize: 'Tradição Local'
  },

  // ACOMPANHAMENTOS & EXTRAS
  {
    id: 'side-1',
    name: 'Batata Frita Palito Crocante (Grande)',
    ptName: 'Batata Frita Grande',
    category: 'sides-extras',
    description: 'Batatas fritas douradas e crocantes, temperadas com sal de ervas ou especiaria Chicken Hut.',
    priceMzn: 150,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'side-2',
    name: 'Papas com Molho de Frango Peri-Peri',
    ptName: 'Papa de Milho com Molho',
    category: 'sides-extras',
    description: 'Tradicional papa de milho moçambicana servida bem quente com rico molho de assado Peri-Peri.',
    priceMzn: 130,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'side-3',
    name: 'Salada Coleslaw Fresca',
    ptName: 'Coleslaw Cremoso',
    category: 'sides-extras',
    description: 'Couve branca, roxa e cenoura ralada fina envoltas em molho cremoso e levemente adocicado.',
    priceMzn: 120,
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },

  // BEBIDAS & SOBREMESAS
  {
    id: 'drink-1',
    name: 'Milkshake Cremoso (Baunilha / Chocolate / Morango)',
    ptName: 'Milkshake Especial',
    category: 'drinks-desserts',
    description: 'Milkshake ultra espesso feito com sorvete artesanal e chantilly.',
    priceMzn: 180,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'drink-2',
    name: 'Refrigerantes Frios (500ml)',
    ptName: 'Coca-Cola / Fanta / Sprite',
    category: 'drinks-desserts',
    description: 'Garrafas de 500ml super geladas para acompanhar o seu frango picante.',
    priceMzn: 80,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'drink-3',
    name: 'Sumo Natural Maracujá / Manga (500ml)',
    ptName: 'Sumo Natural da Época',
    category: 'drinks-desserts',
    description: 'Sumo refrescante de frutas tropicais de Moçambique.',
    priceMzn: 110,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    featured: false,
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    src: heroImg,
    title: 'Frango Inteiro Grelhado no Carvão',
    category: 'food',
    aspectRatio: 'landscape',
    caption: 'O tempero lendário Peri-Peri que conquista Maputo e Matola.'
  },
  {
    id: 'gal-2',
    src: comboImg,
    title: 'Balde Família de Frango Crocante',
    category: 'food',
    aspectRatio: 'square',
    caption: 'Ideal para partilhar com a família e amigos ao fim de semana.'
  },
  {
    id: 'gal-3',
    src: burgerImg,
    title: 'Hut Royale Chicken Burger',
    category: 'food',
    aspectRatio: 'square',
    caption: 'Frango 100% peito crocante no pão brioche com queijo derretido.'
  },
  {
    id: 'gal-4',
    src: storeImg,
    title: 'Restaurante & Balcão Chicken Hut 1',
    category: 'restaurant',
    aspectRatio: 'wide',
    caption: 'Atendimento rápido, ambiente limpo e acolhedor em Maputo.'
  }
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'event-catering',
    title: 'Catering para Eventos & Aniversários',
    subtitle: 'KITS FARTOS PARA FESTAS E EMPRESAS',
    capacity: 'De 10 a 200 Pessoas',
    description: 'Organize a sua festa ou reunião empresarial com o sabor inconfundível do Chicken Hut 1! Preparamos tabuleiros aquecidos de frango grelhado, tiras crocantes, batatas e sumos com entrega no local.',
    image: comboImg,
    features: [
      'Entregas pontuais no local do evento em Maputo e Matola',
      'Combos personalizados com descontos por quantidade',
      'Embalagens térmicas mantendo o frango quente e estaladiço',
      'Opções de molhos suaves, médios e extra piri-piri'
    ]
  },
  {
    id: 'event-takeaway',
    title: 'Encomendas Expressas para Empresas',
    subtitle: 'ALMOÇOS CORPORATIVOS & GRUPOS',
    capacity: 'Sem Limite de Pedidos',
    description: 'Garantia de almoços nutritivos e saborosos para a sua equipa. Faça a encomenda com antecedência pelo WhatsApp ou Telefone.',
    image: heroImg,
    features: [
      'Facturação simplificada para empresas',
      'Menús em caixa individual com bebida e acompanhamento',
      'Atendimento prioritário para encomendas agendadas'
    ]
  }
];
