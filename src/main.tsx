import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import { CssGlobalStyles } from './styles/globalStyled.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
      <CssGlobalStyles />
    </Router>
  </StrictMode>,
)
