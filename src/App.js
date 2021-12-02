import React, { useState } from "react";
import {Header} from "./components/Header"
import { TodoPage } from "./pages/TodoPage";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
            <Header />
            <TodoPage />
        </div>
    )
}

export default App
