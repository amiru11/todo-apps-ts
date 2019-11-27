import React, { useReducer, useCallback } from "react";
import { MdAdd } from "react-icons/md";

interface ITodoInsertProps {
  onInsert: (value: string) => void;
}

type stateType = {
  value: string;
};

function inputReducer(state: stateType, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function TodoInsert({ onInsert }: ITodoInsertProps): JSX.Element {
  const [state, dispatch] = useReducer(inputReducer, {
    value: ""
  });

  const { value } = state;

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>): void => dispatch(target),
    []
  );

  const reset = (): void => {
    dispatch({ value: "" });
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      onInsert(value);
      reset();
      event.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
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
