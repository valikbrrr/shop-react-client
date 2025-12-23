import Catalog from "@/components/ui/catalog/Catalog";
import { useProfile } from "../profile/useProfile";

const Favorites = () => {
  const { profile } = useProfile();

  return (
    <div>
      <Catalog title="Favorites" products={profile?.favorites || []} />
    </div>
  );
};

export default Favorites;
