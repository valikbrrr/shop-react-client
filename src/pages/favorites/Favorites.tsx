import { Catalog } from "@/entities/product";
import { useProfile } from "@/entities/user";

export const Favorites = () => {
  const { profile } = useProfile();

  return (
    <div>
      <Catalog title="Favorites" products={profile?.favorites || []} />
    </div>
  );
};
