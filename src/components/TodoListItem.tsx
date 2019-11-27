import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

import { ItemWrap, Checkbox } from "../styles/TodoListItem";

interface ITodoProps {
  todo: ITodo;
  onRemove: (id: number) => void;
}

export interface ITodo {
  id: number;
  value: string;
  checked: boolean;
}

function TodoListItem({ todo, onRemove }: ITodoProps): JSX.Element {
  const { id, value, checked } = todo;
  return (
    <ItemWrap>
      <Checkbox>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{value}</div>
      </Checkbox>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </ItemWrap>
  );
}

export default TodoListItem;
