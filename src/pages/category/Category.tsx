import { useGetProductsByCategory } from "@/entities/product";
import { Loader } from "@/shared/ui";
import { ProductList } from "@/widgets/product-list";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, isLoading } = useGetProductsByCategory(slug || "");

  return isLoading ? (
    <Loader />
  ) : (
    <ProductList title={slug || "Category"} products={products || []} />
  );
};
