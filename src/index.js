import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import DataContextProvider from './context/dataContext';
import { AuthProvider } from './hooks/useAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataContextProvider>
      <AuthProvider>
      <App />

      </AuthProvider>


    </DataContextProvider>

    </BrowserRouter>
  </React.StrictMode>
);

