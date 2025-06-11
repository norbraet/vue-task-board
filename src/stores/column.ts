import type { Column } from '@/types/Column'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColumnStore = defineStore('column', () => {
    // TODO: Die Columns hier sind hardcodiert, müssten aber vom User erstellbar sein
    const columns = ref<Column[]>([
        { id: crypto.randomUUID(), title: 'Open' },
        { id: crypto.randomUUID(), title: 'Work in Progress' },
        { id: crypto.randomUUID(), title: 'Feedback' },
        { id: crypto.randomUUID(), title: 'Testing' },
        { id: crypto.randomUUID(), title: 'Finished' },
    ])

    return { columns }
})
