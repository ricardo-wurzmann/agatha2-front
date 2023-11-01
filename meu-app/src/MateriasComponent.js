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
        console.log("Dados das questões:", data); // Adicionado para depuração
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
          <ul>
          {questoes.map((questao, index) => (
            <li key={index}>
              {questao.questao}
            </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MateriasComponent;
