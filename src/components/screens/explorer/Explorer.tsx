import Loader from "@/components/ui/Loader";
import { useGetAllProducts } from "./useGetAllProducts";
import Catalog from "@/components/ui/catalog/Catalog";

const Explorer = () => {
  const { products, isLoading } = useGetAllProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title="Explorer" products={products || []} />
  );
};

export default Explorer;
