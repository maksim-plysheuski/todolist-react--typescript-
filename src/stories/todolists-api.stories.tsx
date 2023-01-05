import React, {useEffect, useState} from "react"
import {todolistAPI} from "../api/todolist-api";


export default {
    title: "API"
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((response) => setState(response.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [inputValue, setInputValue] = useState("")

    const createTodolist = () => {
        todolistAPI.createTodolist(inputValue)
            .then((response) => setState(response.data))
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text" placeholder="title" onChange={(e) => setInputValue(e.currentTarget.value)}/>
            <button onClick={createTodolist}>Create Todolist</button>
        </div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [inputValue, setInputValue] = useState("")

    const deleteTodolist = () => {
        todolistAPI.deleteTodolist(inputValue)
            .then((response) => setState(response.data))
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text" placeholder="todolist ID" onChange={(e) => setInputValue(e.currentTarget.value)}/>
            <button onClick={deleteTodolist}>delete Todolist</button>
        </div>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")

    const changeTitle = () => {
        todolistAPI.updateTodolist(id, title)
            .then((response) => setState(response.data))
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text" placeholder="todolist ID" onChange={(e) => setId(e.currentTarget.value)}/>
            <input type="text" placeholder="new title" onChange={(e) => setTitle(e.currentTarget.value)}/>
            <button onClick={changeTitle}>change todolist title</button>
        </div>
    </div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [id, setId] = useState("")

    const getTasks = () => {
        todolistAPI.getTasks(id)
            .then((response) => {
                setState(response.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text" placeholder="todolist ID" onChange={(e) => setId(e.currentTarget.value)}/>
            <button onClick={getTasks}>Get tasks</button>
        </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")

    const createTask = () => {
        todolistAPI.createTask(id, title)
            .then((response) => {
                setState(response.data)
            })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text" placeholder="todolist ID" onChange={(e) => setId(e.currentTarget.value)}/>
            <input type="text" placeholder="task title" onChange={(e) => setTitle(e.currentTarget.value)}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "5d736201-dd9a-4e0c-a08f-1b00c7cf5c2a"
        const taskId = "725ead46-00b7-4253-9eba-607909c99d77"
        todolistAPI.deleteTask(todolistId, taskId)
            .then((response) => {
                setState(response.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "5d736201-dd9a-4e0c-a08f-1b00c7cf5c2a"
        const taskId = "725ead46-00b7-4253-9eba-607909c99d77"
        todolistAPI.updateTask(todolistId, taskId, "lalala")
            .then((response) => setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
