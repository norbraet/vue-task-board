<script setup lang="ts">
    import { ref } from 'vue'
    import TaskCard from '@/components/TaskCard.vue'
    import type { Task, NewTaskData } from '@/types/Task'
    import type { Column } from '@/types/Column'

    const props = defineProps<Column & { tasks: Task[] }>()
    const emit = defineEmits<{
        (e: 'add-task', info: NewTaskData): void
        (e: 'remove-task', task: Task): void
        (e: 'move-task', task: Task): void
        (e: 'update-task', task: Task): void
    }>()

    const newTaskTitle = ref('')
    const isDragOver = ref(false)
    const errorMessage = ref('')

    function onDragOver() {
        isDragOver.value = true
    }

    function onDragLeave() {
        isDragOver.value = false
    }

    function addTask() {
        const title = newTaskTitle.value.trim()

        if (!title) {
            errorMessage.value = 'Input field is empty. Please type in a task name'
            return
        }

        emit('add-task', { title: newTaskTitle.value, columnId: props.id })
        newTaskTitle.value = ''
    }

    function removeTask(task: Task) {
        emit('remove-task', task)
    }

    function updateTask(task: Task) {
        emit('update-task', task)
    }

    function onDrop(event: DragEvent) {
        const data = event.dataTransfer?.getData('application/json')

        if (!data) return

        isDragOver.value = false
        const task: Task = JSON.parse(data)
        if (task.columnId === props.id) return // Drag and Drop on the same Table. May need to remove this later if i want to reorder tasks

        emit('move-task', { ...task, columnId: props.id })
    }
</script>

<template>
    <div
        class="flex flex-col gap-4"
        @dragover.prevent="onDragOver"
        @dragleave="onDragLeave"
        @drop="onDrop"
    >
        <div class="rounded-md bg-gray-100 p-4 shadow dark:bg-gray-800">
            <h3 class="mb-4 text-sm font-semibold uppercase">{{ props.title }}</h3>
        </div>
        <div class="rounded-md bg-gray-100 p-4 shadow dark:bg-gray-800">
            <div class="mb-4 space-y-2" :class="{ 'ring-4 ring-blue-400': isDragOver }">
                <TaskCard
                    v-for="task in props.tasks"
                    :key="task.id"
                    :task="task"
                    @remove="removeTask"
                    @update="updateTask"
                />
            </div>
            <div class="flex gap-2 flex-col">
                <div class="flex items-center gap-2">
                    <input
                        v-model="newTaskTitle"
                        type="text"
                        placeholder="Create new Issue..."
                        :class="[
                            'flex-1 rounded-lg border px-3 py-2 text-sm dark:bg-gray-700',
                            errorMessage
                                ? 'border-red-500 text-red-500'
                                : 'border-gray-300 dark:border-gray-600',
                        ]"
                        @keyup.enter="addTask"
                        @input="errorMessage = ''"
                    />
                    <button
                        class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:cursor-pointer hover:bg-blue-700"
                        @click="addTask"
                    >
                        Add
                    </button>
                </div>
                <small class="block text-red-500 break-words" v-if="errorMessage">
                    {{ errorMessage }}
                </small>
            </div>
        </div>
    </div>
</template>
