import './Tabla.css';

import React from 'react';

import RowT from './RowT';

function Tabla() {
  return (
    <div className="tablon">
      <button className="greenBtn">
        <img src="https://www.svgrepo.com/show/391514/plus-circle-o.svg"></img> Nuevo
        estudiante
      </button>
      <table>
        <tr className="titulosTabla">
          <th className="titulo">Conexión</th>
          <th className="titulo">Nombre y apellidos</th>
          <th className="titulo">Nombre de usuario</th>
          <th className="titulo">Email</th>
          <th className="titulo">Móvil</th>
        </tr>
      </table>
      <RowT />
    </div>
  );
}

export default Tabla;
