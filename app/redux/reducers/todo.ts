export const SET_TODOS = "SET_TODOS";
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const POST_TODO = "POST_TODO";
export const SET_LOADING = "SET_LOADING";
export const SET_MODAL = "SET_MODAL";
export const DELETE_TODO = "DELETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const UPDATE_STATUS = "UPDATE_STATUS";

const initialState = {
  todos: [],
  loading: false,
  isModalOpen: false,
};
const todoReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: any) => todo._id !== action.payload._id
        ),
      };
    case CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo: any) =>
          todo._id === action.payload.id
            ? { ...todo, status: action.payload.status.name }
            : todo
        ),
      };
    case SET_MODAL:
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
};

export const setTodos = (payload: any) => ({ type: SET_TODOS, payload });
export const setLoading = (payload: any) => ({ type: SET_LOADING, payload });
export const setModal = (payload: any) => ({ type: SET_MODAL, payload });
export const postTodo = (payload: any) => ({ type: POST_TODO, payload });
export const deleteTodo = (id: string) => ({ type: DELETE_TODO, id });
export const removeTodo = (payload: any) => ({ type: REMOVE_TODO, payload });
export const addTodo = (payload: any) => ({ type: ADD_TODO, payload });
export const fetchTodos = () => ({ type: FETCH_TODOS });

export default todoReducer;
