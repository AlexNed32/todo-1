import React, {useEffect, useContext} from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm'
import { GlobalContext } from '../context/GlobalState';

export const TodoPage = () => {
    const {todos} = useContext(GlobalContext)
    console.log('todos',todos.todos)

    return (
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
            <TodoForm/>
            {
                !todos.length
                    ? <h2>Add Todo</h2>
                    : todos.map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                            />
                        )
                    })
            }
        </div>
    )
}
