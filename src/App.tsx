import React from "react";

import TodoMain from "./components/TodoMain";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import { todos } from "./data/todo";

import "./App.css";

const App: React.FC = () => {
  return (
    <TodoMain>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoMain>
  );
};

export default App;
