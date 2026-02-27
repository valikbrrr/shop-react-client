import type { FC } from "react";
import type { IProductComponent } from "../model/product-page.interface";
import { convertPrice } from "@/shared/lib";

export const ProductInfo: FC<IProductComponent> = ({ product }) => {
  return (
    <div className="mt-5">
      <p className="font-bold text-2xl">{product.name}</p>
      <p className="mt-2 text-base opacity-70">{product.description}</p>
      <p className="mt-6 text-3xl font-semibold text-[#47AA52]">
        {convertPrice(product.price)}
      </p>
    </div>
  );
};
