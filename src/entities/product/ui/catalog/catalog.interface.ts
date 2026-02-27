import type { IProduct } from "@/shared";

export interface ICatalog {
  title?: string;
  products: IProduct[];
}
