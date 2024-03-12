"use client";
import React, { useEffect } from "react";
import Button from "./ui/button";
import TodoList from "./todo-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, setModal } from "../redux/reducers/todo";
import LoadingResults from "../loading";
import Modal from "./modal";

function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state?.todoReducer.todos);
  const isModalOpen = useSelector(
    (state: any) => state?.todoReducer.isModalOpen
  );
  const loading = useSelector((state: any) => state?.todoReducer.loading);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => dispatch(setModal(true));

  return (
    <>
      <Button handleClick={handleAddTodo} />
      {loading && <LoadingResults />}
      {todos && <TodoList todos={todos} />}
      <Modal isOpen={isModalOpen} />
    </>
  );
}

export default Dashboard;
