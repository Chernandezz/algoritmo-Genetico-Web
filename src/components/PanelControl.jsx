import React from "react";
import style from "./PanelControl.module.css";

const EntradaParametros = () => {
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
          id="btnAgregarAlgoritmo"
        >
          Agregar a la cola
        </button>
        <button
          type="submit"
          className={style["submit-btn"]}
          id="btnEjecutarAlgoritmo"
        >
          Ejecutar
        </button>
      </div>
    </div>
  );
};

export default EntradaParametros;
