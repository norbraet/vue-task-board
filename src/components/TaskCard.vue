<script setup lang="ts">
    defineProps<{
        title: string,
        description: string
    }>()

    
</script>

<template>
    <p>{{ title }}</p>
    <p>{{ description }}</p>
    <button>Löschen</button>
</template>