<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ 
    title: String
})
const emit = defineEmits(['add-task'])

const newTaskTitle = ref('')

function addTask() {
    const value = newTaskTitle.value.trim() 
    if(value) {
        emit('add-task', value)
        newTaskTitle.value = ''
    }
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow">
            <h3 class="text-sm uppercase font-semibold mb-4 text-gray-400 dark:text-white">{{ title }}</h3>
        </div>
        <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow">
            <div class="space-y-2 mb-4">
                <slot />
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