import type { IAuthResponse, ITokens } from "@/shared/types";
import { EnumStorage } from "@/shared/types";

export const getAccessToken = (): string | null => {
  return localStorage.getItem(EnumStorage.ACCESS_TOKEN);
};

export const saveTokenStorage = (data: ITokens): void => {
  localStorage.setItem(EnumStorage.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(EnumStorage.REFRESH_TOKEN, data.refreshToken);
};

export const getUserFromStorage = (): IAuthResponse["user"] | null => {
  try {
    const user = localStorage.getItem(EnumStorage.USER);
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};

export const saveToStorage = (data: IAuthResponse): void => {
  saveTokenStorage(data);
  try {
    localStorage.setItem(EnumStorage.USER, JSON.stringify(data.user));
  } catch (error) {
    console.error("Ошибка сохранения пользователя:", error);
  }
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(EnumStorage.REFRESH_TOKEN);
};

export const deleteTokenStorage = (): void => {
  localStorage.removeItem(EnumStorage.ACCESS_TOKEN);
  localStorage.removeItem(EnumStorage.REFRESH_TOKEN);
  localStorage.removeItem(EnumStorage.USER);
};
