import React, { useState } from 'react';
import { Gift, Flame, CheckCircle2, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const GiftCardsSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [personalMessage, setPersonalMessage] = useState<string>('');
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isPurchased, setIsPurchased] = useState<boolean>(false);

  const amount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPurchased(true);
  };

  return (
    <section id="gift-cards" className="py-20 md:py-28 bg-[#FAF7F2] text-[#121210]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FBF9F5] border border-[#E8E4DD] p-8 md:p-14">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase flex items-center space-x-2">
              <Gift className="w-4 h-4 text-[#E63946]" />
              <span>VOUCHERS & OFERTAS</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ofereça uma Refeição Deliciosa a Quem Mais Gosta.
            </h2>
            <p className="text-xs md:text-sm text-[#2C2A27]/80 leading-relaxed">
              Surpreenda familiares, amigos ou colegas com um vale-refeição Chicken Hut 1. Perfeito para aniversários, celebrações ou gestos de carinho em Maputo e Matola.
            </p>

            {/* Amount Selectors */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-[#8C8881] uppercase block font-semibold">
                Escolha o Valor (Meticais - MT)
              </span>
              <div className="flex flex-wrap gap-3">
                {[500, 1000, 2000].map((val) => (
                  <button
                    key={val}
                    onClick={() => {
                      setSelectedAmount(val);
                      setCustomAmount('');
                    }}
                    className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider transition-all ${
                      selectedAmount === val && !customAmount
                        ? 'bg-[#E63946] text-[#FAF7F2]'
                        : 'bg-[#FAF7F2] text-[#121210] border border-[#E8E4DD] hover:border-[#E63946]'
                    }`}
                  >
                    {val} MT
                  </button>
                ))}
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Outro (MT)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-28 px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E4DD] text-xs font-mono text-[#121210] focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="px-8 py-3.5 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#D62828] transition-colors shadow-lg"
            >
              Criar Voucher Digital
            </button>
          </div>

          {/* Right Card Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-[#121210] text-[#FAF7F2] p-8 border border-[#2C2A27] shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-[#2C2A27] pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#E63946] flex items-center justify-center font-black text-white text-xs">
                    CH1
                  </div>
                  <div>
                    <span className="font-serif text-xl font-bold tracking-wider uppercase block">
                      CHICKEN HUT 1
                    </span>
                    <span className="text-[9px] tracking-[0.2em] text-[#E63946] uppercase font-semibold">
                      Maputo & Matola
                    </span>
                  </div>
                </div>
                <Flame className="w-5 h-5 text-[#E63946]" />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#8C8881] uppercase block">
                  VALE-REFEIÇÃO DIGITAL
                </span>
                <div className="text-4xl font-serif font-extrabold text-[#FAF7F2]">
                  {amount} <span className="text-sm font-mono text-[#E63946]">MT</span>
                </div>
                <p className="text-xs text-[#8C8881] italic">
                  "Válido para consumo no restaurante, takeaway e entregas ao domicílio em Maputo."
                </p>
              </div>

              <div className="border-t border-[#2C2A27] pt-4 flex items-center justify-between text-[10px] font-mono text-[#8C8881]">
                <span>SEM DATA DE EXPIRAÇÃO</span>
                <span>CHICKEN HUT 1 MOÇAMBIQUE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Card Customization Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F0E0C]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FAF7F2] text-[#121210] max-w-lg w-full p-6 md:p-8 border border-[#E8E4DD] relative shadow-2xl space-y-5">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#8C8881] hover:text-[#121210]"
            >
              <X className="w-6 h-6" />
            </button>

            {isPurchased ? (
              <div className="py-6 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-serif text-2xl font-bold">Voucher Gerado com Sucesso!</h3>
                <p className="text-xs text-[#8C8881]">
                  Código do Voucher: <strong className="font-mono text-[#121210]">CH1-{Math.floor(100000 + Math.random() * 900000)}</strong>
                </p>
                <div className="bg-[#121210] text-[#FAF7F2] p-5 text-left space-y-2 text-xs font-mono border border-[#2C2A27]">
                  <p>PARA: {recipientName || 'Pessoa Especial'}</p>
                  <p>DE: {senderName || 'Amigo'}</p>
                  <p>VALOR: {amount} MT</p>
                  {personalMessage && <p className="italic text-[#8C8881]">"{personalMessage}"</p>}
                </div>
                <button
                  onClick={() => {
                    setIsPreviewOpen(false);
                    setIsPurchased(false);
                  }}
                  className="px-8 py-3 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-widest uppercase hover:bg-[#D62828]"
                >
                  Concluir
                </button>
              </div>
            ) : (
              <form onSubmit={handlePurchase} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold">
                  Personalizar Voucher ({amount} MT)
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase block mb-1">
                      Nome do Destinatário
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Mabote"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-2.5 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase block mb-1">
                      O Seu Nome (Remetente)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Sitoe"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-2.5 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#8C8881] uppercase block mb-1">
                      Mensagem Pessoal (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Bom apetite! Aproveita o melhor frango grelhado de Maputo!"
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value)}
                      className="w-full bg-[#FBF9F5] border border-[#E8E4DD] p-2.5 text-xs text-[#121210] focus:outline-none focus:border-[#E63946]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#D62828] transition-colors"
                >
                  Emitir Voucher Digital ({amount} MT)
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
