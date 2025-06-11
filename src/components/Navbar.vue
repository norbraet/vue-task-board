<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router'

    const isActiveLink = (routePath) => {
        const route = useRoute()
        return (route.path = routePath)
    }
</script>

<template>
    <header>
        <nav>
            <ol class="flex gap-10">
                <li>
                    <RouterLink to="/">Home </RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
            </ol>
        </nav>
    </header>
</template>
