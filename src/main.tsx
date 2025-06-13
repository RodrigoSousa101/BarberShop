import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.tsx';
import ScrollToTop from './ScrollToTop'; // <--- importa o ScrollToTop aqui
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* <--- adiciona aqui */}
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
