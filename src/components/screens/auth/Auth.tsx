import Button from "@/components/ui/button/Button";
import Loader from "@/components/ui/Loader";
import type { IAuthFormData } from "@/types/auth.interface";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import AuthFields from "./AuthFields";

const Auth = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    console.log(data);
  };

  const isLoading = false;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 bg-white max-w-sm w-full">
        <p className="text-center text-black text-3xl font-medium mb-8">
          {isReg ? "Sign Up" : "Login"}
        </p>
        {isLoading ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Поля формы */}
            <AuthFields control={control}/>
            {/* <div className="mb-4">
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                {...control.register("email")}
                className="border border-gray-300 p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                {...control.register("password")}
                className="border border-gray-300 p-2 w-full rounded"
                required
              />
            </div> */}
            <Button type="submit" className="w-full">
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
