import Loader from "@/components/ui/Loader";
import { useParams } from "react-router-dom";
import { useProduct } from "./useProduct";
import { SERVER_URL } from "@/config/api.config";

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, isLoading } = useProduct(slug || "");

  if (isLoading) return <Loader />;
  if (!product) return null;

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <img
          src={`${SERVER_URL}${product.image}`}
          alt={product.name}
          className="w-64 h-64"
        />
      </div>
    </div>
  );
};

export default Product;
