import Button from "@/components/ui/button/Button";
import Loader from "@/components/ui/Loader";
import type { IAuthFormData } from "@/types/auth.interface";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

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
    <div className="mx-2 items-center justify-center h-full">
      <div className="w-9/12">
        <p className="text-center text-black text-3xl font-medium mb-8">
          {isReg ? "Sign Up" : "Login"}
        </p>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Auth Fields */}
            <Button onClick={handleSubmit(onSubmit)}>{isReg ? "Sign Up" : "Login"}</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
