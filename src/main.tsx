import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Entry point of the React application:
// Finds the <div id="root"> element in index.html and renders <App /> inside it.
// <StrictMode> helps catch potential problems in React components during development.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
