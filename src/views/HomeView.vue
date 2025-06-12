<script setup lang="ts">
    import { ref } from 'vue'
    import BoardColumn from '@/components/BoardColumn.vue'
    import { useTasks } from '@/composables/useTasks'
    import { useColumns } from '@/composables/useColumns'

    const { addTask, removeTask, updateTask, getTasksByColumn } = useTasks()
    const { columns, addColumn } = useColumns()
    const newColumnTitle = ref('')
    const errorMessage = ref('')

    function addNewColumn() {
        const title = newColumnTitle.value.trim()

        if (!title) {
            errorMessage.value = 'Input field is empty. Please type in a Column name'
            return
        }
        addColumn(title)
        newColumnTitle.value = ''
    }
</script>

<template>
    <main>
        <section class="container mx-auto flex flex-col gap-4">
            <h2 class="my-4 text-xl font-semibold">Issue-Board</h2>
            <button></button>

            <div class="flex gap-2">
                <label class="block">
                    <span class="block text-lg">New Column</span>
                    <input
                        v-model="newColumnTitle"
                        type="text"
                        placeholder="Create new Column..."
                        :class="[
                            'flex-1 rounded-lg border px-3 py-2 text-sm dark:bg-gray-700',
                            errorMessage
                                ? 'border-red-500 text-red-500'
                                : 'border-gray-300 dark:border-gray-600',
                        ]"
                        @keyup.enter="addNewColumn"
                        @input="errorMessage = ''"
                    />
                    <small class="block text-red-500" v-if="errorMessage">
                        {{ errorMessage }}
                    </small>
                </label>
                    
                <div>
                    <button
                        class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:cursor-pointer hover:bg-blue-700"
                        @click="addNewColumn"
                    >
                        Add
                    </button>
                </div>
            </div>
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
