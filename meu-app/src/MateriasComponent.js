import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MateriasComponent() {
  const [materias, setMaterias] = useState([]);
  const [submaterias, setSubmaterias] = useState([]);
  const [questoes, setQuestoes] = useState([]);
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);
  const [submateriaSelecionada, setSubmateriaSelecionada] = useState(null);

  useEffect(() => {
    async function carregarMaterias() {
      try {
        const { data } = await axios.get('http://localhost:3005/materias');
        setMaterias(data);
      } catch (error) {
        console.error('Erro ao carregar matérias', error);
      }
    }
    carregarMaterias();
  }, []);

  useEffect(() => {
    async function carregarSubmaterias() {
      if (!materiaSelecionada) return;
      try {
        const { data } = await axios.get(`http://localhost:3005/submaterias/${materiaSelecionada}`);
        setSubmaterias(data);
      } catch (error) {
        console.error('Erro ao carregar submatérias', error);
      }
    }
    carregarSubmaterias();
  }, [materiaSelecionada]);

  useEffect(() => {
    async function carregarQuestoes() {
      if (!materiaSelecionada || !submateriaSelecionada) return;
      try {
        const { data } = await axios.get(`http://localhost:3005/questoes/${materiaSelecionada}/${submateriaSelecionada}`);
        setQuestoes(data);
      } catch (error) {
        console.error('Erro ao carregar questões', error);
      }
    }    
    carregarQuestoes();
  }, [submateriaSelecionada]);

  return (
    <div>
      <h2>Matérias</h2>
      <ul>
        {materias.map(materia => (
          <li key={materia.materia} onClick={() => setMateriaSelecionada(materia.materia)}>
            {materia.materia}
          </li>
        ))}
      </ul>
      {materiaSelecionada && (
        <div>
          <h3>Submatérias de {materiaSelecionada}</h3>
          <ul>
            {submaterias.map(submateria => (
              <li key={submateria.submateria} onClick={() => setSubmateriaSelecionada(submateria.submateria)}>
                {submateria.submateria}
              </li>
            ))}
          </ul>
        </div>
      )}
      {submateriaSelecionada && (
        <div>
          <h4>Questões de {submateriaSelecionada}</h4>
          {questoes.slice(0, 5).map((questao, index) => (
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
      )}
    </div>
  );
}

export default MateriasComponent;

