import type { FC } from "react";
import type { IProductComponent } from "./product-page.interface";

const productHeader: FC<IProductComponent> = ({ product }) => {
  return (
    <div>
      <div className="flex-row justify-between mt-2">productHeader</div>
    </div>
  );
};

export default productHeader;
