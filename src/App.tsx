import React from "react";

import TodoMain from "./components/TodoMain";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import "./App.css";

const App: React.FC = () => {
  return (
    <TodoMain>
      <TodoInsert />
      <TodoList />
    </TodoMain>
  );
};

export default App;
