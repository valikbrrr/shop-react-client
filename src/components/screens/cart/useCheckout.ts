import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { OrderService } from "@/services/order.service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toastAPI } from "@/components/ui/toast/toast-api";

export const useCheckout = () => {
  const { items, total } = useCart();
  const { reset } = useActions();

  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const { mutateAsync: placeOrder, isPending } = useMutation({
    mutationKey: ["place order"],
    mutationFn: () =>
      OrderService.place({
        items: items.map((item) => ({
          price: item.price,
          quantity: item.quantity,
          productId: item.product.id,
        })),
      }),
  });

  const onCheckout = async () => {
    try {
      const { clientSecret } = await placeOrder();

      setClientSecret(clientSecret);
      setPaymentModalOpen(true);
    } catch (error) {
      console.error("Checkout error:", error);
      toastAPI.error(
        error instanceof Error
          ? error.message
          : "Произошла ошибка при оформлении заказа"
      );
    }
  };

  const handlePaymentSuccess = () => {
    reset();
    setPaymentModalOpen(false);
    setClientSecret(null);
    toastAPI.success("Заказ успешно оформлен!");
  };

  return {
    onCheckout,
    isPending,
    paymentModalOpen,
    setPaymentModalOpen,
    clientSecret,
    total,
    handlePaymentSuccess,
  };
};
