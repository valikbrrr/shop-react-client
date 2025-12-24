import { SERVER_URL } from "@/config/api.config";
import type { ICartItem } from "@/types/cart.interface";
import { convertPrice } from "@/utils/convertPrice";
import type { FC } from "react";
import { Link } from "react-router-dom";
import CartActions from "./CartActions";

interface ICartItemProps {
  item: ICartItem;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  return (
    <div className="flex-row mt-5">
      <Link to={`/product/${item.product.slug}`}>
        <img
          src={`${SERVER_URL}${item.product.image}`}
          alt={item.product.name}
          className="w-20 h-20 mb-2 p-3"
        />
      </Link>
      <div className="ml-5 mt-2">
        <p className="font-semibold">{item.product.name}</p>
        <p className="mt-1">{convertPrice(item.price)}</p>
        <CartActions item={item} />
      </div>
    </div>
  );
};

export default CartItem;
