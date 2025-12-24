import Loader from "@/components/ui/Loader";
import { useProducts } from "./useProducts";
import Heading from "@/components/ui/Heading";
import { Link } from "react-router-dom";
import { SERVER_URL } from "@/config/api.config";

const Products = () => {
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

export default Products;
