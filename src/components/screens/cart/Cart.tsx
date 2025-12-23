import Heading from "@/components/ui/Heading";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { items, total } = useCart();

  return (
    <div>
      <Heading>Cart</Heading>
      {items.length ? (
        items.map((item) => <p key={item.id}>{item.price}</p>)
      ) : (
        <p className="mt-2">noooot</p>
      )}
    </div>
  );
};

export default Cart;
