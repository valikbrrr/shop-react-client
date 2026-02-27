import { Loader } from "@/shared/ui/loader";
import { useGetAllProducts } from "../lib/useGetAllProducts";
import { Catalog } from "@/entities/product";


export const Explorer = () => {
  const { products, isLoading } = useGetAllProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title="Explorer" products={products || []} />
  );
};
