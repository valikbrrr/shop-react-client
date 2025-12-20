import { ProductService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsByCategory = (categorySlug: string) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["get products by category", categorySlug],
    queryFn: () => ProductService.getByCategories(categorySlug),
    select: (data) => data,
    enabled: !!categorySlug,
  });

  return { products, isLoading };
};

