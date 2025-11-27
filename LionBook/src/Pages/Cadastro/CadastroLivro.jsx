import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroLivro.css';

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    codigo: '',
    fabricante: '',
    tipo: '',
    preco: '',
    quantidade: '',
    estoqueMinimo: '',
    // Especificações técnicas
    processador: '',
    memoriaRam: '',
    armazenamento: '',
    tamanhoTela: '',
    resolucaoCamera: '',
    sistemaOperacional: '',
    cor: '',
    capacidadeArmazenamento: '',
    alimentacao: '',
    conectividade: '',
    portas: '',
    material: '',
    peso: '',
    acessoriosInclusos: ''
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
    // Validação básica
    if (formData.quantidade < formData.estoqueMinimo) {
      setError('A quantidade em estoque não pode ser menor que o estoque mínimo!');
      return;
    }
    
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do produto:', formData);
    // Simulando sucesso no cadastro
    alert('Produto cadastrado com sucesso!');
    // Limpar o formulário
    setFormData({
      nome: '',
      codigo: '',
      fabricante: '',
      tipo: '',
      preco: '',
      quantidade: '',
      estoqueMinimo: '',
      processador: '',
      memoriaRam: '',
      armazenamento: '',
      tamanhoTela: '',
      resolucaoCamera: '',
      sistemaOperacional: '',
      cor: '',
      capacidadeArmazenamento: '',
      alimentacao: '',
      conectividade: '',
      portas: '',
      material: '',
      peso: '',
      acessoriosInclusos: ''
    });
    setError('');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="cadastro-produto-container">
      <div className="logo-container">
        <div className="logo-placeholder">
          <div className="logo-circle"></div>
          <h1>Cadastro de Produtos Eletrônicos</h1>
        </div>
      </div>
      
      <div className="form-container">
        <form onSubmit={handleSubmit} className="produto-form">
          {/* Informações Básicas */}
          <div className="form-section">
            <h2>Informações Básicas</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome do Produto:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Ex: iPhone 15 Pro"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="codigo">Código do Produto:</label>
                <input
                  type="text"
                  id="codigo"
                  name="codigo"
                  value={formData.codigo}
                  onChange={handleChange}
                  required
                  placeholder="Ex: SM-G998B"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fabricante">Fabricante:</label>
                <input
                  type="text"
                  id="fabricante"
                  name="fabricante"
                  value={formData.fabricante}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Samsung, Apple, etc."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tipo">Tipo de Produto:</label>
                <select
                  id="tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="smartphone">Smartphone</option>
                  <option value="tablet">Tablet</option>
                  <option value="notebook">Notebook</option>
                  <option value="smarttv">Smart TV</option>
                  <option value="smartwatch">Smartwatch</option>
                  <option value="acessorio">Acessório</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preco">Preço (R$):</label>
                <input
                  type="number"
                  id="preco"
                  name="preco"
                  value={formData.preco}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="quantidade">Quantidade em Estoque:</label>
                <input
                  type="number"
                  id="quantidade"
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="estoqueMinimo">Estoque Mínimo:</label>
                <input
                  type="number"
                  id="estoqueMinimo"
                  name="estoqueMinimo"
                  value={formData.estoqueMinimo}
                  onChange={handleChange}
                  min="1"
                  required
                  placeholder="Alerta será acionado abaixo deste valor"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cor">Cor:</label>
                <input
                  type="text"
                  id="cor"
                  name="cor"
                  value={formData.cor}
                  onChange={handleChange}
                  placeholder="Ex: Preto, Branco, Azul"
                />
              </div>
            </div>
          </div>

          {/* Especificações Técnicas */}
          <div className="form-section">
            <h2>Especificações Técnicas</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="processador">Processador:</label>
                <input
                  type="text"
                  id="processador"
                  name="processador"
                  value={formData.processador}
                  onChange={handleChange}
                  placeholder="Ex: Snapdragon 8 Gen 2"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="memoriaRam">Memória RAM:</label>
                <input
                  type="text"
                  id="memoriaRam"
                  name="memoriaRam"
                  value={formData.memoriaRam}
                  onChange={handleChange}
                  placeholder="Ex: 8GB, 16GB"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="armazenamento">Armazenamento Interno:</label>
                <input
                  type="text"
                  id="armazenamento"
                  name="armazenamento"
                  value={formData.armazenamento}
                  onChange={handleChange}
                  placeholder="Ex: 128GB, 256GB, 512GB"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="capacidadeArmazenamento">Capacidade de Armazenamento:</label>
                <input
                  type="text"
                  id="capacidadeArmazenamento"
                  name="capacidadeArmazenamento"
                  value={formData.capacidadeArmazenamento}
                  onChange={handleChange}
                  placeholder="Ex: 1TB SSD"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tamanhoTela">Tamanho da Tela:</label>
                <input
                  type="text"
                  id="tamanhoTela"
                  name="tamanhoTela"
                  value={formData.tamanhoTela}
                  onChange={handleChange}
                  placeholder="Ex: 6.1 polegadas, 15.6″"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="sistemaOperacional">Sistema Operacional:</label>
                <input
                  type="text"
                  id="sistemaOperacional"
                  name="sistemaOperacional"
                  value={formData.sistemaOperacional}
                  onChange={handleChange}
                  placeholder="Ex: Android 14, iOS 17, Windows 11"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resolucaoCamera">Resolução da Câmera:</label>
                <input
                  type="text"
                  id="resolucaoCamera"
                  name="resolucaoCamera"
                  value={formData.resolucaoCamera}
                  onChange={handleChange}
                  placeholder="Ex: 48MP + 12MP + 12MP"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="alimentacao">Alimentação:</label>
                <select
                  id="alimentacao"
                  name="alimentacao"
                  value={formData.alimentacao}
                  onChange={handleChange}
                >
                  <option value="">Selecione a voltagem</option>
                  <option value="127v">127V</option>
                  <option value="220v">220V</option>
                  <option value="bivolt">Bivolt</option>
                  <option value="bateria">Bateria</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="conectividade">Conectividade:</label>
                <input
                  type="text"
                  id="conectividade"
                  name="conectividade"
                  value={formData.conectividade}
                  onChange={handleChange}
                  placeholder="Ex: Wi-Fi, Bluetooth 5.3, 5G"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="portas">Portas:</label>
                <input
                  type="text"
                  id="portas"
                  name="portas"
                  value={formData.portas}
                  onChange={handleChange}
                  placeholder="Ex: USB-C, HDMI, Ethernet"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="material">Material de Construção:</label>
                <input
                  type="text"
                  id="material"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  placeholder="Ex: Alumínio, Vidro, Plástico"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="peso">Peso (kg):</label>
                <input
                  type="number"
                  id="peso"
                  name="peso"
                  value={formData.peso}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  placeholder="Ex: 0.174"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="acessoriosInclusos">Acessórios Inclusos:</label>
                <textarea
                  id="acessoriosInclusos"
                  name="acessoriosInclusos"
                  value={formData.acessoriosInclusos}
                  onChange={handleChange}
                  placeholder="Ex: Carregador, Cabo USB, Fones de ouvido, Manual"
                  rows="3"
                />
              </div>
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="button-group">
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Cadastrar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroProduto;