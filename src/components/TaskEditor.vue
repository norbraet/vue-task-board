<script setup lang="ts">
import type { Task } from '@/types/Task';


const props = defineProps<{ task: Task}>()
const emit = defineEmits(['task-save'])

</script>

<template>
    <form @submit.prevent="emit('task-save', task)">
        <button type="submit">Save</button>
    </form>
</template>