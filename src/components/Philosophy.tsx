import React from 'react';
import { ArrowRight, Flame, ShieldCheck, HeartHandshake } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Philosophy: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#FAF7F2] text-[#121210] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Intro Statement Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-[#E8E4DD] pb-14">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase">
              NOSSA HISTÓRIA & QUALIDADE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              O Segredo do Frango Mais Saboroso de Maputo e Matola.
            </h2>
          </div>
          <div className="lg:col-span-4 space-y-4 lg:pl-6">
            <p className="text-sm md:text-base text-[#2C2A27]/80 leading-relaxed font-normal">
              No Chicken Hut 1, selecionamos frangos frescos diariamente de produtores locais e marinamos em temperos naturais e o lendário Peri-Peri de Moçambique.
            </p>
            <a
              href="#menu"
              className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-bold uppercase text-[#E63946] hover:text-[#D62828] transition-colors pt-1"
            >
              <span>Explorar Nosso Cardápio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#121210] text-[#FAF7F2] p-8 space-y-5 border border-[#2C2A27] relative group hover:border-[#E63946] transition-all">
            <div className="w-12 h-12 bg-[#E63946]/20 border border-[#E63946]/40 flex items-center justify-center text-[#E63946]">
              <Flame className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase block">
              01 / MARINAÇÃO PERI-PERI
            </span>
            <h3 className="font-serif text-2xl font-bold">Grelhado no Carvão</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              O nosso frango assado é lentamente cozinhado no carvão vegetal, selando o suco natural e cobrindo a pele com o nosso molho exclusivo de piripiri, alho e ervas aromáticas.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#121210] text-[#FAF7F2] p-8 space-y-5 border border-[#2C2A27] relative group hover:border-[#E63946] transition-all">
            <div className="w-12 h-12 bg-[#E63946]/20 border border-[#E63946]/40 flex items-center justify-center text-[#E63946]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase block">
              02 / CROCANTE DOURADO
            </span>
            <h3 className="font-serif text-2xl font-bold">Empanado Perfeito</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              Para quem ama crocância: as nossas peças crocantes, tiras de peito e asinhas de frango recebem uma crosta dourada super estaladiça, sem perder a maciez interior.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#121210] text-[#FAF7F2] p-8 space-y-5 border border-[#2C2A27] relative group hover:border-[#E63946] transition-all">
            <div className="w-12 h-12 bg-[#E63946]/20 border border-[#E63946]/40 flex items-center justify-center text-[#E63946]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase block">
              03 / RAPIDEZ & ENTREGA
            </span>
            <h3 className="font-serif text-2xl font-bold">Atendimento Quente</h3>
            <p className="text-xs text-[#8C8881] leading-relaxed">
              Seja para comer na loja, levar para casa (takeaway) ou encomendar por entrega em Maputo e Matola, garantimos que a sua refeição chega rápida, quente e deliciosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
