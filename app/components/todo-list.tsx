"use client";

import { ITodo } from "@/typings";
import React from "react";
import Todo from "./todo";

type Props = {
  todos: ITodo[];
};

function TodoList({ todos }: Props) {
  if (!todos.length) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-900">No todos found</h1>
      </div>
    );
  }
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
