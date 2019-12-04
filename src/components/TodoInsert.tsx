import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import { InsertForm, InsertInput, InsertButton } from "../styles/TodoInsert";

interface ITodoInsertProps {
  onInsert: (value: string) => void;
}

function TodoInsert({ onInsert }: ITodoInsertProps): JSX.Element {
  const [value, setValue] = useState<string>("");

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>): void =>
      setValue(target.value),
    []
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      onInsert(value);
      setValue("");
      event.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <InsertForm onSubmit={onSubmit}>
      <InsertInput
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={handleChange}
        name="value"
        value={value}
      />
      <InsertButton>
        <MdAdd />
      </InsertButton>
    </InsertForm>
  );
}

export default TodoInsert;
