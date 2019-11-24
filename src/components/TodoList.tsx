import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(): JSX.Element {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}

export default TodoList;
