export interface MenuItem {
  id: string;
  name: string;
  ptName?: string;
  category: 'grilled-chicken' | 'crispy-chicken' | 'combos-buckets' | 'burgers-wraps' | 'sides-extras' | 'drinks-desserts';
  description: string;
  priceMzn: number; // Mozambican Metical (MT)
  image: string;
  spiceLevel?: 'Suave' | 'Médio' | 'Picante Peri-Peri' | 'Extra Limão & Ervas' | 'Crocante Sem Pimenta';
  dietary?: ('mais-vendido' | 'novo' | 'recomendado-do-chef' | 'familiar' | 'halal')[];
  featured?: boolean;
  servingSize?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'restaurant' | 'food' | 'kitchen' | 'delivery';
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  caption?: string;
}

export interface EventPackage {
  id: string;
  title: string;
  subtitle: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}

export interface OrderCartItem {
  item: MenuItem;
  quantity: number;
  selectedSpice?: string;
  notes?: string;
}

export interface ReservationData {
  partySize: number;
  date: string;
  time: string;
  seatingArea: 'sala-principal' | 'esplanada' | 'takeaway-pickup' | 'delivery-express';
  fullName: string;
  email: string;
  phone: string;
  location: string;
  specialRequests?: string;
}
