import React,{ useEffect, useReducer } from 'react'
import taskListLoader from '../data-loader/task-list-loader'
import { Task } from '../view-model/task'
import { TodoList } from '../partial/todo-list'

type State = {
  isLoading: boolean,
  tasks: ReadonlyArray<Task>
}

type Action = {
  type: 'started-load' 
} | { type: 'loaded-task-list', payload: { tasks: ReadonlyArray<Task> } }

const reducer = (prevState: State, action: Action): State => {
  switch(action.type) {
    case 'started-load':
      return { ...prevState, isLoading: true }
    case 'loaded-task-list': 
      return { isLoading: false, tasks: action.payload.tasks }
    default:
      return prevState
  }
}

export const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, { isLoading: false, tasks: [] })

  useEffect(() => {
    dispatch({type: "started-load"})
    taskListLoader().then((tasks) => {
      dispatch({type: 'loaded-task-list', payload: { tasks }})
    })
  }, [])

  return (
    <section>
      <TodoList tasks={state.tasks}/>
    </section>
  )
}
