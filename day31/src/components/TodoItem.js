//@flow
import React from 'react'
import type { TodoItemProps } from '../definitions/TodoTypeDefinition.js'

const TodoItem = ({ title, style, onItemClick }: TodoItemProps) => (
   <li
      onClick={() => {
        onItemClick()
      }}
      style={style}
      >
      {title}
    </li>
)

//匯出TodoItem模組
export default TodoItem