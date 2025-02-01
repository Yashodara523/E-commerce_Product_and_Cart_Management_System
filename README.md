# E-commerce Product and Cart Management System (Frontend)

## Project Overview
This project is a frontend implementation of an e-commerce product and cart management system using **React.js**. It interacts with backend APIs to fetch products, manage cart items, update quantities, remove products, and place orders.

## Features
- **Product List**: Displays all available products in the store, with options to add them to the cart.
- **Cart Management**: Allows users to view, update quantities, and remove products from the cart.
- **Order Placement**: Enables users to place orders for the items in the cart and clear the cart afterward.
- **State Management**: Uses Redux to manage the application's state for cart and product data.

## Technologies Used
- **React.js** for building the frontend.
- **Redux** for state management.
- **Axios** for API integration.
- **Material-UI** for UI components (optional).
- **CSS** for styling.

## API Endpoints
- `GET /api/products`: Fetch all products.
- `POST /api/cart`: Add a product to the cart.
- `PUT /api/cart/update-quantity/{cartItemId}`: Update the quantity of a product in the cart.
- `DELETE /api/cart/{id}`: Remove a product from the cart.
- `POST /api/orders`: Place an order based on the items in the cart.

## Project Structure
src/
 ├── components/
 │ ├── ProductList.js
 │ ├── Cart.js
 │ ├── OrderConfirmation.js
 ├── redux/
 │ ├── actions.js
 │ ├── reducers.js
 │ ├── sagas.js
 │ ├── sagas copy.js 
 │ ├── store.js
 ├── App.js
 ├── index.js
 ├── api.js
 ├── styles.css
