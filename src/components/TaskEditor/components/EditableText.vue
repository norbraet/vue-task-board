<script setup lang="ts">
    const props = defineProps<{ label: string }>()
    const model = defineModel<string>()
</script>

<template>
    <label class="block">
        <span class="text-lg">{{ props.label }}</span>
        <input
            v-model="model"
            type="text"
            class="hover:bg-backdrop-light mt-1 w-full rounded px-2 py-1"
        />
    </label>
</template>
