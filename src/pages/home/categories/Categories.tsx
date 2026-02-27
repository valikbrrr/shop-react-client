import { useGetAllCategories } from "@/entities/category";
import { SERVER_URL } from "@/shared/config";
import { Heading } from "@/shared/ui/heading";
import { Loader } from "@/shared/ui/loader";
import { Link } from "react-router-dom";

export const Categories = () => {
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