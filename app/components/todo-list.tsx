"use client";

import { ITodo } from "@/typings";
import React from "react";
import Todo from "./todo";

type Props = {
  todos: ITodo[];
};

function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
