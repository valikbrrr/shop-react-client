import { deleteTokenStorage, getAuthUrl, request, saveToStorage, type IAuthResponse } from "@/shared";


export const AuthApi = {
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
