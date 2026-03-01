import { useProfile } from "@/entities/user";
import { Header } from "./Header";
import { Categories } from "@/widgets";
import { Catalog } from "@/entities";

export const Home = () => {
  const { profile } = useProfile();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Categories />
      <Catalog products={[]} />
    </div>
  );
};
