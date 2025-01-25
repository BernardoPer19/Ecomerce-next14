import ProductType from './ProductTypes'

export interface CartType {
  id: number;
  title: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

export type CartInputType = Omit<CartType, "aa">;
