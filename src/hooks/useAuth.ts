import { AuthContext } from "@/providers/auth/auth-context";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext)