import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { useStripe } from "@/hooks/useStripe";
import { OrderService } from "@/services/order.service";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toastAPI } from "@/components/ui/toast/toast-api";

export const useCheckout = () => {
  const { items } = useCart();
  const { reset } = useActions();
  const navigate = useNavigate();
  const { confirmPayment } = useStripe();

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

      const { error } = await confirmPayment(
        clientSecret,
        `${window.location.origin}/cart?payment=success`
      );

      if (error) {
        toastAPI.error(error.message || "Ошибка при обработке платежа");
        return;
      }

      reset();
      toastAPI.success("Заказ успешно оформлен!");
      navigate("/");
    } catch (error) {
      console.error("Checkout error:", error);
      toastAPI.error(
        error instanceof Error
          ? error.message
          : "Произошла ошибка при оформлении заказа"
      );
    }
  };

  return { onCheckout, isPending };
};
