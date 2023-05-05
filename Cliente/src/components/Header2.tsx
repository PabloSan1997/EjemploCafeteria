import { NavLink } from "react-router-dom";
import logo from "../asserts/logo.svg";
import "../styles/header2.css"

interface activar {
    isActive:boolean,
    isPending:boolean
}
export function Header2() {
    const activar = (activar: activar) =>activar.isActive?"opcion activado":"opcion";
    
    return (
        <header className="cabeza2">
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={(e)=>activar(e)}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cafes" className={(e)=>activar(e)}>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mensaje" className={(e)=>activar(e)}>Contactanos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
