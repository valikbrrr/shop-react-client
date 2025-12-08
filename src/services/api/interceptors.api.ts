import { API_URL } from "@/config/api.config";
import axios from "axios";
import { deleteTokenStorage, getAccessToken } from "../auth/auth.helper";
import { getNewTokens } from "./helper.api";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === "object"
      ? message[0]
      : message
    : error.message;
};

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
  }
);

export default instance;
