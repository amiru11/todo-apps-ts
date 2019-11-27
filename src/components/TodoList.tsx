import React from "react";
import TodoListItem, { ITodo } from "./TodoListItem";
import { ListWrap } from "../styles/TodoList";

export interface ITodos {
  todos: ITodo[];
  onRemove: (id: number) => void;
}

function TodoList({ todos, onRemove }: ITodos): JSX.Element {
  return (
    <ListWrap>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ListWrap>
  );
}

export default TodoList;
