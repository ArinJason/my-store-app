import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
   <nav className="flex justify-between items-center bg-white border-b px-6 py-4 sticky top-0">
  <h1 className="font-bold text-lg">My Store</h1>
  <div className="flex gap-6">
    <Link to="/products" className="hover:text-blue-600">Products</Link>
    <Link to="/cart" className="hover:text-blue-600">Cart ({count})</Link>
  </div>
</nav>

  );
}

export default Navbar;
