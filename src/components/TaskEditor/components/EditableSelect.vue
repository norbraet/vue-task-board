<script setup lang="ts">
    const props = defineProps<{
        label: string
        options: string[]
    }>()
    const model = defineModel<string>()
</script>

<template>
    <label class="block">
        <span class="text-lg">
            {{ props.label }}
        </span>
        <select v-model="model" class="hover:bg-backdrop-light mt-1 w-full rounded px-2 py-1">
            <option v-for="option in props.options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </label>
</template>
