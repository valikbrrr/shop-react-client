import { Catalog } from "@/entities/product";
import { useGetProductsByCategory } from "@/features";
import { Loader } from "@/shared/ui";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, isLoading } = useGetProductsByCategory(slug || "");

  return isLoading ? (
    <Loader />
  ) : (
    <Catalog title={slug || "Category"} products={products || []} />
  );
};
