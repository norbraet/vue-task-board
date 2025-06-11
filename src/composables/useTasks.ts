import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

export function useTasks() {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    return {
        tasks,
        addTask: taskStore.addTask,
        removeTask: taskStore.removeTask,
        updateTask: taskStore.updateTask,
        getTasksByColumn: taskStore.getTaskByColumn,
    }
}
