import axios from 'axios';
import React, { useState } from 'react';

const DatosPop = ({ item }) => {
  const [variant, setVariant] = useState('datos');
  const [name, setName] = useState(item.name);
  const [state, setState] = useState(item.state);
  const [surname, setSurname] = useState(item.surname);
  const [email, setEmail] = useState(item.email);
  const [movil, setMovil] = useState(item.movil);

  const createAlumn = (ev) => {
    ev.preventDefault();
    const alumn = {
      ...item,
      state: state,
      name: name,
      surname: surname,
      email: email,
      movil: movil,
    };

    postAlumn(alumn);
  };

  const postAlumn = async (item) => {
    console.log(item);
    axios({
      method: 'put',
      url: 'http://localhost:8080/alumnos',
      data: item,
    });
  };
  if (variant == 'datos') {
    return (
      <>
        <div className="opcionesBtn">
          <div className="perfilCurso">
            <button className="selected">Perfil</button>
            <button className="noselect" onClick={(ev) => setVariant('curso')}>
              Cursos
            </button>
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
  }
  if (variant == 'curso') {
    return (
      <>
        <div className="opcionesBtn">
          <div className="perfilCurso">
            <button className="noselect" onClick={(ev) => setVariant('datos')}>
              Perfil
            </button>
            <button className="selected">Cursos</button>
          </div>
          <button className="editarUsu">Editar estudiante</button>
        </div>
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
      </>
    );
  }
};

export default DatosPop;
