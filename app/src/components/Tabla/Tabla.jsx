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
          <th className="datos">Conexión</th>
          <th className="datos">Nombre y apellidos</th>
          <th className="datos">Nombre de usuario</th>
          <th className="datos">Email</th>
          <th className="datos">Móvil</th>
        </tr>
        <RowT />
      </table>
    </div>
  );
}

export default Tabla;
