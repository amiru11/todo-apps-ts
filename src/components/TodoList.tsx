import React from "react";
import TodoListItem from "./TodoListItem";
import { ListWrap } from "../styles/TodoList";

import { ITodos } from "../interfaces/common";

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
