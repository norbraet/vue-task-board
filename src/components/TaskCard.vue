<script setup lang="ts">
import { ref, watch } from 'vue'
import Modal from './Modal.vue'
import TaskEditor from './TaskEditor/TaskEditor.vue';
import type { Task } from '@/types/Task'

const props = defineProps<{ task: Task }>()
const emit = defineEmits<{
    (e: "remove", task: Task): void,
    (e: "update", task: Task): void,
}>()
const open = ref(false)

function onDragStart(event: DragEvent) {
    event.dataTransfer?.setData('application/json', JSON.stringify(props.task))
}

function handleSave(updatedTask: Task) {
    emit('update', updatedTask)
    open.value = false
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
        <button @click.stop="emit('remove', props.task)" class="text-red-500 text-xs mt-2 p-2 hover:outline-solid">Löschen</button>
    </div>
    <Modal :open="open" @modal-close="open = false">
        <TaskEditor :task="props.task" @update:task="handleSave"/>
    </Modal>
</template>