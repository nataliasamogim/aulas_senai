{/* Componente main*/}
{/* Autor: Júlia Dias Lara*/}
{/* 25/10/2023-06/12/2023 */}
{/* Descrição detalhada: O componente Main está renderizando o componente App. */}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)