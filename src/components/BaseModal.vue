<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { onClickOutside } from '@vueuse/core'

    const props = defineProps<{ open: boolean }>()
    const emit = defineEmits<{
        (e: 'modal-close'): void
    }>()
    const modal = ref(null)

    onClickOutside(modal, () => emit('modal-close'))

    watch(
        () => props.open,
        (val) => {
            if (val) {
                const handler = (e: KeyboardEvent) => {
                    if (e.key === 'Escape') emit('modal-close')
                }
                window.addEventListener('keydown', handler)
                return () => window.removeEventListener('keydown', handler)
            }
        }
    )
</script>

<template>
    <Teleport to="#modal">
        <Transition name="modal" class="transition-all">
            <div
                v-if="open"
                class="bg-backdrop fixed top-0 left-0 flex h-screen w-screen items-center justify-center"
            >
                <div
                    class="modal bg-background relative w-full max-w-[1080px] rounded-lg p-10 shadow-2xl dark:bg-gray-900"
                    ref="modal"
                >
                    <button
                        class="absolute top-10 right-10 cursor-pointer border-none bg-none"
                        @click="emit('modal-close')"
                    >
                        X
                    </button>
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.25s ease;
    }

    .modal-enter-from,
    .modal-enter-to {
        opacity: 0;
        transform: scale(1.1);
    }
</style>
