import axios from 'axios';

const API_BASE_URL = 'http://localhost:5132/api';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/products`);
export const addToCart = (product) => axios.post(`${API_BASE_URL}/cart`, product);
export const updateCartQuantity = (cartItemId, quantity) => axios.put(`${API_BASE_URL}/cart/update-quantity/${cartItemId}`, { quantity });
export const removeFromCart = (cartItemId) => axios.delete(`${API_BASE_URL}/cart/${cartItemId}`);
export const placeOrder = (cartItems) => axios.post(`${API_BASE_URL}/orders`, { items: cartItems });