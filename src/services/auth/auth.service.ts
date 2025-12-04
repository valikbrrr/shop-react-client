import { EnumStorage, type IAuthResponse } from "@/types/auth.interface";
import { request } from "../api/request.api";
import { getAuthUrl } from "@/config/api.config";
import { deleteTokenStorage, saveToStorage } from "./auth.helper";

export const AuthService = {
  async main(variant: "reg" | "login", email: string, password: string) {
    const response = await request<IAuthResponse>({
      url: getAuthUrl(`/${variant === "reg" ? "register" : "login"}`),
      method: "POST",
      data: { email, password },
    });

    if (response.accessToken) saveToStorage(response);

    return response;
  },

  async logout(): Promise<void> {
    deleteTokenStorage();
    console.log("Вы успешно вышли из системы");
  },
};