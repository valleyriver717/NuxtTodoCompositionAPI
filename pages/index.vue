<template>
  <section class="container">
    <h1>Composition API</h1>
    <input type="text" v-model="newTodoName" />
    <button @click="setTodo">Add</button>
    <pre>{{ todoState }}</pre>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@nuxtjs/composition-api'
import { TodoStateKey } from '~/composables/useTodoState'

export default defineComponent({
  setup(props) {
    const newTodoName = ref<string>('')
    const todoState = inject(TodoStateKey)
    if (!todoState) {
      throw new Error(`${TodoStateKey} is not provided`)
    }
    const setTodo = () => {
      todoState.setTodoState({
        id: Math.random().toString(32).substring(2),
        isDone: false,
        content: newTodoName.value,
      })
    }

    return {
      newTodoName,
      todoState,
      setTodo,
    }
  },
})
</script>
