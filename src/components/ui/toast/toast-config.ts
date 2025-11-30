import type { ToastOptions } from 'react-hot-toast'

export const toastConfig: ToastOptions = {
  duration: 4000,
  style: {
    background: '#363636',
    color: '#fff',
  },
}

export const customToastConfig = {
  success: {
    ...toastConfig,
    style: {
      ...toastConfig.style,
      borderLeft: '4px solid #67E769',
    },
  },
  error: {
    ...toastConfig,
    style: {
      ...toastConfig.style,
      borderLeft: '4px solid #ff4949',
    },
  },
  loading: {
    ...toastConfig,
    style: {
      ...toastConfig.style,
      borderLeft: '4px solid #6504ff',
    },
  },
}