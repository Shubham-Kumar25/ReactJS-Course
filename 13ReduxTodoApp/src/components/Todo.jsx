import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/TodoSlice";

function Todo() {
  const [editId, setEditId] = useState(null);
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setInput(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editId, text: input }));
    setEditId(null);
    setInput("");
  };

  return (
    <div className="max-w-lg mx-auto my-6">
      {todos && todos.length > 0 && (
        <ul className="p-4 my-2 bg-green-300 rounded-md shadow-md h-min">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 my-4 bg-gray-800 rounded-md shadow-md"
            >
              {editId === todo.id ? (
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-2/3 px-4 py-2 text-lg leading-5 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-700 border border-gray-600 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                />
              ) : (
                <span className="text-gray-100">{todo.text}</span>
              )}

              <div className="flex gap-3">
                {editId ? (
                  <button
                    onClick={handleUpdate}
                    className="px-3 py-1 text-sm text-white bg-yellow-600 border-0 rounded focus:outline-none hover:bg-yellow-800"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="px-3 py-1 text-sm text-white bg-yellow-600 border-0 rounded focus:outline-none hover:bg-yellow-800"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="px-3 py-1 text-sm text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
