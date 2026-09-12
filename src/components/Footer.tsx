import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, MapPin, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0E0C] text-[#FAF7F2] pt-16 pb-28 lg:pb-12 border-t border-[#2C2A27]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-[#2C2A27] pb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#E63946] flex items-center justify-center font-black text-white text-base">
                CH1
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.15em] font-bold uppercase text-[#FAF7F2]">
                  CHICKEN HUT 1
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#E63946] uppercase font-bold">
                  Maputo & Matola • Moçambique
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8C8881] leading-relaxed font-light max-w-sm">
              O autêntico frango assado no carvão Peri-Peri e crocante dourado em Maputo. Servimos famílias e empresas com qualidade, frescura e rapidez.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-6 py-2.5 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-widest uppercase hover:bg-[#D62828] transition-colors shadow-md"
              >
                Fazer Pedido / Encomenda
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase font-bold block">
              NAVEGAÇÃO RÁPIDA
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-[#8C8881]">
              <li><a href="#hero" className="hover:text-[#FAF7F2] transition-colors">01 / Início</a></li>
              <li><a href="#story" className="hover:text-[#FAF7F2] transition-colors">02 / Nossa História</a></li>
              <li><a href="#signature" className="hover:text-[#FAF7F2] transition-colors">03 / Especialidades</a></li>
              <li><a href="#menu" className="hover:text-[#FAF7F2] transition-colors">04 / Cardápio & Combos</a></li>
              <li><a href="#gallery" className="hover:text-[#FAF7F2] transition-colors">05 / Galeria</a></li>
              <li><a href="#events" className="hover:text-[#FAF7F2] transition-colors">06 / Catering & Eventos</a></li>
              <li><a href="#location" className="hover:text-[#FAF7F2] transition-colors">07 / Localização & Horários</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase font-bold block">
              LOCALIZAÇÃO & CONTACTOS
            </span>
            <div className="text-xs text-[#8C8881] space-y-2 leading-relaxed">
              <p>{RESTAURANT_INFO.address}</p>
              <p>{RESTAURANT_INFO.locationDetail}</p>
              <p className="text-[#FAF7F2] font-mono pt-1">
                {RESTAURANT_INFO.hours.dinner}
              </p>
              <p className="text-[#FAF7F2] font-mono">
                Telefone: {RESTAURANT_INFO.phone}
              </p>
            </div>
          </div>

          {/* Col 4: Top Action */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 border border-[#2C2A27] text-[#FAF7F2] hover:bg-[#E63946] hover:border-[#E63946] transition-colors flex items-center space-x-2 text-xs uppercase tracking-wider font-mono"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-[#8C8881] gap-4">
          <p>© {new Date().getFullYear()} Chicken Hut 1 Maputo. Todos os direitos reservados.</p>
          <p className="tracking-wider text-[#FAF7F2]">MAPUTO • MATOLA • MOÇAMBIQUE</p>
        </div>
      </div>
    </footer>
  );
};
