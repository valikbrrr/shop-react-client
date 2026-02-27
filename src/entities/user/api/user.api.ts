import { getUsersUrl, request, type IUser } from "@/shared";

export const UserApi = {
  async getProfile() {
    return request<IUser>({
      url: getUsersUrl("/profile"),
      method: "GET",
    });
  },
  async toggleFavorite(productId: string) {
    return request<IUser>({
      url: getUsersUrl(`/profile/favorites/${productId}`),
      method: "PATCH",
    });
  },
};
