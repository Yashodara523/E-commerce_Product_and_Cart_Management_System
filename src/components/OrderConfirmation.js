import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrderRequest } from '../redux/actions';

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const orderSuccess = useSelector(state => state.product.orderSuccess);

  const handlePlaceOrder = () => {
    dispatch(placeOrderRequest());
  };

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      {orderSuccess ? (
        <p>Order placed successfully!</p>
      ) : (
        <button onClick={handlePlaceOrder}>Place Order</button>
      )}
    </div>
  );
};

export default OrderConfirmation;