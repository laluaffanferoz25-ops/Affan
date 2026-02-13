
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: string;
  description: string;
  colors: string[];
  image: string;
  fabric: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
}

export enum Section {
  HERO = 'hero',
  MANIFESTO = 'manifesto',
  COLLECTIONS = 'collections',
  CONCIERGE = 'concierge'
}
