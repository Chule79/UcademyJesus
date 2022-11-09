import './Nav.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
const Navi = () => {
  return (
    <nav className="navLateral">
      <div className="navFuncional">
        <NavLink>
          <button className="principalesBtn">
            <h2>
              <img src="https://www.svgrepo.com/show/425893/graph1.svg"></img> Dashboard
            </h2>
          </button>
        </NavLink>
        <NavLink>
          <button className="principalesBtn selectBtn">
            <h2>
              <img src="https://www.svgrepo.com/show/95019/graduate-cap.svg"></img> Mi
              Academia
            </h2>
          </button>
        </NavLink>
        <div className="miniNav">
          <nav className="subNavi">
            <NavLink className="noFuntion">Editar Academia</NavLink>
            <NavLink className="study">Estudiantes</NavLink>
            <NavLink className="noFuntion">Pofesores</NavLink>
          </nav>
        </div>

        <NavLink>
          <button className="principalesBtn">
            <h2>
              <img src="https://www.svgrepo.com/show/66922/book-cover.svg"></img> Cursos
            </h2>
          </button>
        </NavLink>
      </div>
      <button className="principalesBtn">
        <h2>
          <img src="https://www.svgrepo.com/show/428362/settings.svg"></img> Ajustes
        </h2>
      </button>
    </nav>
  );
};

export default Navi;
