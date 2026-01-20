import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    let mounted = true;
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        if (mounted) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="loader">Loading products...</div>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.some(item => item.id === product.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default Products;
