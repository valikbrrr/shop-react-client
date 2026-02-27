import { Toaster } from "react-hot-toast";
import { customToastConfig } from "../lib/toast-config";

export const Toast: React.FC = () => {
  return (
    <Toaster position="top-right" gutter={8} toastOptions={customToastConfig} />
  );
};
 