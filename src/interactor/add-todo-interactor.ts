import { Todo, DeliveryDate } from '../view-model/todo'

// TODOを追加する。期限は現在の時間から一週間後にする
// TODOを追加するというユーザーアクションから発生する物事を書く箇所
// 肥大化しやすいので、肥大化しそうだなとおもったら細かくコードをsplitしていったほうがよい
// このサンプルだと一週間後の日付を返す部分は切り出してもよい
export const addTodo = (name: string, todoList: ReadonlyArray<Todo>): Promise<ReadonlyArray<Todo>> => {
  const lastTodoId = Math.max(...todoList.map(t => t.id))

  const deliverDate = new Date()
  deliverDate.setDate(new Date().getDate() + 7)

  return Promise.resolve([
    ...todoList,
    {
      name,
      id: lastTodoId + 1,
      deliveryDate: deliverDate.toISOString() as DeliveryDate
    }
  ])
}
