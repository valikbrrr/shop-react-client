import { ProductApi } from "@/entities/product";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productSlug: string) => {
  const { data: product, isLoading } = useQuery({
    queryKey: ["get product", productSlug],
    queryFn: () => ProductApi.getBySlug(productSlug),
    select: (data) => data,
    enabled: !!productSlug,
  });

  return { product, isLoading };
};
