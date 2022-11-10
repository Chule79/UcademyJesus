import React from 'react';

const DatosPop = ({ item }) => {
  return (
    <>
      <div className="opcionesBtn">
        <div className="perfilCurso">
          <button className="selected">Perfil</button>
          <button className="noselect">Cursos</button>
        </div>
        <button className="editarUsu">Editar estudiante</button>
      </div>
      <div className="dataUser">
        <div className="mountainDiv">
          <img
            src="https://www.svgrepo.com/show/71408/image.svg"
            className="mountainImg"
          ></img>
        </div>
        <div className="todoDatos">
          <div className="nombres">
            <img src="https://www.svgrepo.com/show/20/user.svg"></img>
            <div className="textNombres">
              <div className="cajaNom">
                <p className="tituloDato">Nombre y apellidos</p>
                <p className="datoApi">{item.surname}</p>
              </div>
              <div>
                <p className="tituloDato">Nombre de usuario</p>
                <p className="datoApi">{item.name}</p>
              </div>
            </div>{' '}
          </div>
          <div className="nombres">
            <img src="https://www.svgrepo.com/show/17588/mail.svg"></img>
            <div>
              <p className="tituloDato">Email</p>
              <p className="datoApi">{item.email}</p>
            </div>
          </div>
          <div className="nombres">
            <img src="https://www.svgrepo.com/show/27964/phone.svg"></img>
            <div>
              <p className="tituloDato">Movil</p>
              <p className="datoApi">{item.movil}</p>
            </div>
          </div>
          <div className="fecha">
            <img src="https://www.svgrepo.com/show/378116/date.svg"></img>
            <div>
              <p className="tituloDato">Fecha de inscripción</p>
              <p className="datoApi">{item.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosPop;
