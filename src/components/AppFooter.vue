<script setup lang="ts">
    const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="bg-gray-100 py-6 dark:bg-gray-800">
        <div class="container mx-auto px-4 text-center">
            <p class="text-sm">
                &copy; {{ currentYear }} Norbert Balaz. This is just a test project.
            </p>
            <div class="mt-2 flex justify-center space-x-4 text-sm">
                <a href="https://gitlab.com/norbraet"> GitLab </a>
                <a href="https://github.com/norbraet/"> GitHub </a>
            </div>
        </div>
    </footer>
</template>
