import type { IUser } from "@/types/user.interface";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse {
  user: IUser; // Теперь точно IUser, а не any
  accessToken: string;
  refreshToken: string;
}

export enum EnumStorage {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
  USER = "user",
}

export const getAccessToken = (): string | null => {
  return localStorage.getItem(EnumStorage.ACCESS_TOKEN);
};

export const saveTokenStorage = (data: ITokens): void => {
  localStorage.setItem(EnumStorage.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(EnumStorage.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokenStorage = (): void => {
  localStorage.removeItem(EnumStorage.ACCESS_TOKEN);
  localStorage.removeItem(EnumStorage.REFRESH_TOKEN);
  localStorage.removeItem(EnumStorage.USER);
};

// Правильно: возвращаем IUser или null
export const getUserFromStorage = (): IUser | null => {
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