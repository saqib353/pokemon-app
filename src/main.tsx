import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokemonProvider } from './store/PokemonProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);
