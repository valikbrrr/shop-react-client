import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "@/shared/assets/icons/left-arrow.png";
import type { IProductPage } from "@/shared";
import { FavoriteButton } from "@/features";

export const ProductHeader: FC<IProductPage> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between mt-2">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <img src={leftArrowIcon} alt="Назад" className="w-5 h-5 mr-0.5" />
      </button>
      <FavoriteButton productId={product.id} />
    </div>
  );
};
