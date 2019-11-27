import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

interface ITodoProps {
  todo: ITodo;
  onRemove: any;
}

export interface ITodo {
  id: number;
  value: string;
  checked: boolean;
}

function TodoListItem({ todo, onRemove }: ITodoProps): JSX.Element {
  const { id, value, checked } = todo;
  return (
    <div>
      <div className="checkbox">
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{value}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default TodoListItem;
