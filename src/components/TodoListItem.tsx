import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

interface ItodoProps {
  key: number;
  todo: Itodo;
}

export interface Itodo {
  id: number;
  value: string;
  checked: boolean;
}

function TodoListItem({ key, todo }: ItodoProps): JSX.Element {
  const { value, checked } = todo;
  return (
    <div key={key}>
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
