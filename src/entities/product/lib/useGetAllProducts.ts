import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "../api/product.api";

export const useGetAllProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["get all products"],
    queryFn: () => ProductApi.getAll(),
    select: (data) => data,
  });

  return { products, isLoading };
};
