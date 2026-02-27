import { getCategoriesUrl, request, type ICategory } from "@/shared";

export const CategoryApi = {
  async getAll() {
    return request<ICategory[]>({
      url: getCategoriesUrl(""),
      method: "GET",
    });
  },
  async getBySlug(slug: string) {
    return request<ICategory>({
      url: getCategoriesUrl(`/by-slug/${slug}`),
      method: "GET",
    });
  }
};