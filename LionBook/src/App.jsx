import React from 'react'
import { Outlet } from 'react-router-dom'
import AppRoutes from './router'
import './App.css'
import CadastroProduto from './Pages/Cadastro/CadastroLivro'
function App() {
  return (
    <div className="app">
      <AppRoutes />
    </div>
  )
}

export default App
