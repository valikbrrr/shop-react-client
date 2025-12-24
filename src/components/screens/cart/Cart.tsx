import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/Heading";
import { useCart } from "@/hooks/useCart";
import { convertPrice } from "@/utils/convertPrice";
import CartItem from "./cart-item/CartItem";

const Cart = () => {
  const { items, total } = useCart();

  return (
    <div>
      <Heading>Cart</Heading>
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p className="mt-2">noooot</p>
      )}

      {items.length ? (
        <div className="absolute bottom-20 w-[90%] mx-3">
          <p className="font-bold text-xl">Total: {convertPrice(total)}</p>
          <Button onClick={() => {}}>Place order</Button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
