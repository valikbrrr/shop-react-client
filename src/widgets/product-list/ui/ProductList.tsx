import type { FC } from "react";
import { Heading } from "@/shared";
import type { IProductList } from "../lib/product-list.interface";
import { ProductItem } from "@/entities/product";

export const ProductList: FC<IProductList> = ({ title, products }) => {
  return (
    <div className="mb-16">
      {title && <Heading>{title}</Heading>}
      {products?.length ? (
        <div className="flex flex-wrap mt-4 justify-start">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-2">Products not found</p>
      )}
    </div>
  );
};
