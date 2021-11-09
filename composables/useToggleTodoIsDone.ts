import { inject, ref, computed } from '@vue/composition-api'
import { TodoStateKey } from './useTodoState'

export const useToggleTodoIsDone = () => {
  const todoState = inject(TodoStateKey)
  if (!todoState) {
    throw new Error(`${TodoStateKey} is not provided`)
  }

  const checkTodoIsDone = (index: number) => {
    return todoState.todoState.value.todos[index].isDone
  }

  const toggleTodoIsDone = (index: number) => {
    todoState.todoState.value.todos[index].isDone =
      !todoState.todoState.value.todos[index].isDone
  }

  return {
    checkTodoIsDone,
    toggleTodoIsDone,
  }
}
