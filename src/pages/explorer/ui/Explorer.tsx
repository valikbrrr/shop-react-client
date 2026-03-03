import { Loader } from "@/shared/ui/loader";
import { useGetAllProducts } from "@/entities/product";
import { ProductList } from "@/widgets/product-list";

export const Explorer = () => {
  const { isLoading, products } = useGetAllProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <ProductList title="Explorer" products={products || []} />
  );
};
