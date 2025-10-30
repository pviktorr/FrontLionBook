import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import CadastroLivro from './Pages/Cadastro/CadastroLivro'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="cadastro-livro" element={<CadastroLivro />} />
          {/* Adicione mais rotas aqui conforme necessário */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
