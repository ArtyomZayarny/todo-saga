import React from "react";
import Select from "./ui/select";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ITodo } from "@/typings";

type Props = {
  todo: ITodo;
};

function Todo({ todo }: Props) {
  const { name, status, description } = todo;
  console.log(todo);
  return (
    <li className="flex gap-3 bg-white p-3 rounded items-center justify-between">
      <div>
        <span className="font-bold text-lg shrink-1 mb-2 flex">{name}</span>
        <p className="text-sm">{description}</p>
      </div>
      <div className="w-200 flex items-center gap-3">
        <Select status={status} />
        <button className="cursor-pointer">
          <XMarkIcon className="h-6 w-6 text-[#013B94] " aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
