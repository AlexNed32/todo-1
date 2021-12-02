import React, {useState} from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

export const TodoPage = () => {
    const [todos, setTodos] = useState([])

    function addTodo(inputValue) {
        if (inputValue) {
            const newTodo = {
                id: Date.now(),
                title: inputValue,
                status: false
            }
            setTodos([...todos, newTodo])
        }
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function handlerToggle(id) {
        setTodos([...todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
        )])
    }
    return (
        <>
            <TodoForm
                addTodo={addTodo}
            />
            {
                !todos.length
                    ? <h2>Add Todo</h2>
                    : todos.map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                remove={removeTodo}
                                toggleTodo={handlerToggle}
                            />
                        )
                    })
            }
        </>
    )
}
