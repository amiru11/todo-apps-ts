import React from "react";
import TodoListItem from "./TodoListItem";
import { ListWrap } from "../styles/TodoList";

import { ITodos } from "../interfaces/common";

function TodoList({ ...props }: ITodos): JSX.Element {
  return (
    <ListWrap>
      {props.todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={props.onRemove}
          onToggle={props.onToggle}
        />
      ))}
    </ListWrap>
  );
}

export default TodoList;
