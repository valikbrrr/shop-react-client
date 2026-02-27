import axios from "axios";
import {
  saveToStorage,
  getRefreshToken,
  deleteTokenStorage,
} from "@/shared/lib";
import { API_URL, getAuthUrl } from "@/shared/config";
import type { IAuthResponse } from "@/shared/types";

const refreshAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNewTokens = async (): Promise<IAuthResponse | null> => {
  try {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      console.warn("Refresh token отсутствует");
      return null;
    }

    const response = await refreshAxios.post<IAuthResponse>(
      getAuthUrl("/login/access-token"),
      { refreshToken },
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Ошибка обновления токенов:", error);
    deleteTokenStorage();
    return null;
  }
};
