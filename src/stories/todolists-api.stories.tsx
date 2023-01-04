import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "791c9a5e-8560-4dfd-93a4-4dcc5b90909e"
    }
})

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        instance.get("todo-lists")
            .then((response) => setState(response.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        instance.post("todo-lists", {title: "Whats to buy"})
            .then((response) =>  setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = "df4d41e2-b25b-47cb-8a88-0ac4114e251e"
        instance.delete(`todo-lists/${id}`)
            .then((response) => setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = "0ce9cf7c-d0bd-4db0-a284-35a927e0e5c7"
        instance.put(`todo-lists/${id}`, {title: "new-title"})
            .then((response) => setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
