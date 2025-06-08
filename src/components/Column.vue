<script setup lang="ts">
import { ref } from 'vue'
import TaskCard from '@/components/TaskCard.vue'
import type { Task } from '@/types/task'
import type { Column } from '@/types/Column'

const props = defineProps<Column & { tasks: Task[] }>()
const emit = defineEmits(['add-task', 'remove-task'])

const newTaskTitle = ref('')

function addTask() {
    const title = newTaskTitle.value.trim()
    
    if (!title) return
    
    emit('add-task', { title: newTaskTitle.value, columnId: props.id })
    newTaskTitle.value = ''
}

function removeTask(task: Task) {
    emit('remove-task', task)
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow">
            <h3 class="text-sm uppercase font-semibold mb-4 text-gray-400 dark:text-white">{{ props.title }}</h3>
        </div>
        <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow">
            <div class="space-y-2 mb-4">
                <TaskCard 
                    v-for="task in props.tasks"
                    :key="task.id"
                    :task="task"
                    @remove="removeTask"
                />
            </div>
            <div class="flex gap-2">
                <input 
                    v-model="newTaskTitle"
                    type="text"
                    placeholder="Create new Issue..."
                    class="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm"
                    @keyup.enter="addTask"
                />
                <button 
                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                    @click="addTask"
                >
                    Add
                </button>
            </div>
        </div>
    </div>
</template>


