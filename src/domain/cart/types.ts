export type CartItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  weight: string;
  size: string;
  material: string;
  image: string;
  otherImages: string[];
  quantity: number | 0;
};

export type CartState = {
  cart: CartItem[];
};
