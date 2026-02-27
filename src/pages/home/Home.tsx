import { useProfile } from "@/entities/user";
import { Header } from "./Header";
import { Banner } from "./banner/Banner";
import { Categories } from "./categories/Categories";
import { Products } from "./products/Products";

export const Home = () => {
  const { profile } = useProfile();
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Products />
    </div>
  );
};
