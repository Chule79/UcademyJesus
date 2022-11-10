import './PopupR.css';

import axios from 'axios';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
export const PopRegister = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [movil, setMovil] = useState(0);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const createAlumn = (ev) => {
    ev.preventDefault();
    const alumn = {
      id: uuidv4(),
      state: state,
      name: name,
      surname: surname,
      email: email,
      movil: movil,
      date: date,
    };
    postAlumn(alumn);
  };

  const postAlumn = async (item) => {
    console.log(item);
    axios({
      method: 'post',
      url: 'http://localhost:8080/alumnos',
      data: item,
    });
  };

  return (
    <Popup
      trigger={
        <button className="greenBtn">
          <img src="https://www.svgrepo.com/show/391514/plus-circle-o.svg"></img> Nuevo
          estudiante
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <div className="ticketRe">
            <form onSubmit={(ev) => createAlumn(ev)} className="formRegister">
              <div className="campoUnico">
                <label htmlFor="username">Nombre y apellidos:</label>
                <input
                  className="cajaIn"
                  type="text"
                  name="username"
                  id="username"
                  onChange={(ev) => setSurname(ev.target.value)}
                />
              </div>
              <div className="campoUnico">
                <label htmlFor="name">NickName: </label>
                <input
                  className="cajaIn"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="campoUnico">
                <label htmlFor="email">Email:</label>
                <input
                  className="cajaIn"
                  type="text"
                  name="email"
                  id="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
              <div className="campoDoble">
                <div className="campoUnico">
                  <label htmlFor="state">Estado:</label>
                  <select
                    className="cajaIn"
                    name="type"
                    id="type"
                    onChange={(ev) => setState(ev.target.value)}
                  >
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
                <div className="campoUnico">
                  <label htmlFor="movil">Movil:</label>
                  <input
                    className="cajaIn"
                    type="number"
                    name="movil"
                    id="movil"
                    onChange={(ev) => setMovil(ev.target.value)}
                  />
                </div>
              </div>

              <input type="submit" value="Guardar" />
            </form>
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
