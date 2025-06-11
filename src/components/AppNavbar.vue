<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router'

    const isActiveLink = (routePath: string) => {
        const route = useRoute()
        return route.path === routePath
    }
</script>

<template>
    <header>
        <nav class="container mx-auto">
            <ol class="flex items-center justify-end gap-4">
                <li class="py-2">
                    <RouterLink
                        to="/"
                        :class="[
                            isActiveLink('/')
                                ? 'bg-blue-600'
                                : 'hover:bg-blue-700 hover:text-white',
                            'rounded-md px-4 py-2 transition-colors',
                        ]"
                        >Home
                    </RouterLink>
                </li>
                <li class="py-2">
                    <RouterLink
                        to="/about"
                        :class="[
                            isActiveLink('/about')
                                ? 'bg-blue-600'
                                : 'hover:bg-blue-700 hover:text-white',
                            'rounded-md px-4 py-2 transition-colors',
                        ]"
                        >About
                    </RouterLink>
                </li>
            </ol>
        </nav>
    </header>
</template>
