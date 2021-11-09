import {
  InjectionKey,
  onMounted,
  reactive,
  toRefs,
  watch,
} from '@vue/composition-api'
import { useLocalStorage } from '@vueuse/core'

export const useTodoState = () => {
  // const todoState = reactive({
  //   todos: new Array(),
  // })
  const todoState = useLocalStorage('tlca', {
    todos: new Array(),
  })

  return {
    // ...toRefs(todoState),
    todoState,
  }
}

type TodoStateType = ReturnType<typeof useTodoState>
export const TodoStateKey: InjectionKey<TodoStateType> = Symbol('TodoState')
