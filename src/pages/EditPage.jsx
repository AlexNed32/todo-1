import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import { Button, Input } from "reactstrap";


export const EditPage = () => {
    const { id } = useParams();
    const { todos, editTodos } = useContext(GlobalContext);

    const [title, setTitle] = useState('');



    return (
        <div className="container">
            <h1 className="mb-4">Edit Page</h1>
                <Input className="mb-2" placeholder="Edit"/>
            <Button className="btn btn-success me-2">Save</Button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </div>
    )
}
