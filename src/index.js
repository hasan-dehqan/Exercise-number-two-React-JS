import React from 'react';
import ReactDOM from 'react-dom/client';
import App_mv from './App_mv1.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App_mv />
    </BrowserRouter>


);
