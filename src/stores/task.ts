import { defineStore } from "pinia"
import { ref } from "vue"
import type { Task } from "@/types/task"
import type { Column } from "@/types/Column"

export const useTaskStore = defineStore('task', () => {
    const tasks = ref<Task[]>([])

    function addTask(task: Task) {
        tasks.value.push(task)
    }

    function removeTask(task: Task) {
        const id = task.id
        
        tasks.value = tasks.value.filter(t => t.id !== id)
    }

    function updateTask(updatedTask: Task) {
        const id = tasks.value.findIndex(task => task.id === updatedTask.id)

        if (id === -1) throw new Error("No Task Object with the given id")

        tasks.value[id] = { ...tasks.value[id], ...updatedTask }  
    }

    function getTaskByColumn(column: Column) {
        return tasks.value.filter(task => task.columnId == column.id)
    }

    return { tasks, addTask, removeTask, updateTask, getTaskByColumn }

})