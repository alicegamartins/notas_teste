import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import BackendTest from './BackendTest.jsx'; // importa o novo componente

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BackendTest /> {/* adiciona aqui sem mexer no App */}
  </StrictMode>
);
