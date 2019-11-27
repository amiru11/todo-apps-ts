import React from "react";
import TodoListItem, { ITodo } from "./TodoListItem";

export interface ITodos {
  todos: ITodo[];
  onRemove: any;
}

function TodoList({ todos, onRemove }: ITodos): JSX.Element {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
