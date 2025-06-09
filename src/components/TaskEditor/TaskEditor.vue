<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { Task } from '@/types/Task'
import EditableText from '@/components/TaskEditor/components/EditableText.vue'
import EditableTextarea from '@/components/TaskEditor/components/EditableTextarea.vue'

const props = defineProps<{ task: Task }>()
const emit = defineEmits(['update:task'])

const editableTask: Ref<Task> = ref({ ...props.task })

watch(() => props.task, (newVal: Task) => {
    editableTask.value = { ...newVal }
})

function save() {
    emit('update:task', editableTask.value)
}
</script>

<template>
    <div class="p-4 space-y-4">
        <EditableText v-model="editableTask.title" label="Title" />
        <EditableTextarea v-model="editableTask.description" label="Description" />
        <button @click="save" class="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </div>   
</template>