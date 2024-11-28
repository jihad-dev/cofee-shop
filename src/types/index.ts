export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'specialty' | 'bakery';
  image: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  image: string;
}