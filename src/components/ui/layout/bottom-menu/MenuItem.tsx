import type { IMenuItem } from './menu.interface'

interface MenuItemProps {
  item: IMenuItem 
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="menu-item">
      <span>{item.title}</span>
    </div>
  )
}

export default MenuItem