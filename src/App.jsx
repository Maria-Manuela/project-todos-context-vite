import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { TodoProvider } from './components/TodoContext'

const App = () => {
  return (
    <TodoProvider >
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
