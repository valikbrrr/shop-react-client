import type { IUser } from "@/shared/types";
import { createContext } from "react";

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
