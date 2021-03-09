import { Todo, DeliveryDate } from '../view-model/todo'
import { FetchTodoListApi, fetchTodoListApi } from '../api/todo-list-api'

export type LoadTodoList = () => Promise<ReadonlyArray<Todo>>;

type Dependencies = {
  fetchTodoListApi: FetchTodoListApi
}
// NOTE: APIからデータを取得してフロントエンドでもってるview-modelに変換して返す
// NOTE: 依存性の注入 変換処理が複雑でテストしたいがAPIへのアクセスを内包していて、普通にfetchTodoListApiの呼び出しを中に書くとテストができない
// そのため引数でAPIクライアントを受けとれるようにして、テストが書けるようにしている
export const loadTodoList: (deps: Dependencies) => LoadTodoList =  (
  deps
) => async () => {
  const todoResult = await deps.fetchTodoListApi()
  return todoResult.todos.map(t => {
    return {
      id: t.id,
      name: t.name,
      deliveryDate: new Date(t.deliveryDate).toISOString() as DeliveryDate
    }
  })
}

// フロントエンドアプリケーションで使う実装を注入して依存性の解決
export default loadTodoList({
  fetchTodoListApi: fetchTodoListApi
})
