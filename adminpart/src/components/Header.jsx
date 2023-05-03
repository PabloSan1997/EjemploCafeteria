import React from 'react'
import { useCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom';

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
                <li><NavLink to="/admin">Productos</NavLink></li>
                <li><NavLink to="/mensajes">Mensajes</NavLink></li>
            </ul>
        </nav>
        <button className='boton' onClick={cerrarSeccion}>Cerrar cesion</button>
    </header>
  )
}
