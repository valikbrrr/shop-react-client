import { useQuery } from "@tanstack/react-query";
import { CategoryApi } from "../api/category.api";

export const useGetAllCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["get categories"],
    queryFn: () => CategoryApi.getAll(),
    select: (data) => data,
  });

  return { categories, isLoading };
};
