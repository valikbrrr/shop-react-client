import { Loader } from "@/shared/ui/loader";
import { useGetAllProducts } from "../lib/useGetAllProducts";
import { Catalog } from "@/entities/product";

export const Explorer = () => {
  const { isLoading } = useGetAllProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title="Explorer" products={[]}/>
  );
};
