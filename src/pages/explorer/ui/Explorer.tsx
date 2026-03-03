import { Loader } from "@/shared/ui/loader";
import { Catalog, useGetAllProducts } from "@/entities/product";

export const Explorer = () => {
  const { isLoading, products } = useGetAllProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title="Explorer" products={products || []} />
  );
};
