import type { IProduct } from "./product.types";

export interface ICartItem {
  id: string;
  product: IProduct;
  quantity: number;
  price: number
}
