import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function SubmateriasPage() {
  const [submaterias, setSubmaterias] = useState([]);
  const { materia } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarSubmaterias() {
      try {
        const { data } = await axios.get(`http://localhost:3005/submaterias/${materia}`);
        setSubmaterias(data);
      } catch (error) {
        console.error('Erro ao carregar submatérias', error);
      }
    }
    carregarSubmaterias();
  }, [materia]);

  const handleSubmateriaClick = (submateria) => {
    navigate(`/questoes/${materia}/${submateria}`);
  };

  return (
    <div>
      <h3>Submatérias de {materia}</h3>
      <ul>
        {submaterias.map(submateria => (
          <li key={submateria.submateria} onClick={() => handleSubmateriaClick(submateria.submateria)}>
            {submateria.submateria}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubmateriasPage;
