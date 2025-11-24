/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSX } from "react";
import type { IField } from "./field.interface";
import { Controller } from "react-hook-form";
import cn from "clsx";

const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <div
            className={cn(
              "bg-white w-full border rounded-lg py-2 px-3 my-1 outline-none",
              error ? "border-red-500" : "border-gray-400"
            )}
          >
            <input
              type="text"
              autoCapitalize="none"
              onChange={onChange}
              onBlur={onBlur}
              value={(value || "").toString()}
              className="text-black text-base"
              style={{
                color: "#6A6A6A",
                outline: "none",
              }}
              {...rest}
            />
          </div>
          {error && <p className="text-red-500">{error.message}</p>}
        </>
      )}
    />
  );
};

export default Field;
