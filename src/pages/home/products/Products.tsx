import { useProducts } from "@/entities/product";
import { SERVER_URL } from "@/shared/config";
import { Heading } from "@/shared/ui/heading";
import { Loader } from "@/shared/ui/loader";
import { Link } from "react-router-dom";

export const Products = () => {
  const { isLoading, products } = useProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col mt-5 mb-4">
      <Heading>Product</Heading>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-5">
        {products?.map((product) => (
          <Link to={`/product/${product.slug}`}>
            <button className="rounded-xl bg-gray-100 p-5">
              <img
                src={`${SERVER_URL}${product.image}`}
                alt={product.name}
                className="w-20 h-20 mb-2 p-3"
              />
              <p className="font-normal text-xs text-center">{product.name}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};