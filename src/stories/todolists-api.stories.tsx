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

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
