export interface Task {
    id: string
    columnId: string
    title: string
    ticketNumber: number
    description: string
    status?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface NewTaskData {
    title: string
    columnId: string
}
