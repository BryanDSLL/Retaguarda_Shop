import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './pages/Home/Home';
import Relatorios from './pages/Relatorios/Relatorios';
import Rtm from './pages/Rtm/Rtm';
import Comandos from './pages/Comandos/Comandos';
import Ferramentas from './pages/Ferramentas/Ferramentas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/rtm" element={<Rtm />} />
        <Route path="/comandos" element={<Comandos />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
      </Routes>
    </Router>
  );
}

export default App;
