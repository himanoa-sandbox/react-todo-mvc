import React,{ useEffect, useReducer, useCallback } from 'react'
import todoListLoader from '../data-loader/todo-list-loader'
import { addTodo } from '../interactor/add-todo-interactor'
import { Todo } from '../view-model/todo'
import { TodoList } from '../partial/todo-list'
import { TodoForm } from '../partial/todo-form'

type State = {
  isLoading: boolean,
  todos: ReadonlyArray<Todo>
}

type Action = {
  type: 'started-load' 
} | { type: 'loaded-todo-list', payload: { todos: ReadonlyArray<Todo> } }

const reducer = (prevState: State, action: Action): State => {
  switch(action.type) {
    case 'started-load':
      return { ...prevState, isLoading: true }
    case 'loaded-todo-list': 
      return { isLoading: false, todos: action.payload.todos }
    default:
      return prevState
  }
}

export const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, { isLoading: false, todos: [] })

  useEffect(() => {
    dispatch({type: "started-load"})
    todoListLoader().then((todos) => {
      dispatch({type: 'loaded-todo-list', payload: { todos }})
    })
  }, [])

  const handleAddTodo = useCallback((name: string) => {
    dispatch({type: 'started-load'})
    addTodo(name, state.todos).then(todos => {
      dispatch({type: 'loaded-todo-list', payload: { todos }})
    })
  }, [state.todos])

  if(state.isLoading) {
    return <p>loading..</p>
  }

  return (
    <section>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList todos={state.todos}/>
    </section>
  )
}
