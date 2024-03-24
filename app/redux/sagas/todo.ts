import { put, takeEvery, call } from "redux-saga/effects";
import {
  DELETE_TODO,
  FETCH_TODOS,
  POST_TODO,
  UPDATE_STATUS,
  addTodo,
  removeTodo,
  setLoading,
  setTodos,
} from "../reducers/todo";
import { changeTodoStatus } from "../actions/todo";
import { ITodo } from "@/typings";

const fetchTodos = () => fetch("https://nest-todo-api-qtrw.onrender.com/todo");

const postTodo = (todo: ITodo) =>
  fetch("https://nest-todo-api-qtrw.onrender.com/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

const deleteTodo = (id: string) =>
  fetch(`https://nest-todo-api-qtrw.onrender.com/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

const updateTodoStatus = (id: string, status: string) =>
  fetch(`https://nest-todo-api-qtrw.onrender.com/todo/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

function* fetchTodosWorker(): any {
  yield put(setLoading(true));
  const data = yield call(fetchTodos);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setTodos(json));
  yield put(setLoading(false));
}

function* addTodoWorker(todo: any): any {
  yield put(setLoading(true));
  const data = yield call(postTodo, todo.payload);
  const res = yield call(() => new Promise((res) => res(data.json())));
  yield put(addTodo(res));
  yield put(setLoading(false));
}

function* deleteTodoWorker(todo: any): any {
  yield put(setLoading(true));
  const data = yield call(deleteTodo, todo.id);
  const res = yield call(() => new Promise((res) => res(data.json())));
  yield put(removeTodo(res));
  yield put(setLoading(false));
}

function* changeStatusWorker(todo: any): any {
  yield call(updateTodoStatus, todo.payload.id, todo.payload.status);
  yield put(changeTodoStatus(todo.payload));
}

export function* todoWatcher() {
  yield takeEvery(FETCH_TODOS, fetchTodosWorker);
  yield takeEvery(POST_TODO, addTodoWorker);
  yield takeEvery(DELETE_TODO, deleteTodoWorker);
  yield takeEvery(UPDATE_STATUS, changeStatusWorker);
}
