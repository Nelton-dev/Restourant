import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Navigation, MessageSquare, ExternalLink } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // Open 08:00 to 22:00
      setIsOpenNow(hours >= 8 && hours < 22);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FAF7F2] text-[#121210]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8E4DD] pb-8 gap-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
              <span>LOCALIZAÇÃO & HORÁRIO DE FUNCIONAMENTO</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              Visite O Chicken Hut 1
            </h2>
          </div>

          {/* Live Opening Ticker */}
          <div className="inline-flex items-center space-x-3 bg-[#FBF9F5] border border-[#E8E4DD] px-4 py-2 self-start md:self-auto">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'
              }`}
            />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              {isOpenNow ? 'ABERTO AGORA PARA ATENDIMENTO' : 'ABRE HOJE ÀS 08:00'}
            </span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Details Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address */}
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold flex items-center space-x-2">
                <span>Endereço Principal</span>
              </h3>
              <p className="text-xs md:text-sm text-[#2C2A27]/80 leading-relaxed font-normal">
                {RESTAURANT_INFO.address}<br />
                {RESTAURANT_INFO.locationDetail}
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E63946] hover:text-[#D62828] pt-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="space-y-3 border-t border-[#E8E4DD] pt-6">
              <h3 className="font-serif text-2xl font-bold flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#E63946]" />
                <span>Horários de Atendimento</span>
              </h3>
              <div className="space-y-2 text-xs font-mono text-[#2C2A27]">
                <div className="flex justify-between border-b border-dashed border-[#E8E4DD] pb-2">
                  <span className="text-[#8C8881]">RESTAURANTE & TAKEAWAY</span>
                  <span className="font-bold">08:00 – 22:00 (Segunda a Domingo)</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-[#E8E4DD] pb-2">
                  <span className="text-[#8C8881]">ENTREGAS EXPRESSAS</span>
                  <span className="font-bold">09:00 – 21:30 (Maputo e Matola)</span>
                </div>
                <p className="text-[11px] text-[#8C8881] italic font-sans pt-1">
                  *Aceitamos pagamentos em Numerário, M-Pesa, ePOS e Cartões de Débito/Crédito.
                </p>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="space-y-4 border-t border-[#E8E4DD] pt-6">
              <h3 className="font-serif text-2xl font-bold">Contactos para Pedidos</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.formattedPhone}`}
                  className="flex-1 px-4 py-3 bg-[#121210] text-[#FAF7F2] text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-[#2C2A27] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${RESTAURANT_INFO.whatsappPrefill}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Encomendas</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 h-[420px] bg-[#181816] border border-[#E8E4DD] relative overflow-hidden shadow-lg">
            <iframe
              title="Chicken Hut 1 Maputo Location Map"
              src="https://maps.google.com/maps?q=-25.8913791,32.6024017&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />
            <div className="absolute bottom-4 left-4 bg-[#121210]/90 backdrop-blur-md text-[#FAF7F2] px-4 py-2 text-xs font-mono border border-[#E63946]/40">
              CHICKEN HUT 1 • MAPUTO & MATOLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
