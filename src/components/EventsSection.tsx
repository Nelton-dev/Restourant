import React, { useState } from 'react';
import { EVENT_PACKAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { EventPackage } from '../types';
import { Users, ArrowRight, CheckCircle2, X, MessageSquare } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventPackage | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '20',
    eventType: 'Catering para Evento',
    notes: '',
  });

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const handleWhatsAppCatering = (pkg: EventPackage) => {
    const text = encodeURIComponent(`Olá Chicken Hut 1! Gostaria de orçamento para catering/encomenda de grupo: *${pkg.title}* (${pkg.capacity}).`);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="py-20 md:py-28 bg-[#121210] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2C2A27] pb-8 gap-6">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase">
              CATERING & ENCOMENDAS DE GRUPO
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              Festas, Aniversários & Empresas
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#8C8881] max-w-md font-light leading-relaxed">
            Leve o sabor irresistível do Chicken Hut 1 para o seu evento em Maputo ou Matola com embalagens térmicas e entregas agendadas.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#181816] border border-[#2C2A27] flex flex-col justify-between p-8 space-y-6 hover:border-[#E63946] transition-all group"
            >
              <div className="space-y-6">
                <div className="aspect-[16/9] overflow-hidden bg-[#0F0E0C]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#E63946] font-bold uppercase">
                    <Users className="w-4 h-4 text-[#E63946]" />
                    <span>{pkg.capacity}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{pkg.title}</h3>
                  <p className="text-xs text-[#8C8881] font-mono uppercase tracking-wider">
                    {pkg.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#E8E4DD]/80 leading-relaxed font-light">
                  {pkg.description}
                </p>

                <ul className="space-y-2 border-t border-[#2C2A27] pt-4 text-xs text-[#8C8881]">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#E63946] rounded-full" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => handleWhatsAppCatering(pkg)}
                  className="flex-1 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direto</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedEvent(pkg);
                    setInquirySubmitted(false);
                    setInquiryForm((prev) => ({ ...prev, eventType: pkg.title }));
                  }}
                  className="flex-1 py-3 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#D62828] transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Pedir Cotação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Private Event Inquiry Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-[#0F0E0C]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#181816] text-[#FAF7F2] max-w-lg w-full p-6 md:p-8 border border-[#2C2A27] relative shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-2 text-[#8C8881] hover:text-[#FAF7F2]"
            >
              <X className="w-6 h-6" />
            </button>

            {inquirySubmitted ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-serif text-2xl font-bold">Pedido de Cotação Recebido!</h3>
                <p className="text-xs text-[#8C8881] max-w-md mx-auto leading-relaxed">
                  Obrigado, {inquiryForm.name}. A equipa do Chicken Hut 1 entrará em contacto via WhatsApp/Telefone brevemente.
                </p>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-8 py-3 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-widest uppercase hover:bg-[#D62828]"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-5">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase font-bold">
                    CHICKEN HUT 1 CATERING
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    Solicitar Cotação para {selectedEvent.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full bg-[#0F0E0C] border border-[#2C2A27] p-2.5 text-xs text-[#FAF7F2] focus:border-[#E63946] outline-none"
                      placeholder="Ex: João Sitoe"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full bg-[#0F0E0C] border border-[#2C2A27] p-2.5 text-xs text-[#FAF7F2] focus:border-[#E63946] outline-none"
                      placeholder="+258 84 000 0000"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase">Data do Evento</label>
                    <input
                      type="date"
                      required
                      value={inquiryForm.date}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, date: e.target.value })}
                      className="w-full bg-[#0F0E0C] border border-[#2C2A27] p-2.5 text-xs text-[#FAF7F2] focus:border-[#E63946] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase">Nº de Pessoas</label>
                    <select
                      value={inquiryForm.guests}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, guests: e.target.value })}
                      className="w-full bg-[#0F0E0C] border border-[#2C2A27] p-2.5 text-xs text-[#FAF7F2] focus:border-[#E63946] outline-none"
                    >
                      <option value="10-20">10 a 20 Pessoas</option>
                      <option value="20-50">20 a 50 Pessoas</option>
                      <option value="50-100">50 a 100 Pessoas</option>
                      <option value="100+">Mais de 100 Pessoas</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-[#8C8881] uppercase">Detalhes da Encomenda</label>
                  <textarea
                    rows={3}
                    value={inquiryForm.notes}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                    className="w-full bg-[#0F0E0C] border border-[#2C2A27] p-2.5 text-xs text-[#FAF7F2] focus:border-[#E63946] outline-none"
                    placeholder="Especifique preferências de picante, acompanhamentos, local de entrega em Maputo/Matola..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#D62828] transition-colors"
                >
                  Enviar Pedido de Cotação
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
