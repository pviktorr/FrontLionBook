import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroLivro.css';

const CadastroLivro = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    editora: '',
    ano: '',
    isbn: '',
    quantidade: '',
    categoria: ''
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do livro:', formData);
    // Simulando sucesso no cadastro
    alert('Livro cadastrado com sucesso!');
    // Limpar o formulário
    setFormData({
      titulo: '',
      autor: '',
      editora: '',
      ano: '',
      isbn: '',
      quantidade: '',
      categoria: ''
    });
  };

  const handleCancel = () => {
    // Navegar de volta para a página anterior ou para a home
    navigate(-1);
  };

  return (
    <div className="cadastro-livro-container">
      <div className="logo-container">
        <div className="logo-placeholder">
          {/* Espaço para a logo do leão */}
          <div className="logo-circle"></div>
          <h1>Cadastro de Livros</h1>
        </div>
      </div>
      
      <div className="form-container">
        <form onSubmit={handleSubmit} className="livro-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="autor">Autor:</label>
              <input
                type="text"
                id="autor"
                name="autor"
                value={formData.autor}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="editora">Editora:</label>
              <input
                type="text"
                id="editora"
                name="editora"
                value={formData.editora}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="ano">Ano:</label>
              <input
                type="number"
                id="ano"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                min="1900"
                max="2100"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="isbn">ISBN:</label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="quantidade">Quantidade:</label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                value={formData.quantidade}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="categoria">Categoria:</label>
              <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma categoria</option>
                <option value="ficcao">Ficção</option>
                <option value="romance">Romance</option>
                <option value="tecnico">Técnico</option>
                <option value="biografia">Biografia</option>
                <option value="infantil">Infantil</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="button-group">
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroLivro;
