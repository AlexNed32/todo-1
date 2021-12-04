import React, { useState,useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import {
    Form,
    InputGroup,
    Input,
    Button
} from 'reactstrap'

export default function TodoForm() {
    const { addTodo } = useContext(GlobalContext)
    const [inputValue, setInputValue] = useState('');

    function handlerSubmit(e) {
        e.preventDefault();
        setInputValue(e.target.value)
        if (inputValue) {
            const newTodo = {
                id: Date.now(),
                title: inputValue,
                status: false
            }
            addTodo(newTodo);
        }
        setInputValue('');
    }

    return (
        <Form className="mb-4" onSubmit={handlerSubmit}>
            <InputGroup>
                <Input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    type="text"
                    placeholder="What to do?"
                />
                <Button type="submit">Add</Button>
            </InputGroup>
        </Form>
    )
}
