import { useProfile } from "@/entities/user";
import { Header } from "./Header";
import { Categories } from "@/widgets";
import { Catalog, useGetAllProducts } from "@/entities/product";

export const Home = () => {
  const { profile } = useProfile();
  const { products } = useGetAllProducts();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Categories />
      <Catalog title="Products" products={products?.slice(0, 6) || []} />
    </div>
  );
};
