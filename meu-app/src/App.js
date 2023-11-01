// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ListaMaterias() {
//   const [materias, setMaterias] = useState([]);

//   useEffect(() => {
//     async function fetchMaterias() {
//       try {
//         const response = await axios.get('http://localhost:3001/materias');
//         setMaterias(response.data);
//       } catch (error) {
//         console.error('Erro ao buscar matérias', error);
//       }
//     }
    
//     fetchMaterias();
//   }, []);

//   return (
//     <ul>
//       {materias.map((materia) => (
//         <li key={materia.id}>{materia.nome}</li>
//       ))}
//     </ul>
//   );
// }

// export default ListaMaterias;
import React from 'react';
import MateriasComponent from './MateriasComponent';

function App() {
  return (
    <div>
      <h1>Matérias e Submatérias</h1>
      <MateriasComponent />
    </div>
  );
}

export default App;
