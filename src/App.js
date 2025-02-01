import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/order-confirmation">Order Confirmation</Link></li>
            </ul>
            
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;