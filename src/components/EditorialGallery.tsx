import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/restaurantData';
import { GalleryImage } from '../types';
import { Maximize2, Flame } from 'lucide-react';

interface EditorialGalleryProps {
  onOpenLightbox: (image: GalleryImage) => void;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => filter === 'all' || img.category === filter
  );

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF7F2] text-[#121210]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8E4DD] pb-8 gap-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#E63946] font-extrabold uppercase flex items-center space-x-2">
              <Flame className="w-3.5 h-3.5 text-[#E63946]" />
              <span>GALERIA DE FOTOS</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              Imagens do Nosso Frango & Espaço
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'Todas as Fotos' },
              { id: 'food', label: 'Pratos & Combos' },
              { id: 'restaurant', label: 'Restaurante' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-xs tracking-[0.1em] font-bold uppercase px-4 py-2 transition-all ${
                  filter === cat.id
                    ? 'bg-[#E63946] text-[#FAF7F2]'
                    : 'bg-[#FBF9F5] text-[#8C8881] hover:text-[#121210] border border-[#E8E4DD]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(img)}
              className="group relative overflow-hidden bg-[#181816] cursor-pointer border border-[#E8E4DD] hover:border-[#E63946] transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10]">
                <img
                  src={img.src}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FAF7F2]" />

                <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF6B6B] block">
                      {img.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold">{img.title}</h4>
                    {img.caption && (
                      <p className="text-xs text-[#D9D2C7] font-light">
                        {img.caption}
                      </p>
                    )}
                  </div>
                  <div className="p-2 bg-[#E63946] text-[#FAF7F2]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
