import type { Column } from '@/types/Column'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useColumnStore = defineStore('column', () => {
    const columns = ref<Column[]>([])

    async function fetchColumns() {
        try {
            const res = await axios.get("api/columns")
            columns.value = res.data
        } catch (error) {
            console.error("Error fetching columns", error)
        }
    }

    async function addColumn(title: string) {
        const column: Column = {
            id: crypto.randomUUID(),
            title: title
        } 
        try {
            const res = await axios.post("api/columns", column)
            columns.value.push(res.data)
            
        } catch (error) {
            console.error('Error posting column', error)
        }
    }

    //TODO: Add updateColumn and deleteColumn functions for full CRUD operations

    return { columns, fetchColumns, addColumn }
})
