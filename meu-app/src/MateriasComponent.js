import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MateriasComponent() {
  const [materias, setMaterias] = useState([]);
  const navigate = useNavigate();

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

  const handleMateriaClick = (materia) => {
    navigate(`/submaterias/${materia}`);
  };

  return (
    <div>
      <h2>Matérias</h2>
      <ul>
        {materias.map(materia => (
          <li key={materia.materia} onClick={() => handleMateriaClick(materia.materia)}>
            {materia.materia}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MateriasComponent;
