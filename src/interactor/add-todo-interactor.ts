import { Task, DeliveryDate } from '../view-model/task'

// TODOを追加する。期限は現在の時間から一週間後にする
export const addTodo = (name: string, taskList: ReadonlyArray<Task>): Promise<ReadonlyArray<Task>> => {
  const lastTodoId = Math.max(...taskList.map(t => t.id))

  const deliverDate = new Date()
  deliverDate.setDate(new Date().getDate() + 7)

  return Promise.resolve([
    ...taskList,
    {
      name,
      id: lastTodoId + 1,
      deliveryDate: deliverDate.toISOString() as DeliveryDate
    }
  ])
}
