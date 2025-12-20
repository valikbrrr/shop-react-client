import Heading from "@/components/ui/Heading";
import { useSearch } from "./useSearch";
import Field from "@/components/ui/field/Field";
import type { ISearchFormData } from "./search.interface";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";

const Search = () => {
  const { searchTerm, isLoading, control, products } = useSearch();

  return (
    <div>
      <Heading>Search</Heading>
      <div className="mt-3">
        <Field<ISearchFormData> control={control} placeholder="Type something..." name="searchTerm"/>
      </div>
      {searchTerm ? ( 
        <div className="mt-2">
          {isLoading ? (
            <Loader/>
          ) : (
            <Catalog products={products || []}/>
          )}
        </div>
      ) : null }
    </div>
  );
};

export default Search;
