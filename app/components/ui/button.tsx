import React from "react";

type Props = {
  handleClick: () => void;
};

function Button({ handleClick }: Props) {
  return (
    <button
      data-test="add-todo"
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
    >
      Add task
    </button>
  );
}

export default Button;
