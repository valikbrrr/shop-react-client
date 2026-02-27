import type { FC, PropsWithChildren } from "react";
import cn from "clsx";
import type { IButton } from "../lib/button.interface";

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "self-center mt-3.5 bg-[#47AA52] w-full py-3 font-light rounded-lg",
        className
      )}
      {...rest}
    >
      <p className="text-white text-center font-medium text-lg">{children}</p>
    </button>
  );
};