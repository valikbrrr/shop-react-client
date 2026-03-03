import { Heading } from "@/shared/ui/heading";
import { useSearch } from "../lib/useSearch";
import type { ISearchFormData } from "../model/search.interface";
import { Field } from "@/shared/ui/field";
import { Loader } from "@/shared/ui/loader";
import { ProductList } from "@/widgets/product-list";

export const Search = () => {
  const { searchTerm, isLoading, control, products } = useSearch();

  return (
    <div>
      <Heading>Search</Heading>
      <div className="mt-3">
        <Field<ISearchFormData>
          control={control}
          placeholder="Type something..."
          name="searchTerm"
        />
      </div>
      {searchTerm ? (
        <div className="mt-2">
          {isLoading ? <Loader /> : <ProductList products={products || []} />}
        </div>
      ) : null}
    </div>
  );
};
