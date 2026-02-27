import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "../api/product.api";

export const useProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["get products"],
    queryFn: () => ProductApi.getAll(),
    select: data => data.slice(0, 6),
  });

  return { products, isLoading };
};
