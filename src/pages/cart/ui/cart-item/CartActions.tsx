import type { FC } from "react";
import plus from "@/shared/assets/icons/plus.png";
import minus from "@/shared/assets/icons/minus.png";
import type { ICartItem } from "@/shared/types";
import { useActions } from "@/shared/lib";
import { useCart } from "@/entities/cart";

interface ICartActions {
  item: ICartItem;
}

export const CartActions: FC<ICartActions> = ({ item }) => {
  const { changeQuantity } = useActions();
  const { items } = useCart();
  const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;

  return (
    <div className="mt-4 flex-row items-center gap-x-2">
      <button
        onClick={() => changeQuantity({ id: item.id, type: "minus" })}
        disabled={quantity === 1}
      >
        <img src={minus} alt="minus" className="w-4" />
      </button>
      <p>{quantity}</p>
      <button onClick={() => changeQuantity({ id: item.id, type: "plus" })}>
        <img src={plus} alt="plus" className="w-4" />
      </button>
    </div>
  );
};
