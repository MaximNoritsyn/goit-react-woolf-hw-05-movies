import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { MoviesProvider } from 'context/Movies';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MoviesProvider>
);
