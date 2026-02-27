import { getProductsUrl, request, type IProduct } from "@/shared";


export const ProductApi = {
  async getAll(searchTerm?: string) {
    return request<IProduct[]>({
      url: getProductsUrl(""),
      method: "GET",
      params: searchTerm ? { searchTerm } : {},
    });
  },
  async getBySlug(slug: string) {
    return request<IProduct>({
      url: getProductsUrl(`/by-slug/${slug}`),
      method: "GET",
    });
  },
  async getByCategories(categorySlug: string) {
    return request<IProduct[]>({
      url: getProductsUrl(`/by-category/${categorySlug}`),
      method: "GET",
      data: { categorySlug },
    });
  },
};
