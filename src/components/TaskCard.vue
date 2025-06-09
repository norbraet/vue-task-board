<script setup lang="ts">
import type { Task } from '@/types/Task'

const props = defineProps<{ task: Task }>()
const emit = defineEmits(['remove'])

function onDragStart(event: DragEvent) {
    event.dataTransfer?.setData('application/json', JSON.stringify(props.task))
}
    
</script>

<template>
    <div 
        class="bg-background p-4 rounded mb-2 shadow"
        draggable="true"
        @dragstart="onDragStart"
    >
        <h4>{{ props.task.title }}</h4>
        <p>#{{ props.task.ticketNumber }}</p>
        <button @click="emit('remove', props.task)" class="text-red-500 text-xs mt-2 p-2 hover:outline-solid">Löschen</button>
    </div>
</template>