import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './Pages/Login/Login'
import CadastroLivro from './Pages/Cadastro/CadastroLivro'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        <Route path="/" element={<CadastroLivro />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
