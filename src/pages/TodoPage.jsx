import React, {useState, useContext} from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { GlobalContext } from '../context/GlobalState';

export const TodoPage = () => {
    const { todos2 } = useContext(GlobalContext)
    console.log(todos2)

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
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
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
        </div>
    )
}
