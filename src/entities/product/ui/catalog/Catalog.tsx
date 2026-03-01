import type { FC } from "react";
import type { ICatalog } from "./catalog.interface";
import { Heading, Loader } from "@/shared";
import { ProductItem } from "./product-item/ProductItem";
import { useProducts } from "../../lib/useProducts";

export const Catalog: FC<ICatalog> = ({ title }) => {
  const { isLoading, products } = useProducts();

  return isLoading ? (
    <Loader />
  ) : (
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
