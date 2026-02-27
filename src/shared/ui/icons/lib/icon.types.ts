export type TypeFeatherIconNames =
  | "home"
  | "heart"
  | "search"
  | "shoppingBag"
  | "user";

export interface IconProps {
  name: TypeFeatherIconNames;
  size?: number;
  color?: string;
  className?: string;
}
