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
        <select
            v-model="model"
            class="px-2 py-1 rounded w-full mt-1 hover:bg-backdrop-light"
        >
            <option
                v-for="option in props.options"
                :key="option"
                :value="option"
            >
                {{ option }}
            </option>
        </select>
    </label>
</template>