import axios from "axios";
import { API_URL } from "@/shared/config";
import { deleteTokenStorage, getAccessToken } from "@/shared/lib"; 
import { errorCatch } from "./error.api";
import { getNewTokens } from "./helper.api";

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      !originalRequest._retry
    ) {
      console.error("JWT expired or invalid");
      originalRequest._retry = true;

      try {
        const tokens = await getNewTokens();

        if (tokens?.accessToken) {
          originalRequest.headers.Authorization = `Bearer ${tokens.accessToken}`;
          return instance(originalRequest);
        } else {
          deleteTokenStorage();
        }
      } catch (e) {
        deleteTokenStorage();
        console.error("Failed to refresh token", e);
      }
    }

    return Promise.reject(error);
  },
);
