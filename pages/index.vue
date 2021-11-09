<template>
  <section class="container">
    <h1>Composition API</h1>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add</button>
    <div>
      <ul>
        <li v-for="(todo, index) in todoState.todoState.todos" :key="todo.id">
          <input @change="toggleTodoIsDone(index)" type="checkbox" />
          <span>{{ todo.content }} / {{ index }}</span>
          <span @click="deleteTodo(index)">[x]</span>
        </li>
      </ul>
    </div>
    <pre>{{ todoState }}</pre>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@nuxtjs/composition-api'
import { TodoStateKey } from '~/composables/useTodoState'
import { useAddTodo } from '~/composables/useAddTodo'
import { useDeleteTodo } from '~/composables/useDeleteTodo'
import { useToggleTodoIsDone } from '~/composables/useToggleTodoIsDone'

export default defineComponent({
  setup(props) {
    const todoState = inject(TodoStateKey)
    if (!todoState) {
      throw new Error(`${TodoStateKey} is not provided`)
    }

    const { newTodo, addTodo } = useAddTodo()
    const { deleteTodo } = useDeleteTodo()
    const { toggleTodoIsDone } = useToggleTodoIsDone()

    return {
      todoState,
      newTodo,
      addTodo,
      deleteTodo,
      toggleTodoIsDone,
    }
  },
})
</script>
