import React from 'react'
import { useContextoAdmin } from '../contextos'

export  function CajaMensajes({id, name, mail, mensaje}) {
    const {borrarUno} = useContextoAdmin();
    const lugar = "mensajes";
  return (
    <div className="sexxion">
        <div className="fila">
            <p className="tit">Nombre</p>
            <div className="texto">{name}</div>
        </div>
        <div className="fila">
            <p className="tit">Email</p>
            <div className="texto">{mail}</div>
        </div>
        <div className="fila">
            <p className="tit">Mensaje</p>
            <div className="texto">{mensaje}</div>
        </div>
        <div className="area-boton">
            <button className="boton" onClick={()=>borrarUno(lugar,id)}>X</button>
        </div>
    </div>
  )
}
