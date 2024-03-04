import { ITodo } from "@/typings";
import React from "react";

type Props = {
  todos: ITodo[];
};

function TodoList({ todos }: Props) {
  return <div>todo-list</div>;
}

export default TodoList;
