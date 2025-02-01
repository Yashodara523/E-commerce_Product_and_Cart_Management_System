import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import '../styles.css'; 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);

// List of products
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    imageUrl: '/images/th.jpg', 
    availableQuantity: 100,
  },

];

export default store;
