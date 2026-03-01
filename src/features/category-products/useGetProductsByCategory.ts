import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "@/entities/product"; 

export const useGetProductsByCategory = (categorySlug: string) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["get products by category", categorySlug],
    queryFn: () => ProductApi.getByCategories(categorySlug),
    enabled: !!categorySlug,
  });

  return { products, isLoading };
};