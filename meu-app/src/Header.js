import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Certifique-se de ter o arquivo CSS para estilização

function Header() {
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
        <button onClick={voltarParaHome}>Home</button>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
      <form onSubmit={pesquisar} className="search-form">
        <input type="text" value={pesquisa} onChange={handlePesquisaChange} placeholder="Pesquisar matéria" />
        <button type="submit">Pesquisar</button>
      </form>
    </header>
  );
}

export default Header;
