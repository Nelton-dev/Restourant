import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ShieldCheck, Flame, Utensils, Truck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#121210] text-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Editorial Section Title */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase">
            AMBIENTE & SERVIÇO EM MAPUTO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Venha Pelo Sabor. <br />
            <span className="italic font-light text-[#FF6B6B]">Volte Pela Qualidade.</span>
          </h2>
          <p className="text-xs md:text-sm text-[#8C8881] font-light leading-relaxed">
            No Chicken Hut 1, criámos um espaço acolhedor e higiénico no coração de Maputo, pensado para almoços rápidos em família, convívio com amigos ou takeaway prático.
          </p>
        </div>

        {/* Full Width Visual Feature */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#181816] border border-[#2C2A27] shadow-2xl">
          <img
            src={RESTAURANT_INFO.images.store}
            alt="Ambiente e atendimento do restaurante Chicken Hut 1 em Maputo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121210] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E63946] font-bold">
                CHICKEN HUT 1 • MAPUTO & MATOLA
              </span>
              <p className="font-serif text-lg md:text-2xl text-[#FAF7F2] font-semibold">
                "Qualidade constante, atendimento atencioso e o melhor tempero Peri-Peri de Moçambique."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#2C2A27]">
          <div className="space-y-2 bg-[#181816] p-5 border border-[#2C2A27]">
            <div className="p-2.5 bg-[#E63946]/20 border border-[#E63946]/40 w-fit text-[#E63946]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">Carvão & Grelha Viva</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              O frango é grelhado na hora em brasas incandescentes para garantir a pele estaladiça e carne tenra.
            </p>
          </div>

          <div className="space-y-2 bg-[#181816] p-5 border border-[#2C2A27]">
            <div className="p-2.5 bg-[#E63946]/20 border border-[#E63946]/40 w-fit text-[#E63946]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">Higiene & Frescura</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              Instalações rigorosamente higienizadas e ingredientes selecionados com rigor diário.
            </p>
          </div>

          <div className="space-y-2 bg-[#181816] p-5 border border-[#2C2A27]">
            <div className="p-2.5 bg-[#E63946]/20 border border-[#E63946]/40 w-fit text-[#E63946]">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">Takeaway Prático</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              Embalagens térmicas especiais que conservam a temperatura e a crocância durante o transporte.
            </p>
          </div>

          <div className="space-y-2 bg-[#181816] p-5 border border-[#2C2A27]">
            <div className="p-2.5 bg-[#E63946]/20 border border-[#E63946]/40 w-fit text-[#E63946]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">Entrega Expressa</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              Entregadores dedicados em Maputo e Matola para entregar o seu pedido sem demoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
