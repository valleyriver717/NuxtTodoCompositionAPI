import { inject, ref } from '@vue/composition-api'
import { TodoStateKey } from './useTodoState'

export const useToggleTodoIsDone = () => {
  const todoState = inject(TodoStateKey)
  if (!todoState) {
    throw new Error(`${TodoStateKey} is not provided`)
  }

  const toggleTodoIsDone = (index: number) => {
    todoState.todoState.todos[index].isDone =
      !todoState.todoState.todos[index].isDone
  }

  return {
    toggleTodoIsDone,
  }
}
