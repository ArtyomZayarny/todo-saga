"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { FormEvent, Fragment, useRef, useState } from "react";
import TaskTypeRadio from "./task-type-radio";
import { useDispatch } from "react-redux";
import { addTodo, postTodo, setModal } from "../redux/reducers/todo";

type Props = {
  isOpen: boolean;
};

export default function Modal({ isOpen }: Props) {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(setModal(false));
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    status: "todo",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postTodo(todo));
    closeModal();
  };

  const handleChangeTodo = (e: any) => {
    if (e?.target?.name) {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    } else {
      setTodo({ ...todo, status: e });
    }
  };

  return (
    <Transition appear show={isOpen ? isOpen : false} as={Fragment}>
      <Dialog
        as="form"
        onSubmit={handleSubmit}
        onClose={closeModal}
        className="relative z-10"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
            >
              <Dialog.Panel
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left
            align-middle shadow-xl transition-all"
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-9000 pb-2"
                >
                  Add new task
                </Dialog.Title>

                <div className="mt-2">
                  <input
                    type="text"
                    value={todo.name}
                    name="name"
                    onChange={handleChangeTodo}
                    placeholder="Enter a task here..."
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  />
                </div>
                {/* Radio groupd */}
                <TaskTypeRadio
                  status={todo.status}
                  handleStatusChange={handleChangeTodo}
                />

                <div className="mt-2">
                  <textarea
                    name="description"
                    value={todo.description}
                    onChange={handleChangeTodo}
                    placeholder="Description..."
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={!todo.name}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2
                  text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300
                  disabled:cursor-not-allowed"
                  >
                    Add Task
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
