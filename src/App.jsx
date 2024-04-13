import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskCount from "./components/TaskCount";
import { TodoProvider } from "./context/TodoContext";

import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <Header />
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  );
};

export default App;
