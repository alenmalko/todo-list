import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoAdd() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleTodoDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="New To-Do"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button onClick={handleNewTodoAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} onDelete={handleTodoDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;