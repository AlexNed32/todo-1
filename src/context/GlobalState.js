import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    todos2: [
        { id: 1, title: 'Todo 1', status: false },
        { id: 2, title: 'Todo 2', status: false },
        { id: 3, title: 'Todo 3', status: false },
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            todos2: state.todos2
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
