import type { FC } from "react";
import type { IProductComponent } from "./product-page.interface";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "@/assets/icons/left-arrow.png";

const ProductHeader: FC<IProductComponent> = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <img src={leftArrowIcon} alt="Назад" className="w-5 h-5 mr-0.5" />
      </button>
      <div className="">избранное</div>
    </div>
  );
};

export default ProductHeader;
