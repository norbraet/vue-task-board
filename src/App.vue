<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <nav>
      <ol class="flex gap-10">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ol>
    </nav>
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped>
  nav a.router-link-exact-active {
    color: var(--color-text);
  }
</style>  
