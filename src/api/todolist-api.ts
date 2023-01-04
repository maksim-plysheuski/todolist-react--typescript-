import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "791c9a5e-8560-4dfd-93a4-4dcc5b90909e"
    }
})
type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ items: TodolistType }>>("todo-lists", {title: title})
    },
    deleteTodolist(id: string) {
        return instance.delete(`todo-lists/${id}`)
    },
    updateTodolist(id: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${id}`, {title: title})
    },
    getTasks(id: string) {
        return instance.get(`todo-lists/${id}/tasks`)
    },
    createTask(id: string, title: string) {
        return instance.post(`todo-lists/${id}/tasks`, {title: title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, id: string, title: string) {
        return instance.put(`todo-lists/${todolistId}/tasks/${id}`, {title: title})
    },
}