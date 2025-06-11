<script setup lang="ts">
    import { ref, watch } from 'vue'
    import type { Ref } from 'vue'
    import type { Task } from '@/types/Task'
    import EditableText from '@/components/TaskEditor/components/EditableText.vue'
    import EditableTextarea from '@/components/TaskEditor/components/EditableTextarea.vue'
    import EditableSelect from './components/EditableSelect.vue'
    import { useColumns } from '@/composables/useColumns'

    const props = defineProps<{ task: Task }>()
    const emit = defineEmits<{
        (e: 'update:task', task: Task): void
    }>()

    const { columns } = useColumns()

    const editableTask: Ref<Task> = ref({ ...props.task })
    console.log('editableTask :>> ', editableTask.value)
    watch(
        () => props.task,
        (newVal: Task) => {
            editableTask.value = { ...newVal }
        }
    )

    function save() {
        emit('update:task', editableTask.value)
    }
</script>

<template>
    <div class="space-y-4">
        <h2 class="mb-10">#{{ editableTask.ticketNumber }}</h2>
        <div class="space-y-4">
            <EditableText v-model="editableTask.title" label="Title" />
            <EditableTextarea v-model="editableTask.description" label="Description" />
            <EditableSelect
                v-model="editableTask.columnId"
                label="Status"
                :options="columns"
                labelKey="title"
                valueKey="id"
            />
            <button
                @click="save"
                class="rounded bg-blue-600 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-700"
            >
                Save
            </button>
        </div>
    </div>
</template>
