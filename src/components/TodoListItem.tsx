import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

interface ITodoProps {
  key: number;
  todo: ITodo;
}

export interface ITodo {
  id: number;
  value: string;
  checked: boolean;
}

function TodoListItem({ todo }: ITodoProps): JSX.Element {
  const { value, checked } = todo;
  return (
    <div>
      <div className="checkbox">
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{value}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default TodoListItem;
