import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.product.cart);

  const handleQuantityChange = (cartItemId, quantity) => {
    dispatch(updateCartQuantity(cartItemId, quantity));
  };

  const handleRemoveFromCart = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <p>Total: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${totalAmount}</h2>
    </div>
  );
};

export default Cart;