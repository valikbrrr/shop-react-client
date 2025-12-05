import { createContext } from "react";
import type { IUser } from "@/types/user.interface";

export interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
  isLoading: true,
});