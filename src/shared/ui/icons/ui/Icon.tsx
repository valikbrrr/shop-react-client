import { iconMap } from "../lib/icon.map";
import type { IconProps } from "../lib/icon.types";

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};
