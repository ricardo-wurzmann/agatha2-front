import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

// Adiciona a prop 'title' ao componente Header
function Header({ title }) {
  const [pesquisa, setPesquisa] = useState('');
  const navigate = useNavigate();

  const handlePesquisaChange = (evento) => {
    setPesquisa(evento.target.value);
  };

  const pesquisar = (evento) => {
    evento.preventDefault();
    navigate(`/submaterias/${pesquisa}`);
    setPesquisa(''); // Limpa a barra de pesquisa após a navegação
  };

  const voltarParaHome = () => {
    navigate('/');
  };

  return (
    <header>
      <div className="header-buttons">
        <div className="likes-btn" onClick={voltarParaHome}>
          <img src={`${process.env.PUBLIC_URL}/home.png`} alt="Home" />
        </div>
        <div className="likes-btn" onClick={() => navigate(-1)}>
          <img src={`${process.env.PUBLIC_URL}/voltar.png`} alt="Voltar" />
        </div>
      </div>
      {/* Exibe o título dinâmico */}
      {title && <h1 className="titulo-header">{title}</h1>}
      <form onSubmit={pesquisar} className="search-form">
        <input type="text" value={pesquisa} onChange={handlePesquisaChange} placeholder="Pesquisar matéria" />
        <button type="submit" className='pesquisar'>Pesquisar</button>
      </form>
    </header>
  );
}

export default Header;
