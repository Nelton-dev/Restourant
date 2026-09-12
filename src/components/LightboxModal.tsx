import React from 'react';
import { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/restaurantData';

interface LightboxModalProps {
  selectedImage: GalleryImage | null;
  onClose: () => void;
  onSelectImage: (img: GalleryImage) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  selectedImage,
  onClose,
  onSelectImage,
}) => {
  if (!selectedImage) return null;

  const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    onSelectImage(GALLERY_IMAGES[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_IMAGES.length;
    onSelectImage(GALLERY_IMAGES[nextIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F0E0C]/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-[#FAF7F2] hover:text-[#E63946] z-20"
        aria-label="Close Lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-[#FAF7F2]/80 hover:text-[#FAF7F2] bg-[#0F0E0C]/60 border border-[#2C2A27] z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-[#FAF7F2]/80 hover:text-[#FAF7F2] bg-[#0F0E0C]/60 border border-[#2C2A27] z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Content Container */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
        <div className="relative max-h-[70vh] overflow-hidden border border-[#2C2A27]">
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto object-contain mx-auto"
          />
        </div>

        <div className="text-center space-y-1 text-[#FAF7F2] max-w-xl px-4">
          <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase font-bold">
            {selectedImage.category} • CHICKEN HUT 1 MAPUTO
          </span>
          <h3 className="font-serif text-2xl font-bold">{selectedImage.title}</h3>
          {selectedImage.caption && (
            <p className="text-xs text-[#8C8881] italic font-light">{selectedImage.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
};
