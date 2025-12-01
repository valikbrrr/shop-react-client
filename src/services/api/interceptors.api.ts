import { SERVER_URL } from "@/config/api.config";
import axios from "axios";
import { getAccessToken } from "../auth/auth.helper";

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;


instance.interceptors.request.use(async config => {
  const accessToken = getAccessToken()

  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})