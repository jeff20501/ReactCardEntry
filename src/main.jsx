import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Page } from './interactive-card/Main'
import './interactive-card/style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
