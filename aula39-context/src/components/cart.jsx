import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li>Cart is empty</li>
        ) : (
          cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
