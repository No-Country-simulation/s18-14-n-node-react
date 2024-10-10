import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

axios.get('http://localhost:3000/api/v1/')
  .then(response => {
    console.log(response.data);  // Manejo de la respuesta
  })
  .catch(error => {
    console.error(error);  // Manejo del error
  });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
