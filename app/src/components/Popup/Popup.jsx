import './Popup.css';

import React from 'react';
import Popup from 'reactjs-popup';
export const PopCreate = ({ item }) => {
  return (
    <Popup
      trigger={
        <button className="informacion" key={item.id}>
          <img src="https://www.svgrepo.com/show/137539/information.svg"></img>
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <div className="ticket">
            <div className="opcionesBtn">
              <div className="perfilCurso">
                <button>Perfil</button>
                <button>Cursos</button>
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
                <div className='nombres'>
                   <img src="https://www.svgrepo.com/show/20/user.svg"></img>
                   <div className='textNombres'>
                   <div className='cajaNom'>
                      <p>Nombre y apellidos</p>
                      <p>{item.surname}</p>
                    </div>
                    <div className='cajaNick'>
                      <p>Nombre de usuario</p>
                      <p>{item.name}</p>
                    </div></div>
                    
                </div>
                <div></div>
              </div>
            </div>
            <div className="divClose">
              <button className="close" onClick={close}>
                Cerar
              </button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
