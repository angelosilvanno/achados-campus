export interface Item { 
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  date: string; 
  contact: string;
  imageUrl?: string;
  type: 'lost' | 'found'; 
}