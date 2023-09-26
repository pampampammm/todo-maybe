import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App";
import ThemeProvider from "./app/Providers/ThemeProvider/ui/ThemeProvider";
import {BrowserRouter} from "react-router-dom";

import "./styles/index.scss"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);



