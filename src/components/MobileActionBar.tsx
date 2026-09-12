import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, MessageSquare, Phone } from 'lucide-react';

interface MobileActionBarProps {
  onOpenReservation: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0F0E0C]/95 backdrop-blur-md border-t border-[#2C2A27] p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenReservation}
          className="py-2.5 bg-[#E63946] text-[#FAF7F2] text-[11px] font-extrabold tracking-wider uppercase flex items-center justify-center space-x-1.5 active:bg-[#D62828]"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Pedir</span>
        </button>

        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${RESTAURANT_INFO.whatsappPrefill}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 bg-[#25D366] text-white text-[11px] font-extrabold tracking-wider uppercase flex items-center justify-center space-x-1.5 active:bg-[#20bd5a]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${RESTAURANT_INFO.formattedPhone}`}
          className="py-2.5 bg-[#181816] text-[#FAF7F2] border border-[#2C2A27] text-[11px] font-extrabold tracking-wider uppercase flex items-center justify-center space-x-1.5 active:bg-[#2C2A27]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Ligar</span>
        </a>
      </div>
    </div>
  );
};
