import React from 'react'
import { useCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom';
import "../estilos/header.css";
export function Header() {
    const [cookie, setCookie, removeCookie] = useCookies(["hola"]);
    const cerrarSeccion = () => {
        removeCookie("hola");
        window.location.reload();
    }
  return (
    <header>
        <h1>Editar pagina de cafe</h1>
        <nav>
            <ul>
                <li><NavLink to="/admin" className={({isActive})=>isActive?"lista activado":"lista"}>Productos</NavLink></li>
                <li><NavLink to="/mensajes" className={({isActive})=>isActive?"lista activado":"lista"} >Mensajes </NavLink></li>
            </ul>
        </nav>
        <button className='boton' onClick={cerrarSeccion}>Cerrar cesion</button>
    </header>
  )
}
