import { createContext } from "react";
import type { IContext } from "./auth-provider.interface";

export const AuthContext = createContext<IContext>({} as IContext);