<script setup lang="ts">
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['modal-close'])
const modal = ref(null)

onClickOutside(modal, () => emit('modal-close'))

watch(() => props.open, (val) => {
    if (val) {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') emit('modal-close')
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }
})
</script>

<template>
    <Teleport to="#modal">
        <Transition name="modal" class="transition-all">
            <div v-if="open" class="fixed w-screen h-screen bg-background-darken top-0 left-0 flex justify-center items-center">
                <div 
                    class="modal relative bg-background w-full max-w-[1080px] p-10 rounded-lg shadow-2xl"
                    ref="modal"
                >
                    <button class="absolute top-4 right-4 bg-none border-none cursor-pointer" @click="emit('modal-close')">
                        X
                    </button>
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style>
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