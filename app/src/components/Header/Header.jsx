import './Header.css';

import React from 'react';
const HeaderCustom = () => {
  return (
    <div className="header">
      <div className="iconYBuscador">
        <img src="../../src/assets/logo-blanco.png" />
        <div className="buscador">
          <label htmlFor="buscador" className="lupa">
            🔍︎
          </label>
          <input
            type="text"
            value="Buscar"
            name="buscador"
            className="buscadorIn"
          ></input>
        </div>
      </div>
      <div className="userIcons">
        <div className="info">
          <div>🖂</div>
          <div>🕭<a className="asterisco">*</a></div>
        </div>
        <div className="user">
          <div className="circleUser"><img src='../../src/assets/user.png'></img></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustom;
