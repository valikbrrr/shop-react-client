import { ProductApi } from "@/entities/product";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["get all products"],
    queryFn: () => ProductApi.getAll(),
    select: (data) => data,
  });

  return { products, isLoading };
};
