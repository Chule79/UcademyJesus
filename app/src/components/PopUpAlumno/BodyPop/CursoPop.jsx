import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

const CursoPop = () => {
  const [curso, setCurso] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get('http://localhost:8080/cursos');
      setCurso(data.data);
    })();
  }, []);
  console.log(curso);
  return (
    <>
      {curso.length ? (
        curso.map((item) => (
          <div key={item.id} className="totalCursos">
            <h3 className="nCurso">{item.name}</h3>
            <div className="barra">
              <progress id="file" max="100" value={item.value}/>
              <p>{item.value}%</p>
            </div>

            <p>Fecha de inscripción: {item.date}</p>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default CursoPop;
