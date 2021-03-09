import React from 'react'
import { Task } from '../view-model/task'

type Props = {
  tasks: ReadonlyArray<Task>
}

export const TodoList: React.FC<Props> = props =>{
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>タスク名</th>
        <th>期限</th>
      </tr>
      {props.tasks.map(t => {
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
