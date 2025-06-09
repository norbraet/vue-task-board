<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
import type { Task } from '@/types/Task'
import TaskEditor from './TaskEditor.vue';

const props = defineProps<{ task: Task }>()
const emit = defineEmits(['remove'])
const open = ref(false)

function onDragStart(event: DragEvent) {
    event.dataTransfer?.setData('application/json', JSON.stringify(props.task))
}

function handleSave(e: any) {
    console.log('e :>> ', e)
}
    
</script>

<template>
    <div 
        class="bg-background dark:bg-gray-900 p-4 rounded mb-2 shadow"
        draggable="true"
        @dragstart="onDragStart"
        @click="open = true"
    >
        <h4>{{ props.task.title }}</h4>
        <p>#{{ props.task.ticketNumber }}</p>
        <button @click="emit('remove', props.task)" class="text-red-500 text-xs mt-2 p-2 hover:outline-solid">Löschen</button>
    </div>
    <Modal :open="open" @modal-close="open = false">
        <TaskEditor :task="props.task" @task-save="handleSave"/>
        
        
        <h1 class="text-2xl font-bold mb-2">{{ props.task.title }}</h1>
        <p>{{ props.task.description }}</p>
    </Modal>
</template>