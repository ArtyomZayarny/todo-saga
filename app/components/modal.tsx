"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { FormEvent, Fragment, useRef, useState } from "react";
import TaskTypeRadio from "./task-type-radio";

export default function Modal() {
  const isOpen = false;
  const closeModal = () => {};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
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
                    value={""}
                    //onChange={(e) => setNewTaskInput(e.target.value)}
                    onChange={() => {}}
                    placeholder="Enter a task here..."
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  />
                </div>
                {/* Radio groupd */}
                <TaskTypeRadio />

                <div className="mt-2">
                  <textarea
                    value={""}
                    //onChange={(e) => setNewTaskInput(e.target.value)}
                    onChange={() => {}}
                    placeholder="Description..."
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    // disabled={!newTaskInput}
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
