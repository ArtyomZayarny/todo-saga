"use client";
import React, { useEffect } from "react";
import Button from "./ui/button";
import TodoList from "./todo-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/reducers/todo";

function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state?.todoReducer.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <Button />
      {todos && <TodoList todos={todos} />}
    </>
  );
}

export default Dashboard;
