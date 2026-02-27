import toast from 'react-hot-toast'
import { customToastConfig } from './toast-config'

export const toastAPI = {
  success: (message: string) => toast.success(message, customToastConfig.success),
  error: (message: string) => toast.error(message, customToastConfig.error),
  loading: (message: string) => toast.loading(message, customToastConfig.loading),
  dismiss: toast.dismiss,
  promise: toast.promise,
}