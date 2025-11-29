import type { IMenuItem } from "./menu.interface";

interface IMenuItemProps {
  item: IMenuItem;
  currentRoute?: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ item }) => {
  // const isActive = currentRoute === item.path;
  return (
    <button className="items-center w-[20%]">
      <span>{item.title}</span>
    </button>
  );
};

export default MenuItem;
