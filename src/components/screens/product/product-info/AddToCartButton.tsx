import type { FC } from "react";

interface IAddToCartButton {
  productId: string;
}

const AddToCartButton: FC<IAddToCartButton> = ({ productId }) => {
  return <button className="mt-6">Add To Cart</button>;
};

export default AddToCartButton;
