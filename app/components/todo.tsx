import React, { useCallback, useState } from "react";
import Select from "./ui/select";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ITodo } from "@/typings";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/reducers/todo";
import { updateTodoStatus } from "../redux/actions/todo";

type Props = {
  todo: ITodo;
};

function Todo({ todo }: Props) {
  const dispatch = useDispatch();
  const { name, status, description, _id } = todo;
  const [currentTodoStatus, setCurrentTodoStatus] = useState(status);

  const handleChangeStatus = useCallback(
    (value: any) => {
      setCurrentTodoStatus(value.name);
      dispatch(
        updateTodoStatus({
          status: value.name,
          id: _id,
        })
      );
    },
    [dispatch]
  );
  return (
    <li
      key={_id}
      className="flex gap-3 bg-white p-3 rounded items-center justify-between mb-2"
    >
      <div className="w-full">
        <span
          data-test="todo-title"
          className="font-bold text-lg shrink-1 mb-2 flex"
        >
          {name}
        </span>
        <p data-test="todo-description" className="text-sm">
          {description}
        </p>
      </div>
      <div className="w-200 flex items-center gap-3">
        <Select
          status={currentTodoStatus}
          handleChangeStatus={handleChangeStatus}
        />
        <button
          className="cursor-pointer"
          onClick={() => dispatch(deleteTodo(_id))}
        >
          <XMarkIcon className="h-6 w-6 text-[#013B94] " aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
