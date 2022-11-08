import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InicioSesion from './page/InicioSesion/InicioSesion';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<InicioSesion/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
 //<Route path='estudiantes' element={<Estudiantes/>}/>
          //<Route path="*" element={<Error404 />} />