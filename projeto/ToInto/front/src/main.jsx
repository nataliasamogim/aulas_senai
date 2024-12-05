{/* Nome do Componente: main*/}
{/* Autor(a): Laura*/}
{/* Data criação: 25/10/2023 /Alterações: 05/12/2024 */}
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