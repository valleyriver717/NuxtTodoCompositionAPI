import { InjectionKey, reactive, toRefs } from '@vue/composition-api'

interface Todo {
  id: string
  isDone: boolean
  content: string
}

export const useTodoState = () => {
  const todoState = reactive({
    todos: new Array(),
  })

  const setTodoState = (stateValue: Todo) => {
    todoState.todos.push(stateValue)
    console.log(todoState)
  }

  return {
    ...toRefs(todoState),
    setTodoState,
  }
}

type TodoStateType = ReturnType<typeof useTodoState>
export const TodoStateKey: InjectionKey<TodoStateType> = Symbol('TodoState')
