import React from 'react';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import { Admin } from './conteiners/Admin';
import { Login } from './conteiners/Login';
import { useContextoAdmin } from './contextos';
import Mensajes from './conteiners/Mensajes';
import "./estilos/app.css";
import { paginaActual } from './storage';
function App() {
  const {permiso} = useContextoAdmin();

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/inicio"/>}/>
        <Route path='/inicio' element={!permiso?<Login/>:<Navigate to={paginaActual()}/>}/>
        <Route path="/admin" element={permiso?<Admin/>:<Navigate to="/inicio"/>}/>
        <Route path='/mensajes' element={permiso?<Mensajes/>:<Navigate to="/inicio"/>}/>
        <Route path='*' element={<p>Not found</p>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
