import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, MessageSquare, Phone } from 'lucide-react';

interface ReservationSectionProps {
  onOpenReservation: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onOpenReservation,
}) => {
  return (
    <section id="reservation" className="relative py-28 md:py-36 bg-[#0F0E0C] text-[#FAF7F2] overflow-hidden border-t border-[#2C2A27]">
      {/* Dark Flame Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.images.hero}
          alt="Frango assado no carvão Chicken Hut 1 em Maputo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-30 contrast-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-[#0F0E0C]/80 to-[#0F0E0C]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="text-xs tracking-[0.25em] uppercase text-[#E63946] font-bold font-mono">
          CHICKEN HUT 1 • MAPUTO & MATOLA
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-bold leading-tight">
          Fome de Frango Assado ou Crocante?
        </h2>

        <p className="text-xs md:text-sm text-[#D9D2C7] font-light max-w-2xl mx-auto leading-relaxed">
          Faça a sua encomenda agora mesmo para levantamento na loja ou entrega rápida à sua porta em Maputo, Matola e Patrice Lumumba.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-10 py-4 bg-[#E63946] hover:bg-[#D62828] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Encomendar Online</span>
          </button>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${RESTAURANT_INFO.whatsappPrefill}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-[#25D366] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pedir pelo WhatsApp</span>
          </a>
        </div>

        <div className="pt-6 border-t border-[#2C2A27]/80 flex flex-wrap justify-center items-center gap-6 text-xs text-[#8C8881] font-mono">
          <span>{RESTAURANT_INFO.address}</span>
          <span>•</span>
          <a href={`tel:${RESTAURANT_INFO.formattedPhone}`} className="text-[#FAF7F2] hover:text-[#E63946]">
            {RESTAURANT_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
