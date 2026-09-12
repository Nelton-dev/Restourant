import React from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { ArrowRight, Flame, ShoppingBag, Star } from 'lucide-react';

interface SignatureDishesProps {
  onSelectDish: (dishId: string) => void;
  onOpenReservation: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({
  onSelectDish,
  onOpenReservation,
}) => {
  const featuredDishes = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <section id="signature" className="py-20 md:py-28 bg-[#121210] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2C2A27] pb-8 gap-6">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase flex items-center space-x-2">
              <Flame className="w-4 h-4 text-[#FF6B6B]" />
              <span>OS MAIS PEDIDOS EM MAPUTO & MATOLA</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold">
              Especialidades do Chicken Hut 1
            </h2>
          </div>
          <a
            href="#menu"
            className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-bold uppercase text-[#FF6B6B] hover:text-[#FAF7F2] transition-colors"
          >
            <span>Ver Cardápio Completo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group cursor-pointer flex flex-col space-y-5 bg-[#181816] border border-[#2C2A27] p-6 hover:border-[#E63946] transition-all duration-300"
              onClick={() => onSelectDish(dish.id)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0F0E0C] border border-[#2C2A27]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#E63946] px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider text-[#FAF7F2] shadow-lg">
                  {dish.priceMzn} MT
                </div>
                {dish.spiceLevel && (
                  <div className="absolute top-4 left-4 bg-[#0F0E0C]/90 backdrop-blur-md px-3 py-1 border border-[#E63946]/40 text-[10px] font-mono tracking-wider text-[#FF6B6B] uppercase font-bold flex items-center space-x-1">
                    <Flame className="w-3 h-3 text-[#E63946]" />
                    <span>{dish.spiceLevel}</span>
                  </div>
                )}
                {dish.servingSize && (
                  <div className="absolute bottom-4 left-4 bg-[#0F0E0C]/90 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#D9D2C7] px-3 py-1 border border-[#8C8881]/30">
                    {dish.servingSize}
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold group-hover:text-[#FF6B6B] transition-colors">
                      {dish.name}
                    </h3>
                    {dish.ptName && (
                      <span className="text-xs text-[#8C8881] font-mono uppercase tracking-wider block pt-0.5">
                        {dish.ptName}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#8C8881] leading-relaxed">
                  {dish.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#2C2A27]">
                  <span className="text-[11px] font-mono text-[#25D366] font-semibold flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>Disponível para Takeaway & Delivery</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenReservation();
                    }}
                    className="px-4 py-2 bg-[#E63946] hover:bg-[#D62828] text-white text-[11px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pedir Já</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Action Banner */}
        <div className="bg-[#181816] p-8 md:p-10 border border-[#2C2A27] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl font-bold text-[#FAF7F2]">
              Vai almoçar em família ou encomendar no escritório?
            </h4>
            <p className="text-xs text-[#8C8881]">
              Temos combos familiares, baldes crocantes, burgers de frango, bebidas bem frescas e acompanhamentos tradicionais.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#menu"
              className="px-6 py-3 bg-[#E63946] hover:bg-[#D62828] text-[#FAF7F2] text-xs font-bold tracking-[0.15em] uppercase transition-colors"
            >
              Ver Menu & Preços
            </a>
            <button
              onClick={onOpenReservation}
              className="px-6 py-3 border border-[#8C8881]/40 text-[#FAF7F2] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#FAF7F2] hover:text-[#121210] transition-colors"
            >
              Encomendar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
