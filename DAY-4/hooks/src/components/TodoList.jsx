import { useState } from "react";
import React from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

//   const handleDelete = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };
  return (
    <div>
      <h2 className="font-semibold">To-Do List</h2>
      <input
      className="flex flex-col text-center text-2xl font-semibold text-amber-600 p-4 rounded-md w-60 mx-auto mt-10"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            {/* <button onClick={() => handleDelete(idx)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
