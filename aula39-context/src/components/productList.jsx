import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <span>{product.name} - {product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="ml-4 bg-blue-500 text-white py-1 px-4 rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
