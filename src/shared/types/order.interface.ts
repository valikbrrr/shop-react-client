import type { ICartItem } from "./cart.types";
import type { IUser } from "./user.types";

export interface IOrder {
  id: string;
  createdAt: string;
  items: ICartItem[];
  user: IUser;
  total: number;
}
