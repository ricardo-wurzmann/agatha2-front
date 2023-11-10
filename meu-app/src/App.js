import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Importe o Header
import MateriasComponent from './MateriasComponent';
import SubmateriasPage from './SubmateriasPage';
import QuestoesPage from './QuestoesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header title="Matérias" /> {/* Adicione o Header com o título "Matérias" */}
            <MateriasComponent />
          </>
        } />
        <Route path="/submaterias/:materia" element={
          <>
            <Header title="Submatérias" /> {/* O título "Submatérias" é genérico, você pode querer torná-lo dinâmico */}
            <SubmateriasPage />
          </>
        } />
        <Route path="/questoes/:materia/:submateria" element={
          <>
            <Header title="Questões" /> {/* O título "Questões" é genérico, você pode querer torná-lo dinâmico */}
            <QuestoesPage />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
