<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import AppNavbar from '@/components/AppNavbar.vue'
    import AppFooter from '@/components/AppFooter.vue'
    import { onMounted } from 'vue'
    import { useTasks } from '@/composables/useTasks'
    import { useColumns } from '@/composables/useColumns'

    const { initTasks } = useTasks()
    const { fetchColumns } = useColumns()
 
    onMounted(async () => {
        initTasks()
        fetchColumns()
    })
</script>

<template>
    <AppNavbar />

    <RouterView />
    <AppFooter />
</template>
