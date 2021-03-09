import React from 'react'
import { Todo } from '../view-model/todo'

type Props = {
  todos: ReadonlyArray<Todo>
}

export const TodoList: React.FC<Props> = props =>{
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>タスク名</th>
        <th>期限</th>
      </tr>
      {props.todos.map(t => {
        return (
          <tr>
            <td>{t.id}</td>
            <td>{t.name}</td>
            <td>{t.deliveryDate}</td>
          </tr>
        )
      })}
    </table>
  )
}
