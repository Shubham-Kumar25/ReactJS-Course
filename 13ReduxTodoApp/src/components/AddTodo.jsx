import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input && input.length > 0) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <div className="flex items-start justify-center my-6">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-gray-800 rounded-lg shadow-md"
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-2/3 px-4 py-2 text-lg leading-5 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-700 border border-gray-600 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
          />
          <button
            type="submit"
            className="px-2 py-2 ml-4 text-lg text-white bg-indigo-500 border-0 rounded w-max focus:outline-none hover:bg-indigo-600"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
