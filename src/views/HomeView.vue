<script setup lang="ts">
    import Column from '@/components/Column.vue'
    import { useTasks } from '@/composables/useTasks'
    import { useColumns } from '@/composables/useColumns'

    const { addTask, removeTask, updateTask, getTasksByColumn } = useTasks()
    const { columns } = useColumns()
</script>

<template>
    <main class="flex flex-col gap-4">
        <h2 class="my-4 text-lg font-semibold">Issue-Board</h2>
        <section class="my-4 flex gap-2 overflow-scroll">
            <Column
                v-for="columnn in columns"
                :key="columnn.id"
                :id="columnn.id"
                :title="columnn.title"
                :tasks="getTasksByColumn(columnn).value"
                @add-task="addTask"
                @remove-task="removeTask"
                @move-task="updateTask"
                @update-task="updateTask"
            />
        </section>
    </main>
</template>
