import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/ErrorBoundary';
import ThemeProvider from './app/Providers/ThemeProvider/ui/ThemeProvider';

import App from './App';
import './styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
);
