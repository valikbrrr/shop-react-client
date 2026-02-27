import { SERVER_URL, type IProduct } from "@/shared";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { ProductInfo } from "./ProductInfo";

interface IProductItem {
  product: IProduct;
}

export const ProductItem: FC<IProductItem> = ({ product }) => {
  return (
    <div className="rounded-lg flex-1 mb-3.5 min-w-40 gap-4">
      <Link to={`/product/${product.slug}`}>
        <button className="bg-gray-100 rounded-xl relative overflow-hidden p-5 flex items-center justify-center">
          <img
            src={`${SERVER_URL}${product.image}`}
            alt={product.name}
            className="w-40 h-40 mb-2 p-3"
          />
        </button>
        <ProductInfo product={product} />
      </Link>
    </div>
  );
};