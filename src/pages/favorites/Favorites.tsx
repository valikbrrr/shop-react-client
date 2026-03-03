import { useProfile } from "@/entities/user";
import { ProductList } from "@/widgets/product-list";

export const Favorites = () => {
  const { profile } = useProfile();

  return (
    <div>
      <ProductList title="Favorites" products={profile?.favorites || []} />
    </div>
  );
};
