import React, { useEffect, useState } from 'react';

import { getData } from '../../api/api';
import { PopCreate } from '../PopUpAlumno/Popup/Popup';

const RowT = () => {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setUsuario(data);
    })();
  }, []);

  return (
    <>
      {usuario.length ? (
        usuario.map((item) => (
          <tr className="rowLine" key={item.id}>
            <td className="datos">
              <button>{item.state}</button>
            </td>
            <td className="datos">{item.surname}</td>
            <td className="datos">{item.name}</td>
            <td className="datos">{item.email}</td>
            <td className="datos">{item.movil}</td>
            <td className="datos">
              <PopCreate item={item}/>
            </td>
          </tr>
        ))
      ) : (
        <p>No hay Alumnos Registrados</p>
      )}
    </>
  );
};

export default RowT;
