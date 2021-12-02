import React, { useState } from "react";
import {
    Form,
    InputGroup,
    Input,
    Button
} from 'reactstrap'

export default function TodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    function handlerSubmit(e) {
        e.preventDefault();
        setInputValue(e.target.value)
        addTodo(inputValue);
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
