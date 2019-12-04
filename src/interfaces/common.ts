export interface ITodos {
  todos: ITodo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export interface ITodo {
  id: number;
  value: string;
  checked: boolean;
}
