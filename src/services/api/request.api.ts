import { type AxiosRequestConfig, type AxiosError } from "axios";
import { toastAPI } from "@/components/ui/toast/toast-api";
import { errorCatch } from "./error.api";
import instance from "./interceptors.api";

export const request = async <T>(
  config: AxiosRequestConfig,
  options?: {
    showErrorToast?: boolean;
    errorMessage?: string;
  }
): Promise<T> => {
  const { showErrorToast = true, errorMessage } = options || {};
  
  try {
    const response = await instance(config); 
    return response.data;
  } catch (error) {
    console.log(error);
    const message = errorCatch(error as AxiosError);
    
    if (showErrorToast) {
      const toastMessage = errorMessage 
        ? `${errorMessage}: ${message}`
        : `Ошибка запроса: ${message}`;
      toastAPI.error(toastMessage);
    }
    
    throw error;
  }
};