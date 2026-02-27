import type { FC } from "react";
import type { ICatalog } from "./catalog.interface";
import { Heading } from "@/shared";
import { ProductItem } from "./product-item/ProductItem";

export const Catalog: FC<ICatalog> = ({ title, products }) => {
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
