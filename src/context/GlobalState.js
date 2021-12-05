import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    todos: [
        { id: 1, title: 'Todo 1', status: false },
        { id: 2, title: 'Todo 2', status: false },
        { id: 3, title: 'Todo 3', status: false },
    ]
};



// Create Context
export const GlobalContext = createContext(initialState);


// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, JSON.parse(localStorage.getItem('todos')));
    console.log('state', state)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])
    // console.log('local',JSON.parse(localStorage.getItem('todos')))
    //Actions
    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: id
        })
    }

    const addTodo = (newTodo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
    }

    const handlerToggle = (id) => {
        dispatch({
            type: 'SWITCH_STATUS',
            payload: id
        })
    }

    const editTodos = (todo) => {
        dispatch({
            type: 'EDIT_TODO',
            payload: todo
        })
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            removeTodo,
            addTodo,
            handlerToggle,
            editTodos
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
