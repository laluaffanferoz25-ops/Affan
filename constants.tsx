
import { Product, Collection } from './types';

export const BRAND_NAME = "VARENNE";
export const TAGLINE = "Presence, unstated.";

export const COLLECTIONS: Collection[] = [
  {
    id: 'sartorial',
    title: 'Sartorial',
    description: 'A dialogue between structure and breath. Tailored elegance in linen and cotton.',
    image: 'https://i.ibb.co/QF3TkTM2/trousers.webp'
  },
  {
    id: 'panache',
    title: 'Panache',
    description: 'Tactile intelligence. 100% cashmere essentials that redefine the mundane.',
    image: 'https://i.ibb.co/8DRBHCN9/t-shirt.webp'
  },
  {
    id: 'haute-couture',
    title: 'Haute Couture',
    description: 'The architecture of skin. Powerful silhouettes in premium full-grain leather.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'The Midnight Varenne Shirt',
    collection: 'Sartorial',
    price: '₹43,000',
    description: 'A study in breathable geometry. Crafted from Italian long-staple linen, this navy shirt offers a sharp collar architecture that maintains its integrity in humid climates.',
    colors: ['Navy', 'Black', 'White'],
    image: 'https://i.ibb.co/LDs582s6/shirt.webp',
    fabric: '100% Italian Linen'
  },
  {
    id: 's2',
    name: 'The Alabaster Linen Trouser',
    collection: 'Sartorial',
    price: '₹46,500',
    description: 'A silhouette of effortless precision. Woven from heavyweight Irish linen, these trousers feature a relaxed yet structured leg, designed to catch the breeze while maintaining a formal line.',
    colors: ['White', 'Navy', 'Black'],
    image: 'https://i.ibb.co/QF3TkTM2/trousers.webp',
    fabric: '100% Irish Linen'
  },
  {
    id: 'p1',
    name: 'The Bone Cashmere T-Shirt',
    collection: 'Panache',
    price: '₹76,000',
    description: 'The weightless armor. Sourced from the inner plateaus of Mongolia, this cream cashmere tee is knitted to a density that provides a structural drape without heat retention.',
    colors: ['Cream', 'Red', 'Brown', 'Black'],
    image: 'https://i.ibb.co/8DRBHCN9/t-shirt.webp',
    fabric: '100% Grade-A Cashmere'
  },
  {
    id: 'h1',
    name: 'The Obsidian Rider',
    collection: 'Haute Couture',
    price: '₹3,05,000',
    description: 'Masculine permanence. Full-grain calfskin leather treated with natural oils for a matte, charcoal finish. A silhouette that commands the room before you speak.',
    colors: ['Black', 'Brown'],
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1746&auto=format&fit=crop',
    fabric: 'Full-Grain Calfskin'
  }
];

export const MANIFESTO = {
  title: "The Silence of Power",
  body: "We do not manufacture fashion; we engineer permanence. VARENNE is the antidote to the audible. In an era of performative display, we choose the profound. Our garments are for the man who understands that the loudest statement is made in the lowest volume. Every stitch is a commitment to substance over spectacle."
};
