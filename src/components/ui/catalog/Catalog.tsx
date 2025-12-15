import type { FC } from "react";
import type { ICatalog } from "./catalog.interface";
import Heading from "../Heading";

const Catalog: FC<ICatalog> = ({ title, products }) => {
  return (
    <div className="mb-16">
      {title && <Heading>{title}</Heading>}
      {products?.length ? (
        <div className="flex-row flex-wrap justify-between mt-4">
            {products.map(product => (
                <p key={product.id}>{product.name}</p>
            ))}
        </div>
      ) : (
        <p className="mt-2">Products not found</p>
      )}
    </div>
  );
};

export default Catalog;
