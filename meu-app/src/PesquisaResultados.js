import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PesquisaResultados() {
  let query = useQuery().get("query");

  // Aqui você implementaria a lógica para buscar ou filtrar os dados
  // baseados na query

  return (
    <div>
      <h2>Resultados da Pesquisa para: {query}</h2>
      {/* Renderize os resultados da pesquisa aqui */}
    </div>
  );
}

export default PesquisaResultados;
