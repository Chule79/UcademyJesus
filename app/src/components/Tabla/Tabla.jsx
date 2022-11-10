import './Tabla.css';

import React from 'react';

import RowT from './RowT';
import { PopRegister } from '../PopUpRegistro/PopupR';

function Tabla() {
  return (
    <div className="tablon">
      <PopRegister/>
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
