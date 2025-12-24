import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import type { ICartItem } from "@/types/cart.interface";
import type { FC } from "react";
import Plus from "@/assets/icons/plus.png";
import Minus from "@/assets/icons/minus.png";

interface ICartActions {
  item: ICartItem;
}

const CartActions: FC<ICartActions> = ({ item }) => {
  const { changeQuantity } = useActions();
  const { items } = useCart();
  const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;

  return (
    <div className="mt-4 flex-row items-center gap-x-2">
      <button
        onClick={() => changeQuantity({ id: item.id, type: "minus" })}
        disabled={quantity === 1}
      >
        <img src={Minus} alt="minus" className="w-4" />
      </button>
      <p>{quantity}</p>
      <button onClick={() => changeQuantity({ id: item.id, type: "plus" })}>
        <img src={Plus} alt="plus" className="w-4" />
      </button>
    </div>
  );
};

export default CartActions;
