import type { FC } from "react";
import type { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convertPrice";

interface IProductInfo {
  product: IProduct;
}

const ProductInfo: FC<IProductInfo> = ({ product }) => {
  return (
    <div className="my-3">
      <p className="font-semibold text-base">{product.name}</p>
      <p className="py-2">{product.category.name}</p>
      <p className="mt-2 font-normal text-sm text-center py-0.5 w-12  rounded-full text-white bg-[#47AA52]">
        {convertPrice(product.price)}
      </p>
    </div>
  );
};

export default ProductInfo;
