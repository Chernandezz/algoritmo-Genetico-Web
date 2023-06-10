import React from "react";
import "./App.css";
import "./FondoCuerpo.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SeccionParametros from "./components/SeccionParametros";
import Resultados from "./components/Resultados"; // Importa tu componente de Resultados

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeccionParametros />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </Router>
  );
};

export default App;
