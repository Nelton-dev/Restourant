import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, MessageSquare, ArrowRight, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [orderType, setOrderType] = useState<'takeaway' | 'dine-in' | 'delivery'>('takeaway');
  const [partySize, setPartySize] = useState<number>(2);
  const [date, setDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [time, setTime] = useState<string>('12:30');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '10:00', '11:00', '12:00', '12:30', '13:00', '13:30', '14:00', '15:00', '17:00', '18:00', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const handleCompleteReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CH1-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setStep(3); // Confirmation step
  };

  const getWhatsAppBookingText = () => {
    const text = `Olá Chicken Hut 1! Gostaria de confirmar a minha encomenda/reserva:\n\n` +
      `Código: ${bookingRef}\n` +
      `Tipo: ${orderType === 'takeaway' ? 'Levantamento Takeaway' : orderType === 'delivery' ? 'Entrega ao Domicílio' : 'Mesa no Restaurante'}\n` +
      `Nome: ${fullName}\n` +
      `Telefone: ${phone}\n` +
      `${orderType === 'delivery' ? `Endereço: ${address}\n` : ''}` +
      `Data: ${date}\n` +
      `Horário: ${time}\n` +
      `Notas / Pedido: ${specialRequests || 'Não especificado'}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F0E0C]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#FAF7F2] text-[#121210] max-w-2xl w-full p-6 md:p-8 border border-[#E8E4DD] relative shadow-2xl space-y-6 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8C8881] hover:text-[#121210] transition-colors"
          aria-label="Fechar Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#E8E4DD] pb-4">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E63946] font-bold block">
            CHICKEN HUT 1 • MAPUTO & MATOLA
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold">
            {step === 3 ? 'Pedido / Reserva Registada!' : 'Efetuar Encomenda ou Reserva'}
          </h3>
        </div>

        {/* STEP 1: Modal Options */}
        {step === 1 && (
          <div className="space-y-6">
            {/* Service Type */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#8C8881] font-bold flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4 text-[#E63946]" />
                <span>Modalidade do Pedido</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'takeaway', label: 'Takeaway (Levantamento)', desc: 'Pronto a retirar na loja' },
                  { id: 'delivery', label: 'Entrega Expressa', desc: 'Em Maputo e Matola' },
                  { id: 'dine-in', label: 'Reserva de Mesa', desc: 'Comer no restaurante' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setOrderType(mode.id as any)}
                    className={`p-3 text-left border transition-all ${
                      orderType === mode.id
                        ? 'bg-[#E63946] text-[#FAF7F2] border-[#E63946]'
                        : 'bg-[#FBF9F5] text-[#121210] border-[#E8E4DD] hover:border-[#E63946]'
                    }`}
                  >
                    <span className="text-xs font-bold block">{mode.label}</span>
                    <span className="text-[10px] opacity-80 block">{mode.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dine-in Guests */}
            {orderType === 'dine-in' && (
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-[#8C8881] flex items-center space-x-2">
                  <Users className="w-4 h-4 text-[#121210]" />
                  <span>Número de Pessoas</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPartySize(num)}
                      className={`px-4 py-2 text-xs font-mono font-bold transition-all ${
                        partySize === num
                          ? 'bg-[#121210] text-[#FAF7F2]'
                          : 'bg-[#FBF9F5] text-[#121210] border border-[#E8E4DD] hover:border-[#121210]'
                      }`}
                    >
                      {num} {num === 1 ? 'Pessoa' : 'Pessoas'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-[#8C8881] flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#121210]" />
                  <span>Data</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-3 text-xs font-mono text-[#121210] focus:outline-none focus:border-[#E63946]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-[#8C8881] flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#121210]" />
                  <span>Horário Pretendido</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-3 text-xs font-mono text-[#121210] focus:outline-none focus:border-[#E63946]"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} h
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-4 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D62828] transition-colors flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Próximo: Dados de Contacto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Contact Info */}
        {step === 2 && (
          <form onSubmit={handleCompleteReservation} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#8C8881]">Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Carlos Matsinhe"
                  className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-3 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#8C8881]">Contacto WhatsApp / Telefone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+258 84 000 0000"
                  className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-3 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
                />
              </div>

              {orderType === 'delivery' && (
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-mono uppercase text-[#8C8881]">Endereço Completo de Entrega em Maputo/Matola *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Bairro, Rua, Nº de casa ou Ponto de Referência"
                    className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-3 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-[#8C8881]">
                Detalhes do Pedido / Observações (Opcional)
              </label>
              <textarea
                rows={3}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Ex: 1 Combo Família (Frango Inteiro Piripiri), com Batatas Fritas e Sumo de Laranja..."
                className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-3 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
              />
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3.5 border border-[#E8E4DD] text-xs font-bold uppercase tracking-widest text-[#8C8881] hover:text-[#121210]"
              >
                Voltar
              </button>

              <button
                type="submit"
                className="flex-1 py-3.5 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D62828] transition-colors"
              >
                Confirmar e Gerar Pedido
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div className="space-y-5 py-2">
            <div className="text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto animate-bounce" />
              <h4 className="font-serif text-2xl font-bold">Pedido Gerado com Sucesso!</h4>
              <p className="text-xs text-[#8C8881]">
                Clique no botão abaixo para enviar o resumo diretamente para o WhatsApp do restaurante.
              </p>
            </div>

            <div className="bg-[#121210] text-[#FAF7F2] p-5 border border-[#2C2A27] space-y-2.5 font-mono text-xs">
              <div className="flex justify-between border-b border-[#2C2A27] pb-2 text-[#E63946]">
                <span>CÓDIGO DO PEDIDO:</span>
                <span className="font-bold text-[#FAF7F2]">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8881]">NOME:</span>
                <span>{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8881]">MODALIDADE:</span>
                <span className="uppercase text-[#E63946] font-bold">{orderType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8881]">DATA & HORÁRIO:</span>
                <span>{date} às {time} h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${getWhatsAppBookingText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-[#20bd5a]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar para WhatsApp do Chicken Hut 1</span>
              </a>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#121210] text-[#FAF7F2] text-xs font-bold tracking-widest uppercase hover:bg-[#2C2A27]"
              >
                Concluir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
