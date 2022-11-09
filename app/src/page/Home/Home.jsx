import './Home.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderCustom from '../../components/Header/Header';
import Navi from '../../components/Nav/Nav';
import Tabla from '../../components/Tabla/Tabla';

const Home = () => {
  return (
    <div className="subApp">
      <HeaderCustom />
      <div className='cuerpo'>
        <Navi />
        <Tabla />
      </div>
    </div>
  );
};

export default Home;
