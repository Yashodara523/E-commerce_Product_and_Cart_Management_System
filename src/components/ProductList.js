// ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, addToCart } from '../redux/actions'; // Go up one level to src, then access redux
import '../styles.css'; // Ensure you have your styles for grid

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.imageUrl || './Images/th.jpg'} // Fallback to default image
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p className="price">Price: ${product.price}</p>
              <p>Available: {product.availableQuantity}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.availableQuantity === 0}
              >
                {product.availableQuantity === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
