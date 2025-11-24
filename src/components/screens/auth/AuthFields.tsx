import Field from "@/components/ui/field/Field";
import type { IAuthFormData } from "@/types/auth.interface";
import type { FC } from "react";
import type { Control } from "react-hook-form";
import { validEmail } from "./email.regex";

interface IAuthFields {
  control: Control<IAuthFormData>;
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
  return (
    <>
      <Field<IAuthFormData>
        placeholder="Enter email"
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: validEmail,
            message: "Please enter a valid email address",
          },
        }}
      />
      <Field<IAuthFormData>
        placeholder="Password email"
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password should be minimum 6 characters long",
          },
        }}
      />
    </>
  );
};

export default AuthFields;
