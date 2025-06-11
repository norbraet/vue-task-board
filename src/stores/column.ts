import type { Column } from '@/types/Column'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColumnStore = defineStore('column', () => {
    const columns = ref<Column[]>([
        { id: 'open', title: 'Open' },
        { id: 'wip', title: 'Work in Progress' },
        { id: 'feedback', title: 'Feedback' },
        { id: 'testing', title: 'Testing' },
        { id: 'finished', title: 'Finished' },
    ])

    return { columns }
})
