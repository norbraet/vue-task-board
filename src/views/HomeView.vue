<script setup lang="ts">
import Column from '@/components/Column.vue';
</script>

<template>
  <main class="flex flex-col gap-4">
    <h2 class="text-xl font-semibold my-4 text-gray-400 dark:text-white">Issue-Board</h2>
    <section class="flex gap-2 my-4 overflow-scroll">
      <Column title="Open" />
      <Column title="Work in Progress" />
      <Column title="Feedback" />
      <Column title="Testing" />
      <Column title="Finished" />
    </section>
  </main>
</template>
