export const SET_TODOS = "SET_TODOS";
export const FETCH_TODOS = "FETCH_TODOS";

const todoReducer = (state = { todos: [] }, action: any) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export const setTodos = (payload) => ({ type: SET_TODOS, payload });
export const fetchTodos = () => ({ type: FETCH_TODOS });

export default todoReducer;
