import type { FC } from "react";
import type { ICatalog } from "./catalog.interface";
import Heading from "../Heading";
import ProductItem from "./product-item/ProductItem";

const Catalog: FC<ICatalog> = ({ title, products }) => {
  return (
    <div className="mb-16">
      {title && <Heading>{title}</Heading>}
      {products?.length ? (
        <div className="flex flex-row flex-wrap mt-4">
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

export default Catalog;
