import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
<div className="p-6">
  <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
  {cart.length === 0 ? (
    <p className="text-gray-500">Your cart is empty.</p>
  ) : (
    <>
      <div className="flex flex-col gap-4">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-6 text-lg">
        <p>Total: ${total.toFixed(2)}</p>
        <p className="text-green-600">Discounted Total (10% off): ${discountedTotal.toFixed(2)}</p>
      </div>
    </>
  )}
</div>
  );
}

export default Cart;
