import { useForm } from "react-hook-form";
import { useMemo } from "react";
import type { ISearchFormData } from "../model/search.interface";
import { useDebounce } from "@/shared/lib/";

export const useSearchForm = () => {
  const { control, watch } = useForm<ISearchFormData>({
    mode: "onChange",
  });

  const searchTerm = watch("searchTerm");
  const debouncedSearch = useDebounce(searchTerm);

  return useMemo(
    () => ({ debouncedSearch, searchTerm, control }),
    [control, debouncedSearch, searchTerm],
  );
};
