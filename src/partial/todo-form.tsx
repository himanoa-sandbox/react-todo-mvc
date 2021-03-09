import React, { useState, useCallback } from 'react'

type Props = {
  handleAddTodo: (name: string) => void
};

export const TodoForm: React.FC<Props> = (props) => {
  const [inputState, setInputState]  = useState('')
  const handleAddTodo = useCallback(() => props.handleAddTodo(inputState), [props.handleAddTodo, inputState])

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" value={inputState} onChange={(e) => setInputState(e.target.value)} /> 
      <input type="submit"/>
    </form>
  )
}
