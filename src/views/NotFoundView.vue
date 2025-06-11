<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="flex h-96 flex-col items-center justify-center text-center">
        <h1 class="text-xl font-bold">404 Not Found</h1>
        <p class="mb-5 text-xl">This page does not exist</p>
        <RouterLink
            to="/"
            class="mt-4 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
            Go Back
        </RouterLink>
    </section>
</template>
