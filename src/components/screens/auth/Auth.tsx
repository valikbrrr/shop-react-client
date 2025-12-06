import Button from "@/components/ui/button/Button";
import Loader from "@/components/ui/Loader";
import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
import type { IAuthFormData } from "@/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import AuthFields from "./AuthFields";

const Auth = () => {
  const [isReg, setIsReg] = useState(false);
  const { setUser } = useAuth();

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  const authMutation = useMutation({
    mutationFn: (data: IAuthFormData) =>
      AuthService.main(isReg ? "reg" : "login", data.email, data.password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    console.log(data);
    authMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 bg-white max-w-sm w-full">
        <p className="text-center text-black text-3xl font-medium mb-8">
          {isReg ? "Sign Up" : "Login"}
        </p>
        {authMutation.isPending ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <AuthFields control={control} />
            <Button type="submit" className="w-full" disabled={authMutation.isPending}>
              {isReg ? "Sign Up" : "Login"}
            </Button>

            <div className="flex flex-col items-center mt-6">
              <p className="text-black text-center text-base">
                {isReg ? "Already have an account?" : "Don't have an account?"}
              </p>
              <button
                type="button"
                onClick={() => setIsReg(!isReg)}
                className="text-[#47AA52]"
                disabled={authMutation.isPending}
              >
                {isReg ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;