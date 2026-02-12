import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
import type { IAuthFormData } from "@/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import type { UseFormReset } from "react-hook-form";

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
  const { setUser } = useAuth();

  const { mutate: login, isPending: isLoginLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: IAuthFormData) =>
      AuthService.main("login", email, password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });
  const { mutate: register, isPending: isRegisterLoading } = useMutation({
    mutationKey: ["register"],
    mutationFn: ({ email, password }: IAuthFormData) =>
      AuthService.main("reg", email, password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });

  return useMemo(
    () => ({
      login,
      register,
      isLoading: isLoginLoading || isRegisterLoading,
    }),
    [isLoginLoading, isRegisterLoading, login, register],
  );
};
