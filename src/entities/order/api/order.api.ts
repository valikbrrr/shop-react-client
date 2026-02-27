import { getOrdersUrl, request, type IOrder } from "@/shared";

type TypeData = {
  items: {
    quantity: number;
    price: number;
    productId: string;
  }[];
};

export const OrderApi = {
  async getAll(): Promise<IOrder[]> {
    return request<IOrder[]>({
      url: getOrdersUrl(""),
      method: "GET",
    });
  },

  async getByUserId(): Promise<IOrder[]> {
    return request<IOrder[]>({
      url: getOrdersUrl("/by-user"),
      method: "GET",
    });
  },

  async place(data: TypeData) {
    return request<{ clientSecret: string }>({
      url: getOrdersUrl(""),
      method: "POST",
      data,
    });
  },
};
