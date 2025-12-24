import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/Heading";
import { useCart } from "@/hooks/useCart";
import { useActions } from "@/hooks/useActions";
import { convertPrice } from "@/utils/convertPrice";
import CartItem from "./cart-item/CartItem";
import { useCheckout } from "./useCheckout";
import { toastAPI } from "@/components/ui/toast/toast-api";

const Cart = () => {
  const { items, total } = useCart();
  const { onCheckout, isPending } = useCheckout();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { reset } = useActions();

  // Обработка успешного возврата от Stripe
  useEffect(() => {
    const paymentStatus = searchParams.get("payment");
    if (paymentStatus === "success") {
      reset();
      toastAPI.success("Заказ успешно оформлен!");
      setSearchParams({});
      navigate("/");
    }
  }, [searchParams, reset, setSearchParams, navigate]);

  return (
    <div>
      <Heading>Cart</Heading>
      {items.length ? (
        items.map((item) => <CartItem key={item.product.id} item={item} />)
      ) : (
        <p className="mt-2">noooot</p>
      )}

      {items.length ? (
        <div className="absolute bottom-20 w-[90%] mx-3">
          <p className="font-bold text-xl">Total: {convertPrice(total)}</p>
          <Button onClick={onCheckout} disabled={isPending}>
            {isPending ? "Обработка..." : "Place order"}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
