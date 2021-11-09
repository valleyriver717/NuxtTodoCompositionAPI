import { inject, ref } from '@vue/composition-api'
import { TodoStateKey } from './useTodoState'

export const useAddTodo = () => {
  const todoState = inject(TodoStateKey)
  if (!todoState) {
    throw new Error(`${TodoStateKey} is not provided`)
  }

  const newTodo = ref<string>('')

  const addTodo = () => {
    todoState.todoState.todos.push({
      id: Math.random().toString(32).substring(2),
      isDone: false,
      content: newTodo.value,
    })
  }

  return {
    newTodo,
    addTodo,
  }
}
