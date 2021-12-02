import React from "react";
import {render} from 'react-dom'
import App from './App.js'


const rootElement = 'root';

render(
    <App />,
    document.getElementById(rootElement)
);
