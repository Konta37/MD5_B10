import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoList() {
  const [inputValue, setInputValue] = useState({ name: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [inputEditValue, setInputEditValue] = useState({ name: "" });

  const [editingTodo, setEditingTodo] = useState(null); // Track the task being edited

  //take value from store
  const todolist = useSelector((state) => state.todolist);
  const dispath = useDispatch();

  const handleChangeInput = (e) => {
    setInputValue({ ...inputValue, name: e.target.value });
  };

  const handleEditStatus = (todo) => {
    dispath({
      type: "editstatus",
      payload: {
        id: todo.id, // Identify the todo by its id
        status: !todo.status, // Toggle the status
      },
    });
  };

  const handleDelete = (todo) => {
    dispath({
      type: "delete",
      payload: {
        id: todo.id,
      },
    });
  };

  const handleAdd = () => {
    dispath({
      type: "add",
      payload: {
        id: Math.floor(Math.random() * 100),
        name: inputValue.name,
        status: true,
      },
    });
    setInputValue({ name: "" })
  };

  const handleEditTodo = (todo) => {
    setIsEdit(true);
    setInputEditValue({ name: todo.name });
    setEditingTodo(todo);
  };

  const handleEditChange = (e) => {
    setInputEditValue({ ...inputEditValue, name: e.target.value });
  };

  const handleClose = () => {
    setIsEdit(false);
  };

  const handleSaveEdit = () => {
    dispath({
      type: "saveedit",
      payload: {
        id: editingTodo.id,
        name: inputEditValue.name, // Use inputEditValue.name to get the correct name
        status: editingTodo.status, // Retain the original status or update as needed
      },
    });
    setIsEdit(false); // Close the edit form after saving
  };
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">To-do List</h1>

        {/* Input with Add Button */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            onChange={handleChangeInput}
            value={inputValue?.name || ""}
            placeholder="Add a new task"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAdd}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-center">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Status
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todolist.map((todo, index) => (
              <tr key={todo.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {todo.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {todo.status ? "Done" : "Not Done"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEditStatus(todo)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo)}
                    className="ml-2 text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditTodo(todo)}
                    className="ml-2 text-gray-500 hover:underline"
                  >
                    Edit todo
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEdit ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <form
            action=""
            className="relative bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-96"
          >
            {/* Exit button in top right */}
            <button
              type="button"
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={handleClose}
            >
              Exit
            </button>

            {/* Label and input */}
            <label
              htmlFor="editInput"
              className="block text-lg font-medium mb-2"
            >
              Name
            </label>
            <input
              id="editInput"
              type="text"
              value={inputEditValue?.name || ""}
              onChange={handleEditChange}
              className="border border-gray-300 px-4 py-2 w-full mb-4"
            />

            {/* Placeholder Text */}
            <p className="border border-gray-300 px-4 py-2 text-center mb-4">
              hihi
            </p>

            {/* Save button in bottom right */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSaveEdit} // You should implement handleSaveEdit for saving changes
              >
                Save Edit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
