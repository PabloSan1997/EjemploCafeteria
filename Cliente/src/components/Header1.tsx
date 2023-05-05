import React from 'react'
import logo from "../asserts/logo.svg";
import { Link } from 'react-router-dom';
import "../styles/header1.css";

export function Header1():JSX.Element {
  return (
    <header className='header-inicio'>
      <div className="informacion">
        <img src={logo} alt="logo" />
        <h1>Cafeteria Pablo</h1>
        <p>El mejor cafe de la zona y desayunos</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/cafes">Cafes</Link>
          </li>
          <li>
            <Link to="/desayunos">Desayunos</Link>
          </li>
          <li>
            <Link to="/mensaje">Contactanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
