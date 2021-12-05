import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header"
import { TodoPage } from "./pages/TodoPage";
import { EditPage } from "./pages/EditPage";
import { GlobalProvider } from "./context/GlobalState";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <GlobalProvider>

            <Header />
            <Routes>
                <Route path="/" element={<TodoPage />} />
                <Route path=":id/edit" element={<EditPage />} />
            </Routes>
        </GlobalProvider>
    )
}

export default App
