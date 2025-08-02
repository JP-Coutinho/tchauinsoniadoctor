import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import ListaPacientes from "./pages/listaPaciente/ListaPacientes";
import PacienteDetalhe from "./pages/pacienteDetalhe";
import Agenda from "./pages/agenda";
import Relatorio from "./pages/relatorio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaPacientes />} />
        <Route path="/paciente/:id" element={<PacienteDetalhe />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
