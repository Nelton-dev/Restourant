import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, MessageSquare, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Nossa História', href: '#story' },
    { name: 'Especialidades', href: '#signature' },
    { name: 'Menu & Combos', href: '#menu' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Catering & Eventos', href: '#events' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0F0E0C]/95 text-[#FAF7F2] backdrop-blur-md py-3 border-b border-[#2C2A27] shadow-xl'
            : 'bg-gradient-to-b from-[#0F0E0C]/90 via-[#0F0E0C]/50 to-transparent text-[#FAF7F2] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Chicken Hut 1 Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#E63946] flex items-center justify-center font-black text-white text-lg tracking-wider border border-[#FF6B6B]/40 shadow-lg group-hover:scale-105 transition-transform">
              CH1
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-[0.15em] font-extrabold uppercase text-[#FAF7F2] group-hover:text-[#FF6B6B] transition-colors">
                CHICKEN HUT 1
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#E63946] uppercase -mt-1 font-semibold">
                Maputo • Moçambique
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs tracking-[0.15em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#FAF7F2]/80 hover:text-[#FAF7F2] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E63946] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${RESTAURANT_INFO.whatsappPrefill}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold uppercase tracking-wider transition-all border border-[#25D366]/30 rounded-none"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="flex items-center space-x-2 px-5 py-2.5 bg-[#E63946] hover:bg-[#D62828] text-[#FAF7F2] text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300 shadow-lg rounded-none"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Fazer Pedido / Reserva</span>
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenReservation}
              className="px-3.5 py-2 bg-[#E63946] text-[#FAF7F2] text-[11px] font-bold tracking-wider uppercase hover:bg-[#D62828] transition-colors flex items-center space-x-1"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Pedir</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FAF7F2] hover:text-[#E63946] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Viewport Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F0E0C] text-[#FAF7F2] flex flex-col justify-between p-6 md:p-10 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#2C2A27] pb-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#E63946] flex items-center justify-center font-black text-white text-base">
                CH1
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.15em] uppercase font-bold">
                  CHICKEN HUT 1
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#E63946] uppercase font-semibold">
                  Maputo & Matola
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#FAF7F2] hover:text-[#E63946]"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col space-y-5 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl md:text-3xl text-[#FAF7F2]/90 hover:text-[#E63946] tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="border-t border-[#2C2A27] pt-6 space-y-4">
            <div className="flex items-center justify-between text-xs tracking-widest text-[#8C8881] uppercase">
              <span>Linha Direta de Entregas</span>
              <a href={`tel:${RESTAURANT_INFO.formattedPhone}`} className="text-[#FAF7F2] font-mono">
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 bg-[#E63946] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D62828] transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Fazer Pedido / Encomenda</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
