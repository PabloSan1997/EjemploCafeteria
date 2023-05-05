import React from 'react';
import cargando from "../asserts/cargando.svg";
import "../estilos/pantallaCarga.css";
export function PantallaCarga(){
    return(
        <div className="area-cargando">
            <img src={cargando} alt="logo" className="logo" />
        </div>
    );
}