import { takeLatest } from "redux-saga/effects";
import { getCategoryList, getProductList } from "../../product.slice";
import {
  getCategoriesHandler,
  getProductListHandler,
} from "./products.handler";

export function* getCategoriesWatcher() {
  // console.log("watcher");
  yield takeLatest(getCategoryList.type, getCategoriesHandler);
}
export function* getProductListWatcher() {
  // console.log("watcher");
  yield takeLatest(getProductList.type, getProductListHandler);
}
