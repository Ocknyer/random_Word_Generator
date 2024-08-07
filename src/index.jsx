import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/tailwind.css';
import App from './App';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='main-container'>
        <App />
        <NavBar />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
