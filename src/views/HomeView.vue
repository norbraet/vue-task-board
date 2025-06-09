<script setup lang="ts">
import Column from '@/components/Column.vue'
import { useTasks } from '@/composables/useTasks'

const { addTask, removeTask, updateTask, getTasksByColumn } = useTasks()
const columns = [
  { id: 'open', title: 'Open' },
  { id: 'wip', title: 'Work in Progress' },
  { id: 'feedback', title: 'Feedback' },
  { id: 'testing', title: 'Testing' },
  { id: 'finished', title: 'Finished' },
]

</script>

<template>
  <main class="flex flex-col gap-4">
    <h2 class="text-xl font-semibold my-4 text-gray-400 dark:text-white">Issue-Board</h2>
    <section class="flex gap-2 my-4 overflow-scroll">
      <Column 
        v-for="columnn in columns"
        :key="columnn.id"
        :id="columnn.id"
        :title="columnn.title"
        :tasks="getTasksByColumn(columnn).value"
        @add-task="addTask"
        @remove-task="removeTask"
        @move-task="updateTask"
      />
    </section>
  </main>
</template>
