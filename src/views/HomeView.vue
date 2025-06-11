<script setup lang="ts">
    import BoardColumn from '@/components/BoardColumn.vue'
    import { useTasks } from '@/composables/useTasks'
    import { useColumns } from '@/composables/useColumns'

    const { addTask, removeTask, updateTask, getTasksByColumn } = useTasks()
    const { columns } = useColumns()
</script>

<template>
    <main>
        <section class="container mx-auto flex flex-col gap-4">
            <h2 class="my-4 text-xl font-semibold">Issue-Board</h2>
            <div class="my-4 flex gap-4 overflow-auto">
                <BoardColumn
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
            </div>
        </section>
    </main>
</template>
