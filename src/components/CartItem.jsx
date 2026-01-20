import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
<div className="flex justify-between items-center border rounded p-3 bg-white">
  <div>
    <h3 className="font-semibold">{item.title}</h3>
    <p className="text-gray-600">${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
  </div>
  <div className="flex gap-2">
    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 border rounded">-</button>
    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 border rounded">+</button>
    <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
  </div>
</div>

  );
}

export default CartItem;
