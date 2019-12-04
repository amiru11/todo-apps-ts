import React, { useState, useCallback, useRef } from "react";

import TodoMain from "./components/TodoMain";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces/common";

import { initTodos } from "./data/todo";

import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initTodos);

  // 고유값으로 사용될 id, ref를 사용하여 변수담기
  const nextId = useRef(7);

  const onInsert = useCallback(
    (value): void => {
      const todo: ITodo = {
        id: nextId.current,
        value,
        checked: false
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: number): void => {
      const filteredTodos: ITodo[] = todos.filter(todo => todo.id !== id);
      setTodos(filteredTodos);
    },
    [todos]
  );
  const onToggle = useCallback((id: number): void => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoMain>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoMain>
  );
};

export default App;
