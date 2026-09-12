import React from 'react';
import { ArrowDown, ShoppingBag, MapPin, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="hero" className="relative h-screen min-h-[680px] w-full flex items-end pb-16 md:pb-20 overflow-hidden bg-[#0F0E0C]">
      {/* Background Image Container with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.images.hero}
          alt="Frango grelhado no carvão no Chicken Hut 1 em Maputo Moçambique"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
        />
        {/* Editorial Flame Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-[#0F0E0C]/65 to-[#0F0E0C]/30" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-[#FAF7F2]">
        <div className="max-w-3xl space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#FAF7F2] font-semibold bg-[#E63946]/90 backdrop-blur-md px-4 py-1.5 border border-[#FF6B6B]/40 shadow-lg">
            <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{RESTAURANT_INFO.subtitle}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight text-[#FAF7F2]">
            Sabor Que Une <br />
            <span className="italic font-light text-[#FF6B6B]">Maputo & Matola.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-sm md:text-base lg:text-lg text-[#E8E4DD] font-light max-w-xl leading-relaxed">
            O autêntico frango assado no carvão com molho Peri-Peri moçambicano, peito crocante dourado, combos fartos para a família e entrega rápida à sua porta.
          </p>

          {/* Location Badge */}
          <div className="flex items-center space-x-2 text-xs text-[#E63946] font-mono tracking-wider pt-1">
            <MapPin className="w-4 h-4 text-[#E63946]" />
            <span className="text-[#D9D2C7]">{RESTAURANT_INFO.address}</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 bg-[#E63946] hover:bg-[#D62828] text-[#FAF7F2] text-xs tracking-[0.2em] font-extrabold uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 group shadow-2xl"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Fazer Pedido / Takeaway</span>
            </button>

            <a
              href="#menu"
              className="px-8 py-4 bg-[#0F0E0C]/80 backdrop-blur-md border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#FAF7F2] hover:text-[#0F0E0C] transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Ver Cardápio & Combos</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center space-y-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C8881]">Explorar</span>
        <a href="#story" className="text-[#E63946] hover:text-[#FF6B6B] animate-bounce transition-colors" aria-label="Scroll to story">
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
