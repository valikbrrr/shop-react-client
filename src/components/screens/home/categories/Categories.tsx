import { SERVER_URL } from "@/config/api.config";
import Loader from "@/components/ui/Loader";
import { useGetAllCategories } from "./useGetAllCategories";
import Heading from "@/components/ui/Heading";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories, isLoading } = useGetAllCategories();

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col mt-5 mb-4">
      <Heading>Categories</Heading>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-5">
        {categories?.map((category) => (
          <Link key={category.slug} to={`/category/${category.slug}`}>
            <button className="rounded-xl bg-gray-100 p-5">
              <img
                src={`${SERVER_URL}${category.image}`}
                alt={category.name}
                className="w-20 h-20 mb-2 p-3"
              />
              <p className="font-normal text-xs text-center">{category.name}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
