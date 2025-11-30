import { Toaster } from 'react-hot-toast'
import { customToastConfig } from './toast-config'

const Toast: React.FC = () => {
  return (
    <Toaster
      position="top-right"
      gutter={8}
      toastOptions={customToastConfig}
    />
  )
}

export default Toast