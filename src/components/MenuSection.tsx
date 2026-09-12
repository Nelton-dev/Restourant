import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Search, Flame, ShoppingBag, X, MessageSquare, Plus } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [spiceFilter, setSpiceFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Pratos' },
    { id: 'grilled-chicken', label: 'Frango Grelhado (Peri-Peri)' },
    { id: 'crispy-chicken', label: 'Frango Crocante' },
    { id: 'combos-buckets', label: 'Combos & Baldes Família' },
    { id: 'burgers-wraps', label: 'Burgers, Wraps & Pregos' },
    { id: 'sides-extras', label: 'Acompanhamentos' },
    { id: 'drinks-desserts', label: 'Bebidas & Milkshakes' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.ptName && item.ptName.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSpice =
      spiceFilter === 'all' || item.spiceLevel === spiceFilter;

    return matchesCategory && matchesSearch && matchesSpice;
  });

  const handleWhatsAppOrderItem = (item: MenuItem) => {
    const message = encodeURIComponent(`Olá Chicken Hut 1! Gostaria de encomendar: *${item.name}* (${item.priceMzn} MT). Qual o tempo de entrega para Maputo/Matola?`);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2] text-[#121210]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase">
            SABOR AUTÊNTICO E INGREDIENTES FRESCOS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">
            Cardápio Completo Chicken Hut 1
          </h2>
          <p className="text-xs md:text-sm text-[#8C8881] leading-relaxed">
            Preços expressos em Meticais (MT). Todos os pratos são preparados na hora para garantir máxima frescura e sabor.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FAF7F2] border-y border-[#E8E4DD] py-5 space-y-5">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs tracking-[0.1em] font-bold uppercase whitespace-nowrap px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#E63946] text-[#FAF7F2] shadow-md'
                    : 'bg-[#FBF9F5] text-[#8C8881] hover:text-[#121210] border border-[#E8E4DD]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Spice Filter */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-1">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C8881]" />
              <input
                type="text"
                placeholder="Pesquisar pratos, combos, batatas, bebidas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FBF9F5] pl-9 pr-4 py-2.5 border border-[#E8E4DD] text-xs focus:outline-none focus:border-[#E63946] text-[#121210] placeholder-[#8C8881]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8881]"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Spice Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] text-[#8C8881] font-mono uppercase tracking-wider hidden sm:inline">
                Picante:
              </span>
              {[
                { id: 'all', label: 'Todos' },
                { id: 'Suave', label: 'Suave' },
                { id: 'Médio', label: 'Médio' },
                { id: 'Picante Peri-Peri', label: 'Picante Peri-Peri' },
                { id: 'Crocante Sem Pimenta', label: 'Sem Pimenta' },
              ].map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => setSpiceFilter(chip.id)}
                  className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 border transition-colors ${
                    spiceFilter === chip.id
                      ? 'bg-[#121210] text-[#FAF7F2] border-[#121210]'
                      : 'bg-transparent text-[#8C8881] border-[#E8E4DD] hover:border-[#121210]'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 space-y-3 border border-dashed border-[#E8E4DD]">
            <p className="font-serif text-lg text-[#8C8881]">
              Nenhum prato encontrado com essa pesquisa.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSpiceFilter('all');
              }}
              className="text-xs uppercase font-bold text-[#E63946] underline"
            >
              Mostrar Todos os Pratos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FBF9F5] p-5 border border-[#E8E4DD] hover:border-[#E63946] transition-all flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => setSelectedItem(item)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <h3 className="font-serif text-xl font-bold group-hover:text-[#E63946] transition-colors">
                        {item.name}
                      </h3>
                      {item.ptName && (
                        <span className="text-[11px] text-[#8C8881] font-mono uppercase block">
                          {item.ptName}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-base font-extrabold text-[#E63946] whitespace-nowrap bg-[#E63946]/10 px-3 py-1 border border-[#E63946]/20">
                      {item.priceMzn} MT
                    </span>
                  </div>

                  <p className="text-xs text-[#2C2A27]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#E8E4DD] text-xs">
                  {item.spiceLevel ? (
                    <span className="text-[10px] font-mono text-[#FF6B6B] uppercase font-bold flex items-center space-x-1">
                      <Flame className="w-3 h-3 text-[#E63946]" />
                      <span>{item.spiceLevel}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-[#8C8881] uppercase">CHICKEN HUT 1</span>
                  )}

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppOrderItem(item);
                      }}
                      className="px-3 py-1.5 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 hover:bg-[#20bd5a]"
                      title="Pedir direto no WhatsApp"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenReservation();
                      }}
                      className="px-3 py-1.5 bg-[#121210] text-[#FAF7F2] text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 hover:bg-[#E63946]"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Pedir</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="bg-[#121210] text-[#FAF7F2] p-8 md:p-10 border border-[#2C2A27] text-center space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-[#8C8881]">
            ENTREGAS EXPRESSAS EM MAPUTO, MATOLA, PATRICE LUMUMBA E ZONAS LIMÍTROFES
          </p>
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 bg-[#E63946] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D62828] transition-colors shadow-lg"
          >
            Fazer Encomenda Online Agora
          </button>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-[#121210]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FAF7F2] text-[#121210] max-w-lg w-full p-6 md:p-8 border border-[#E8E4DD] space-y-5 relative shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 text-[#8C8881] hover:text-[#121210]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#121210] border border-[#E8E4DD]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl font-bold">{selectedItem.name}</h3>
                  {selectedItem.ptName && (
                    <span className="text-xs text-[#8C8881] font-mono block">
                      {selectedItem.ptName}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xl font-extrabold text-[#E63946]">
                  {selectedItem.priceMzn} MT
                </span>
              </div>

              <p className="text-xs text-[#2C2A27]/90 leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.servingSize && (
                <div className="bg-[#FBF9F5] p-2.5 border-l-2 border-[#E63946] text-xs font-mono text-[#8C8881]">
                  <strong>Porção:</strong> {selectedItem.servingSize}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DD] gap-2">
              <button
                onClick={() => {
                  handleWhatsAppOrderItem(selectedItem);
                  setSelectedItem(null);
                }}
                className="flex-1 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pedir no WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenReservation();
                }}
                className="flex-1 py-3 bg-[#E63946] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D62828] flex items-center justify-center space-x-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Formulário de Pedido</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
