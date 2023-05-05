import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provedor } from './contexto/index.tsx'
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provedor>
      <App/>
    </Provedor>
)
