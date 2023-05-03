import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProvedorContexto } from './contextos'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ProvedorContexto>
    <App />
  </ProvedorContexto>

)
