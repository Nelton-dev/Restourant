import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

export const AboutHunan: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#121210] text-[#FAF7F2] border-t border-[#2C2A27]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase">
              NOSSA MARCA EM MOÇAMBIQUE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Chicken Hut 1
            </h2>
            <p className="text-xs md:text-sm text-[#8C8881] font-light leading-relaxed">
              {RESTAURANT_INFO.groupDescription}
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${RESTAURANT_INFO.whatsappPrefill}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:bg-[#20bd5a]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#181816] p-8 md:p-10 border border-[#2C2A27] space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="space-y-2">
                <span className="font-mono text-[#E63946] uppercase text-[10px] font-bold">COMPROMISSO</span>
                <h3 className="font-serif text-xl font-bold text-[#FAF7F2]">Carvão & Peri-Peri</h3>
                <p className="text-[#8C8881] leading-relaxed">
                  Tradição moçambicana no preparo do frango assado, valorizando a produção local de piripiri e vegetais frescos.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[#E63946] uppercase text-[10px] font-bold">LOCALIZAÇÃO</span>
                <h3 className="font-serif text-xl font-bold text-[#FAF7F2]">Maputo & Matola</h3>
                <p className="text-[#8C8881] leading-relaxed">
                  Localização central na Rua da Resistência, com expansão de entregas para Matola Sede e Patrice Lumumba.
                </p>
              </div>
            </div>

            <div className="border-t border-[#2C2A27] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#8C8881] font-mono">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
                <span>MAPUTO • MOÇAMBIQUE</span>
              </span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
