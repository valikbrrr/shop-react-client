import { useParams } from "react-router-dom";
import Loader from "@/components/ui/Loader";
import { useGetProductsByCategory } from "./useGetProductsByCategory";
import Catalog from "@/components/ui/catalog/Catalog";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, isLoading } = useGetProductsByCategory(slug || "");
  

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title={slug || "Category"} products={products || []} />
  );
};

export default Category;