<script setup lang="ts" generic="T extends Record<string, unknown>">
    const props = defineProps<{
        label: string
        options: T[]
        labelKey: keyof T
        valueKey: keyof T
    }>()
    const model = defineModel<string>()
</script>

<template>
    <label class="block">
        <span class="text-lg">
            {{ props.label }}
        </span>
        <select v-model="model" class="hover:bg-backdrop-light mt-1 w-full rounded px-2 py-1">
            <option disabled value="Select a value" class="bg-white dark:bg-gray-800" />
            <option
                v-for="option in props.options"
                :key="String(option[props.valueKey])"
                :value="String(option[props.valueKey])"
                class="bg-white dark:bg-gray-800"
            >
                {{ option[props.labelKey] }}
            </option>
        </select>
    </label>
</template>
