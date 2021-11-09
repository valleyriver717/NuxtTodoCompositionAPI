import { inject } from '@vue/composition-api'
import { TodoStateKey } from './useTodoState'

export const useDeleteTodo = () => {
  const todoState = inject(TodoStateKey)
  if (!todoState) {
    throw new Error(`${TodoStateKey} is not provided`)
  }

  const deleteTodo = (index: number) => {
    todoState.todoState.todos.splice(index, 1)
  }

  return {
    deleteTodo,
  }
}
