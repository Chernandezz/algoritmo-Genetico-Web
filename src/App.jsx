import React, { useState } from "react";
import "./App.css";
import "./FondoCuerpo.css";

import FormularioParametros from "./components/EntradaParametros";
import PanelControl from "./components/PanelControl";

const App = () => {
  const [vista, setVista] = useState("formulario");
  const handleEjecutar = (valoresFormulario) => {
    // Aquí ejecutaríamos el algoritmo y mostraríamos los resultados.
    setVista("resultados");
  };
  return (
    <>
      {vista === "formulario" && (
        <>
          <PanelControl />
          <FormularioParametros />
        </>
      )}
      {vista === "resultados" && (
        <Resultados
          onNuevoAlgoritmo={() => setVista("formulario")}
          onVerGraficas={() => setVista("graficas")}
        />
      )}
      {vista === "graficas" && (
        <Graficas onVerTablas={() => setVista("resultados")} />
      )}
    </>
  );
};

export default App;
