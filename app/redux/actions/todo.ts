import { CHANGE_STATUS, FETCH_TODOS, UPDATE_STATUS } from "../reducers/todo";

export const GET_TODOS_FETCH = "GET_TODOS_FETCH";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const fetchTodos = () => ({ type: FETCH_TODOS });
export const updateTodoStatus = (payload: any) => ({
  type: UPDATE_STATUS,
  payload,
});

export const changeTodoStatus = (payload: any) => ({
  type: CHANGE_STATUS,
  payload,
});
