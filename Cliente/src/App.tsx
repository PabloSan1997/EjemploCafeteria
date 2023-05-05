// import React from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Inicio } from './conteiners/Inicio';
import { Cafes } from "./conteiners/Cafes";
import { Mensajes } from "./conteiners/Mensajes";

function App():JSX.Element {

  return (
    <HashRouter>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/cafes" element={<Cafes/>}/>
        <Route path="/mensaje" element={<Mensajes/>}/>
        <Route path='*' element={<Navigate to="/inicio"/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
