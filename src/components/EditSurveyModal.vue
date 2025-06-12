<script setup lang="ts">

</script>

<template>
    <div class="modal">
        <div class="modal-container">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .modal {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        background: rgba(0,0,0,0.2);
    }

    .modal-container {
        background: gray;
        padding: 3rem;
    }
</style>
