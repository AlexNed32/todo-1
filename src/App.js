import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
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
