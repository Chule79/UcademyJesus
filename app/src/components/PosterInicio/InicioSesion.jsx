import './InicioSesion.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
function InicioPoster() {
  return (
    <div className="panelInicio">
      <img src="../../src/assets/logo.png" />
      <form className="formInicio">
        <div className="divName">
          <label htmlFor="name">
            <a className="asterisco">*</a> Nombre de usuario:
          </label>
          <input type="text" name="name" className="inputsInicio" />
        </div>
        <div className="divName">
          <label htmlFor="passw">
            <a className="asterisco">*</a> Contraseña:
          </label>
          <input type="password" name="passw" className="inputsInicio" id="password" />
        </div>

        <div className="formOpciones">
          <div className="rememberMe">
            <input type="checkbox" name="remember" className="checkIni" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div>
            <a className="olvide">Olvidè Contraseña</a>
          </div>
        </div>
        <NavLink to={'estudiantes'}>
          <input type="submit" value="Iniciar sesión" className="botonInic"></input>
        </NavLink>
      </form>
    </div>
  );
}

export default InicioPoster;
