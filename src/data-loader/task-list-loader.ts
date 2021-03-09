import { Task, DeliveryDate } from '../view-model/task'
import { FetchTaskListApi, fetchTaskListApi } from '../api/task-list-api'

export type LoadTaskList = () => Promise<ReadonlyArray<Task>>;

type Dependencies = {
  fetchTaskListApi: FetchTaskListApi
}
// NOTE: APIからデータを取得してフロントエンドでもってるview-modelに変換して返す
// NOTE: 依存性の注入 変換処理が複雑でテストしたいがAPIへのアクセスを内包していて、普通にfetchTaskListApiの呼び出しを中に書くとテストができない
// そのため引数でAPIクライアントを受けとれるようにして、テストが書けるようにしている
export const loadTaskList: (deps: Dependencies) => LoadTaskList =  (
  deps
) => async () => {
  const taskResult = await deps.fetchTaskListApi()
  return taskResult.tasks.map(t => {
    return {
      id: t.id,
      name: t.name,
      deliveryDate: new Date(t.deliveryDate).toISOString() as DeliveryDate
    }
  })
}

// フロントエンドアプリケーションで使う実装を注入して依存性の解決
export default loadTaskList({
  fetchTaskListApi: fetchTaskListApi
})
