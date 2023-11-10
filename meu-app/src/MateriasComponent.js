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
    <div className="container-materias">
      <h2>Matérias</h2>
      {materias.map((materia, index) => (
        <div 
          className="materia-item" 
          key={index} 
          onClick={() => handleMateriaClick(materia.materia)}
        >
          <div className="materia-nome">{materia.materia}</div>
        </div>
      ))}
    </div>
  );
}

export default MateriasComponent;
