import { useCart } from "@/entities/cart";
import { useActions } from "@/shared/lib";
import type { IProduct } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import type { FC } from "react";

interface IAddToCartButton {
  product: IProduct;
}

export const AddToCartButton: FC<IAddToCartButton> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();

  const currentElement = items.find(
    (cartItem) => cartItem.product.id === product.id,
  );

  return (
    <Button
      onClick={() =>
        currentElement
          ? removeFromCart({ id: currentElement.id })
          : addToCart({ product, quantity: 1, price: product.price })
      }
      className="mt-6"
    >
      {currentElement ? "Remove from cart" : "Add to cart"}
    </Button>
  );
};