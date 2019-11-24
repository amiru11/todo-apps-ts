import React, { useReducer, useCallback } from "react";
import { MdAdd } from "react-icons/md";

type StateType = {
  value: string;
};

function inputReducer(state: StateType, action) {
  console.log("state", state);
  return {
    ...state,
    [action.name]: action.value
  };
}

function TodoInsert(): JSX.Element {
  const [state, dispatch] = useReducer(inputReducer, {
    value: ""
  });

  //
  const { value } = state;

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>): void => dispatch(target),
    []
  );

  return (
    <form className="TodoInsert">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={handleChange}
        name="value"
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
