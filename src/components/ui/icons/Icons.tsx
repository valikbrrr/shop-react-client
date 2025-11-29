import {
  FiHeart,
  FiHome,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import type { TypeFeatherIconNames } from "@/types/iconsType";

const iconMap: Record<TypeFeatherIconNames, IconType> = {
  home: FiHome,
  heart: FiHeart,
  search: FiSearch,
  shoppingBag: FiShoppingBag,
  user: FiUser,
};

export interface IconProps {
  name: TypeFeatherIconNames;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
