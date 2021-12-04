import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";




export default function Todo({ todo, remove }) {
    const { removeTodo, handlerToggle } = useContext(GlobalContext)
    return (
        <article className="d-flex align-items-center flex-sm-fill justify-content-between ps-2 pe-2 mb-2">
            <Input type="checkbox" onChange={() => handlerToggle(todo.id)} />
            <h3 className={["text-break", todo.status ? "text-decoration-line-through" : ""].join(' ')}>{todo.title}</h3>
            <div className="">
                <Link to={`${todo.id}/edit`} className="btn btn-warning me-1" >Edit</Link>
                <Button onClick={() => removeTodo(todo.id)} color="danger" type="submit">Delete</Button>
            </div>
        </article>
    )
}
