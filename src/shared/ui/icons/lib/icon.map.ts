import {
  FiHeart,
  FiHome,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import type { TypeFeatherIconNames } from "./icon.types";

export const iconMap: Record<TypeFeatherIconNames, IconType> = {
  home: FiHome,
  heart: FiHeart,
  search: FiSearch,
  shoppingBag: FiShoppingBag,
  user: FiUser,
};
