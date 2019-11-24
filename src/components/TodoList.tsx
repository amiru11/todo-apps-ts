import React from "react";
import TodoListItem, { Itodo } from "./TodoListItem";

interface ITodos {
  todos: Itodo[];
}

function TodoList({ todos }: ITodos): JSX.Element {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
