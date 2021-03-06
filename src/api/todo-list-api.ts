// APIから帰ってくる型(もどき)。今回は仮起き
// タスクのtotalなどは今回の要件では使わないが、別の箇所では使ってるみたいなストーリーがあると思いこんでください
type TodoListApiResult = {
  total: number;
  todos: ReadonlyArray<{
    id: number;
    name: string
    // Unixtimestamp
    deliveryDate: number
  }>
}

// data-loaderで使う時は引数でこの型を受けるようにしておくと、data-loaderでDIしてテスト時にモックデータとかを差し込みやすくできるので型定義だけ分離する
export type FetchTodoListApi = () => Promise<TodoListApiResult>

export const fetchTodoListApi: FetchTodoListApi = () => {
  // NOTE: モック実装
  return Promise.resolve({
    total: 1,
    todos: [{
      id: 1,
      name: '退職',
      deliveryDate:0 
    }]
  })
}
