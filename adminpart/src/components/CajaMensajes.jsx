import React from 'react'
import { useContextoAdmin } from '../contextos'

export function CajaMensajes({ id, name, mail, mensaje }) {
    const { borrarUno } = useContextoAdmin();
    const lugar = "mensajes";
    return (
        <div className="sexxion">
            <div className="area">
                <div className="texto name">{name}</div>
                <div className="texto mail">{mail}</div>
                <div className="texto mensaje">{mensaje}</div>
            </div>
            <div className="area-boton">
                <button className="boton" onClick={() => borrarUno(lugar, id)}>X</button>
            </div>
        </div>
    )
}
