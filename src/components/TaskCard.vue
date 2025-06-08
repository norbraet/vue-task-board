<script setup lang="ts">
import type { Task } from '@/types/task'

const props = defineProps<{ task: Task }>()
const emit = defineEmits(['remove'])
    
</script>

<template>
    <div class="bg-white p-4 rounded mb-2 shadow">
        <h4>{{ props.task.title }}</h4>
        <p>#{{ props.task.ticketNumber }}</p>
        <button @click="emit('remove', props.task)" class="text-red-500 text-xs mt-2 p-2 hover:outline-solid">Löschen</button>
    </div>
</template>