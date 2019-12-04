import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

import { ITodo } from "../interfaces/common";

import { ItemWrap, Checkbox } from "../styles/TodoListItem";

interface ITodoProps {
  todo: ITodo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

function TodoListItem({ ...props }: ITodoProps): JSX.Element {
  const { id, value, checked } = props.todo;
  return (
    <ItemWrap>
      <Checkbox onClick={() => props.onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{value}</div>
      </Checkbox>
      <div className="remove" onClick={() => props.onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </ItemWrap>
  );
}

export default TodoListItem;
