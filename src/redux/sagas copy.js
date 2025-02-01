import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_PRODUCTS, ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART, PLACE_ORDER } from "./actions";

const API_URL = "http://localhost:5000/api";

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/products`);
    yield put({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching products", error);
  }
}

function* watchActions() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
}

export default function* rootSaga() {
  yield watchActions();
}
