import type { Column } from '@/types/Column'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useColumnStore = defineStore('column', () => {
    const columns = ref<Column[]>([])

    async function fetchColumns() {
        try {
            const res = await axios.get('api/columns')
            columns.value = res.data
        } catch (error) {
            console.error('Error fetching columns', error)
        }
    }

    async function addColumn(title: string) {
        const column: Column = {
            id: crypto.randomUUID(),
            title: title,
        }
        try {
            const res = await axios.post('api/columns', column)
            columns.value.push(res.data)
        } catch (error) {
            console.error('Error posting column', error)
        }
    }

    async function deleteColumn(column: Column) {
        // TODO: es muss noch geklärt werden was mit den tickets passiert, die in diesem Column sind. 
        // Dazu brauche ich sowas wie ein Backlog damit die dort hin geschoben werden oder man kann 
        // ein Ziel Column angeben wohin die Tickets verschoeben werden sollen
        const id = column.id
        try {
            await axios.delete(`api/tasks/${id}`)
            columns.value = columns.value.filter((t) => t.id !== id)
        } catch (error) {
            console.error('Error deleting column', error)
        }
    }

    async function updateColumn(updatedColumn: Column) {
        const id = columns.value.findIndex((column) => column.id === updatedColumn.id)

        if (id === -1) throw new Error('No Column Object with the given id')

        try {
            const res = await axios.put(`api/tasks/${updatedColumn.id}`, updatedColumn)
            columns.value[id] = res.data
        } catch (error) {
            console.error('Error updating column', error)
        }
    }

    return { columns, fetchColumns, addColumn, deleteColumn, updateColumn }
})
