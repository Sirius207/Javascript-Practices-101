//@flow

export type TodoAddFormProps = {
  placeholderText: string,
  onItemAdd: (x: Item) => void,
}

export type TodoEditFormProps = {
  title: string,
  onItemUpdate: (x: string) => void,
}

export type TodoListProps = {
  children?: React$Element<*>,
}

export type TodoItemProps = { 
  title: string,
  style: Object,
  onItemClick: Function,
}

export type Item = {
  id: number,
  title: string,
  isCompleted: boolean,
  isEditing: boolean,
}