function ProductCard({ product, inCart, addToCart, removeFromCart }) {
  return (
<div className="bg-white border rounded-lg p-4 flex flex-col gap-2">
  <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
  <h2 className="font-semibold text-sm">{product.title}</h2>
  <p className="text-blue-600 font-bold">${product.price}</p>
  <p className="text-gray-500 text-xs">{product.description.slice(0, 80)}...</p>
  {inCart ? (
    <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">
      Remove from Cart
    </button>
  ) : (
    <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-3 py-1 rounded">
      Add to Cart
    </button>
  )}
</div>

  );
}

export default ProductCard;
