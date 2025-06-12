import type { Column } from '@/types/Column'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useColumnStore = defineStore('column', () => {
    // TODO: Die Columns hier sind hardcodiert, müssten aber vom User erstellbar sein
    const columns = ref<Column[]>()

    async function fetchColumns() {
        try {
            const res = await axios.get("api/columns")
            columns.value = res.data
        } catch (error) {
            console.error("Error fetching columns", error)
        }
    }

    return { columns, fetchColumns }
})
