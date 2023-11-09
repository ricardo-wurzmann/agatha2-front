import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Importe o Header
import MateriasComponent from './MateriasComponent';
import SubmateriasPage from './SubmateriasPage';
import QuestoesPage from './QuestoesPage';

function App() {
  return (
    <Router>
      <Header /> {/* Adicione o Header aqui */}
      <Routes>
        <Route path="/" element={<MateriasComponent />} />
        <Route path="/submaterias/:materia" element={<SubmateriasPage />} />
        <Route path="/questoes/:materia/:submateria" element={<QuestoesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
