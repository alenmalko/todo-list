import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos(todos.concat({ id: Date.now(), text, completed: false }));
  }

  function toggleCompleted(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleCompleted={toggleCompleted} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;