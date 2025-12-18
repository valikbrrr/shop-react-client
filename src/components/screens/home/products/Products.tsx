import Loader from "@/components/ui/Loader";
import { useProducts } from "./useProducts";
import Catalog from "@/components/ui/catalog/Catalog";

const Products = () => {
  const { isLoading, products } = useProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title="Products" products={products ?? []} />
  );
};

export default Products;
