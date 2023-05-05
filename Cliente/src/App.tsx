import React from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Inicio } from './conteiners/Inicio';

function App():JSX.Element {

  return (
    <HashRouter>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/cafes" element={<p>cafes</p>}/>
        <Route path='/desayunos' element={<p>Desayunos</p>}/>
        <Route path="/mensaje" element={<p>Mensajes</p>}/>
        <Route path='*' element={<Navigate to="/inicio"/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
