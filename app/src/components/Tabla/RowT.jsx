import React, { useEffect, useState } from 'react';

import { getData } from '../../api/api';

const RowT = () => {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    (async () => {
        const data = await getData();
        setUsuario(data);
      })();
  }, []);

  return (
    <div>
      {usuario.length ? (
        usuario.map((item) => (
            <figure key={item.id}>
              <h2>{item.name}</h2>
            </figure>
          ))
        ) : (
          <p>No existe el Chiste que busca 😢</p>
        )}
    </div>
  );
};

export default RowT;
