import { useParams } from "react-router-dom";
import { useProduct } from "../lib/useProduct";
import { Loader } from "@/shared/ui/loader";
import { SERVER_URL } from "@/shared/config";
import { ProductInfo } from "@/entities/product";
import { AddToCartButton } from "@/features";
import { ProductHeader } from "@/widgets";

// страница
export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, isLoading } = useProduct(slug || "");

  if (isLoading) return <Loader />;
  if (!product) return null;

  return (
    <>
      <ProductHeader product={product} />
      <div className="flex items-center justify-center">
        <img
          src={`${SERVER_URL}${product.image}`}
          alt={product.name}
          className="w-64 h-64"
        />
      </div>
      <ProductInfo product={product} />
      <AddToCartButton product={product} />
    </>
  );
};
