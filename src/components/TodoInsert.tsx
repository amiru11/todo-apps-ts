import React from "react";
import { MdAdd } from "react-icons/md";

function TodoInsert(): JSX.Element {
  return (
    <form className="TodoInsert">
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
