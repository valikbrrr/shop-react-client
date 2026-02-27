import { useProfile } from "@/entities/user";
import { Header } from "./Header";
import { Categories, Products } from "@/widgets";

export const Home = () => {
  const { profile } = useProfile();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Categories />
      <Products />
    </div>
  );
};
