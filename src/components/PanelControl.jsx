import React, { useState } from "react";
import style from "./PanelControl.module.css";
import { Link } from "react-router-dom";

const EntradaParametros = () => {
  const [titulo, setTitulo] = useState("");
  const handleAgregar = () => {
    if (!titulo) {
      alert("Por favor, ingresa un título para la ejecución");
      return;
    }
    // Aquí recogeríamos todos los valores del formulario
    // y se los pasaríamos a la función onAgregar en forma de objeto.
    onAgregar({ titulo /* ...otros valores del formulario... */ });
    alert(
      'Algoritmo "' + titulo + '" agregado con éxito a la cola de ejecución.'
    );
  };
  return (
    <div className="container">
      <div className={style.grupoBtns}>
        <div className={style.inputTitulo}>
          <label htmlFor="titulo_ejecucion" className={style["form-label"]}>
            Título de la ejecución:
          </label>
          <input
            type="text"
            id="titulo_ejecucion"
            className={style["form-input"]}
            placeholder="Ejemplo: AG 1"
          />
        </div>
        <button
          type="button"
          className={style["submit-btn"]}
          style={{ backgroundColor: "indigo" }}
        >
          Agregar a la cola
        </button>
        <Link to="/resultados" className={style["submit-btn"]}>
          Ejecutar
        </Link>
      </div>
    </div>
  );
};

export default EntradaParametros;
