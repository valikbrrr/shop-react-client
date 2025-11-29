import { useState, type FC, type PropsWithChildren } from "react";
import type { TypeUserState } from "./auth-provider.interface";
import { AuthContext } from "./auth-context";
import type { IUser } from "@/types/user.interface";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
