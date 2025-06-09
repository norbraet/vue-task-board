<script setup lang="ts">

const props = defineProps<{ label: string }>()
const model = defineModel<string>()
</script>

<template>
    <label class="block">
        <span class="text-lg">
            {{ label }}
        </span>
        <textarea 
            v-model="model"
            class="px-2 py-1 rounded w-full mt-1 hover:bg-backdrop-light"
        />
    </label>
</template>