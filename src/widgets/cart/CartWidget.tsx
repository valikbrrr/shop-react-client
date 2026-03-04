import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { convertPrice, useActions } from "@/shared/lib";
import { toastAPI } from "@/shared/ui/toast";
import { Heading } from "@/shared/ui/heading";
import { Button } from "@/shared/ui/button";
import { CartItem, useCart } from "@/entities/cart";
import { ChangeQuantityButtons, useCheckout } from "@/features/cart";

export const CartWidget = () => {
  const { items, total } = useCart();
  const { onCheckout, isPending } = useCheckout();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { reset } = useActions();

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
        items.map((item) => (
          <div key={item.product.id}>
            <CartItem item={item} />
            <ChangeQuantityButtons item={item} />
          </div>
        ))
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
