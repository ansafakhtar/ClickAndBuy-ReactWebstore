import { DefaultLoadingState } from "../../types";

export type Product = {
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
};

export type ProductState = DefaultLoadingState & {
  products: Product[];
};

export type SingleProductState = DefaultLoadingState & {
  product: Product | null;
};
