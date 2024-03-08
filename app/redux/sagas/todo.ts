import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_TODOS, setTodos } from "../reducers/todo";

const fetchTodos = () => fetch("https://nest-todo-api-qtrw.onrender.com/todo");

function* fetchTodosWorker() {
  const data = yield call(fetchTodos);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setTodos(json));
}

export function* todoWatcher() {
  yield takeEvery(FETCH_TODOS, fetchTodosWorker);
}
