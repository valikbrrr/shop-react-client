import Button from "@/components/ui/button/Button";
import type { FC } from "react";

interface IAddToCartButton {
  productId: string;
}

const AddToCartButton: FC<IAddToCartButton> = ({ productId }) => {
  return <Button className="mt-6">Add To Cart</Button>;
};

export default AddToCartButton;
