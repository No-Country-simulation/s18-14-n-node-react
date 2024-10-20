import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_OUR_API_URL || 'https://our-recet-api.onrender.com/api/v1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
