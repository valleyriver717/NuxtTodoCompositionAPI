<template>
  <section class="container">
    <nuxt />
  </section>
</template>

<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'
import { useTodoState, TodoStateKey } from '@/composables/useTodoState'

export default defineComponent({
  setup(props) {
    provide(TodoStateKey, useTodoState())
  },
})
</script>
