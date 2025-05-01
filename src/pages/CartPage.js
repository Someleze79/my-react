import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

// Cart page with total, item removal, and shipping selection
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(index))}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>

      <h3>Select Shipping</h3>
      <select>
        <option>Standard (3-5 days)</option>
        <option>Express (1-2 days)</option>
        <option>Overnight</option>
      </select>

      <p><strong>Need Help?</strong> Our shipping options are reliable, fast, and trackable.</p>
    </div>
  );
};

export default CartPage;