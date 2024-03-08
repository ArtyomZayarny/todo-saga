import { all } from "redux-saga/effects";
import { todoWatcher } from "./todo";

export function* rootWatcher() {
  yield all([todoWatcher()]);
}
