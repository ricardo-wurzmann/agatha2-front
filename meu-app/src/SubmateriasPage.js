import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header'; // Não se esqueça de importar o Header

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
    <div className="container-materias">
      <Header title={`Submatérias de ${materia}`} /> 
      {submaterias.map((submateria, index) => (
        <div 
          className="materia-item" 
          key={index}
          onClick={() => handleSubmateriaClick(submateria.submateria)}
        >
          <div className="materia-nome">{submateria.submateria}</div>
        </div>
      ))}
    </div>
  );
}

export default SubmateriasPage;
