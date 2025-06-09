<script setup lang="ts">

const props = defineProps<{ label: string }>()
const model = defineModel<string>()
</script>

<template>
    <label class="block">
        <span class="text-sm text-gray-500">
            {{ label }}
        </span>
        <textarea 
            v-model="model"
            class="border px-2 py-1 rounded w-full mt-1"
        />
    </label>
</template>