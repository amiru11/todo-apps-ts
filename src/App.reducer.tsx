import React, { useReducer, useCallback, useRef } from "react";

import TodoMain from "./components/TodoMain";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces/common";

import "./App.css";

function createBulkTodos(): ITodo[] {
  const array: ITodo[] = [];
  for (let i = 1; i <= 10; i++) {
    array.push({
      id: i,
      value: `할 일 ${i}`,
      checked: false
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 새로 추가
      // { type: 'INSERT', todo: { id: 1, value: 'todo', checked: false } }
      return todos.concat(action.todo);
    case "REMOVE": // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE": // 토글
      // { type: 'REMOVE', id: 1 }
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id, ref를 사용하여 변수담기
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((value): void => {
    const todo: ITodo = {
      id: nextId.current,
      value,
      checked: false
    };

    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number): void => {
    // const filteredTodos: ITodo[] = todos.filter(todo => todo.id !== id);
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id: number): void => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoMain>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoMain>
  );
};

export default App;
