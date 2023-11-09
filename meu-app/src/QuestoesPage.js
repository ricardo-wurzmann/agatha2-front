import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function QuestoesPage() {
  const [questoes, setQuestoes] = useState([]);
  const { materia, submateria } = useParams();

  useEffect(() => {
    async function carregarQuestoes() {
      try {
        const { data } = await axios.get(`http://localhost:3005/questoes/${materia}/${submateria}`);
        setQuestoes(data);
      } catch (error) {
        console.error('Erro ao carregar questões', error);
      }
    }    
    carregarQuestoes();
  }, [materia, submateria]);

  return (
    <div>
      <h4>Questões de {submateria}</h4>
      {questoes.map((questao, index) => (
        <div key={index} className="questao">
          <p>{questao.texto_da_questao}</p>
          <ul>
            <li>{questao.opcao_a}</li>
            <li>{questao.opcao_b}</li>
            <li>{questao.opcao_c}</li>
            <li>{questao.opcao_d}</li>
            <li>{questao.opcao_e}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default QuestoesPage;
