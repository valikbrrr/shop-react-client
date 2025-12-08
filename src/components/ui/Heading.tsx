import { type FC, type PropsWithChildren } from "react";

interface IHeading {
  isCenter?: boolean;
  className?: string;
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
  children,
  isCenter = false,
  className = "",
}) => {
  return (
    <h1
      className={`text-black font-medium ${
        isCenter ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
