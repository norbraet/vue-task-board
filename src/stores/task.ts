import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Task } from '@/types/Task'
import type { Column } from '@/types/Column'
import axios from 'axios'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref<Task[]>([])
    const nextTicketNumber = ref(1)

    async function initTasks() {
        try {
            const res = await axios.get('api/tasks')
            tasks.value = res.data

            const maxTicket = tasks.value.reduce(
                (max, task) => Math.max(max, Number(task.ticketNumber) || 0),
                0
            )
            nextTicketNumber.value = maxTicket + 1
        } catch (error) {
            console.error('Error fetching jobs', error)
        }
    }

    async function addTask({ title, columnId }: { title: string; columnId: string }) {
        const task: Task = {
            id: crypto.randomUUID(),
            title,
            description: 'No description feature yet',
            ticketNumber: nextTicketNumber.value++,
            columnId,
        }
        try {
            const res = await axios.post('api/tasks', task)
            tasks.value.push(res.data)
        } catch (error) {
            console.error('Error posting task', error)
        }
    }

    async function removeTask(task: Task) {
        const id = task.id
        try {
            await axios.delete(`api/tasks/${task.id}`)
            tasks.value = tasks.value.filter((t) => t.id !== id)
        } catch (error) {
            console.error('Error deleting task', error)
        }
    }

    async function updateTask(updatedTask: Task) {
        const id = tasks.value.findIndex((task) => task.id === updatedTask.id)

        if (id === -1) throw new Error('No Task Object with the given id')

        try {
            const res = await axios.put(`api/tasks/${updatedTask.id}`, updatedTask)
            tasks.value[id] = res.data
        } catch (error) {
            console.error('Error updating task', error)
        }
    }

    function getTaskByColumn(column: Column) {
        return computed(() => tasks.value.filter((task) => task.columnId == column.id))
    }

    return { tasks, initTasks, addTask, removeTask, updateTask, getTaskByColumn, nextTicketNumber }
})
