import { useQuery } from "@tanstack/react-query";
import { useSearchForm } from "./useSearchForm";
import { ProductApi } from "@/entities/product";

export const useSearch = () => {
  const {searchTerm, debouncedSearch, control} = useSearchForm()

  const { data: products, isLoading } = useQuery({
    queryKey: ["search products", debouncedSearch],
    queryFn: () => ProductApi.getAll(debouncedSearch),
    enabled: !!debouncedSearch
  });

  return { products, isLoading, searchTerm, control };
};
