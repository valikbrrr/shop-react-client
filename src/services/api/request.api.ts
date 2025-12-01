import { AxiosError, type AxiosResponse } from "axios";
import { toastAPI } from "@/components/ui/toast/toast-api";
import { errorCatсh } from "./error.api";

export const request = async <T>(
  fn: Promise<AxiosResponse<T>>
): Promise<T> => { 
  try {
    const response = await fn;
    return response.data;
  } catch (error) {
    const message = errorCatсh(error as AxiosError); 
    
    toastAPI.error(`Ошибка запроса: ${message}`);
    
    throw error;
  }
};