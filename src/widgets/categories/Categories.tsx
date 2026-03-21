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
    <div className="flex flex-col text-2xl my-4 px-[20px]">
      <Heading>Что бы вы хотели?</Heading>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {categories?.map((category) => (
          <Link key={category.slug} to={`/category/${category.slug}`}>
            <button>
              <img src={`${SERVER_URL}${category.image}`} alt={category.name} />
              <p className="font-normal text-xl text-center mt-2">
                {category.name}
              </p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
