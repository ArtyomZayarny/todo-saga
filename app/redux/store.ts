import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./reducers/todo";
import { rootWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({ todoReducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

export const getStore = () =>
  configureStore({
    reducer: combineReducers({ todoReducer }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
  });
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootWatcher);
