import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import { Button, Form, Input } from "reactstrap";


export const EditPage = () => {
    const { id } = useParams();
    const [selectedTodo, setSetlectedTodo] = useState({
        id: '',
        title: ''
    });
    const { todos, editTodos } = useContext(GlobalContext);


    useEffect(() => {
        const todoId = id;
        const selectedTodo = todos.find(todo => todo.id === Number(todoId))
        setSetlectedTodo(selectedTodo)
    }, [id, todos])

    const onSubmit = (e) => {
        e.preventDefault();
        editTodos(selectedTodo);
    }

    const onChange = (e) => {
        setSetlectedTodo({...selectedTodo, title: e.target.value})
    }

    return (
        <div className="container">
            <h1 className="mb-4">Edit Page</h1>
            <Form onSubmit={onSubmit}>
                <Input
                    value={selectedTodo.title}
                    onChange={onChange}
                    className="mb-2"
                    placeholder="Edit"
                    name="title"
                />
                <Button className="btn btn-success me-2">Save</Button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </Form>
        </div>
    )
}
