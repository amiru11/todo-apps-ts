import React from "react";
import TodoListItem, { ITodo } from "./TodoListItem";

export interface ITodos {
  todos: ITodo[];
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
