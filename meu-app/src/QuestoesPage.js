import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function QuestoesPage() {
  const [questoes, setQuestoes] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const { materia, submateria } = useParams();

  useEffect(() => {
    async function carregarQuestoes() {
      try {
        const endpoint = mostrarTodas ? 
          `http://localhost:3005/questoes/${materia}/${submateria}` :
          `http://localhost:3005/submaterias/${materia}/${submateria}/aleatorias`;

        const { data } = await axios.get(endpoint);
        setQuestoes(data);
      } catch (error) {
        console.error('Erro ao carregar questões', error);
      }
    }
    carregarQuestoes();
  }, [materia, submateria, mostrarTodas]);

  return (
    <div>
      {/* Supondo que 'materia' seja o nome da matéria e esteja disponível aqui */}
      <h4>Questões de {submateria}</h4>
      {questoes.map((questao, index) => (
        <div key={index} className="questao-container">
          <div className="questao-header">
            Matéria: {materia} - Submatéria: {submateria}
          </div>
          <div className="questao-texto">
            <p>{questao.texto_da_questao}</p>
          </div>
          <ul className="questao-opcoes">
            <li>{questao.opcao_a}</li>
            <li>{questao.opcao_b}</li>
            <li>{questao.opcao_c}</li>
            <li>{questao.opcao_d}</li>
            <li>{questao.opcao_e}</li>
          </ul>
        </div>
      ))}
      {!mostrarTodas && (
        <button onClick={() => setMostrarTodas(true)}>Ver todas as questões</button>
      )}
    </div>
  );
}

export default QuestoesPage;
