import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import About from './routes/About';
import Ship from './routes/Ship';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='ship' element={<Ship />}></Route>
        </Routes>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);