import type { ICartItem } from "@/types/cart.interface";
import type { IUser } from "@/types/user.interface";

export interface IOrder {
  id: string;             
  createdAt: string;       
  items: ICartItem[];     
  user: IUser;          
  total: number; 
}