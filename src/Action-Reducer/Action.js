import { ALL, COMPLETED, CREATE, MARKASDONE, REMOVE, UNCOMPLETED } from "./Constants"

export const createTodo = (text, id) => {
    return {
        type: CREATE,
        payload: { text: text, isCompleted: false, id: id, createdAt: new Date().toLocaleString() }
    }
}

export const deleteTodo = (todo) => {
    return {
        type: REMOVE,
        payload: todo
    }
}

export const completeTodo = (todo) => {
    return {
        type: MARKASDONE,
        payload: { ...todo, isCompleted: !todo.isCompleted }
    }
}

export const editTodo = (todo) => {
    return deleteTodo(todo);
}

export const completedTodos = (todo) => {
    return {
        type: COMPLETED,
        payload: todo
    }
}

export const uncompletedTodos = (todo) => {
    return {
        type: UNCOMPLETED,
        payload: todo
    }
}

export const allTodos = (todo) => {
    return {
        type: ALL,
        payload: todo
    }
}

export const status = (type) => {
    return {
        type: "set" + type,
        payload: type
    }
}