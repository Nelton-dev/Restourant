import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { Experience } from './components/Experience';
import { EditorialGallery } from './components/EditorialGallery';
import { EventsSection } from './components/EventsSection';
import { GiftCardsSection } from './components/GiftCardsSection';
import { AboutHunan } from './components/AboutHunan';
import { LocationHours } from './components/LocationHours';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ReservationModal } from './components/ReservationModal';
import { LightboxModal } from './components/LightboxModal';
import { GalleryImage } from './types';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleOpenReservation = () => setIsReservationOpen(true);
  const handleCloseReservation = () => setIsReservationOpen(false);

  const handleSelectDish = (dishId: string) => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#121210] relative font-sans selection:bg-[#121210] selection:text-[#FAF7F2]">
      {/* Editorial Navigation Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Restaurant Philosophy & Story */}
        <Philosophy />

        {/* Signature Dishes */}
        <SignatureDishes
          onSelectDish={handleSelectDish}
          onOpenReservation={handleOpenReservation}
        />

        {/* Interactive Menu */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* Casa Ballena Experience & Atmosphere */}
        <Experience />

        {/* Editorial Photo Gallery */}
        <EditorialGallery onOpenLightbox={(img) => setSelectedImage(img)} />

        {/* Private Events & Gatherings */}
        <EventsSection />

        {/* Digital Gift Voucher Experience */}
        <GiftCardsSection />

        {/* Grupo Hunan Story */}
        <AboutHunan />

        {/* Location & Operating Hours */}
        <LocationHours />

        {/* Reservation Conversion Callout */}
        <ReservationSection onOpenReservation={handleOpenReservation} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Persistent Mobile Action Bar */}
      <MobileActionBar onOpenReservation={handleOpenReservation} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        onSelectImage={(img) => setSelectedImage(img)}
      />
    </div>
  );
}

