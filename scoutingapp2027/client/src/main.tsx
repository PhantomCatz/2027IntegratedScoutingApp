import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

//see https://github.com/vuetifyjs/vuetify/issues/22766
// @ts-ignore is a possible fix, others say to change the compile
// import recognition to false but may have problems down the line
import './stylesheets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
