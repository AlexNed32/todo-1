import React from "react";
import { Button, Input } from "reactstrap";



export default function Todo({ todo, remove, toggleTodo }) {

    return (
        <article className="d-flex align-items-center flex-sm-fill justify-content-between ps-2 pe-2 mb-2">
            <Input type="checkbox" onChange={() => toggleTodo(todo.id)} />
            <h3 className={todo.status ? "text-decoration-line-through" : ""}>{todo.title}</h3>
            <div>
                {/* <Button className="me-1" color="warning" type="button">Edit</Button> */}
                <Button onClick={() => remove(todo.id)} color="danger" type="submit">Delete</Button>
            </div>
        </article>
    )
}
