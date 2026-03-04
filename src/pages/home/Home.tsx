import { useProfile } from "@/entities/user";
import { Categories, ProductList } from "@/widgets";
import { useGetAllProducts } from "@/entities/product";

export const Home = () => {
  const { profile } = useProfile();
  const { products } = useGetAllProducts();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Categories />
      <ProductList title="Products" products={products?.slice(0, 6) || []} />
    </div>
  );
};
