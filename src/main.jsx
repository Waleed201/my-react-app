import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // {{ edit_1 }}
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* {{ edit_2 }} */}
      <App />
    </BrowserRouter> {/* {{ edit_3 }} */}
  </StrictMode>,
)
