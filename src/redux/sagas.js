// src/redux/sagas.js

import { all, call, takeEvery, put } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsFailure } from './actions';
import { fetchProducts } from '../api';  // Assuming you have a function to fetch products from an API

// Individual saga for fetching products
function* fetchProductsSaga() {
  try {
    const response = yield call(fetchProducts);  // API call to fetch products
    yield put(fetchProductsSuccess(response.data));  // Dispatch success action
  } catch (error) {
    yield put(fetchProductsFailure(error.message));  // Dispatch failure action
  }
}

// Watcher saga to listen for the FETCH_PRODUCTS_REQUEST action
function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

// Root saga to run all individual sagas in parallel
export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    
  ]);
}
