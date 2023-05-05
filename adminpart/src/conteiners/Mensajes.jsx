import React from 'react'
import { Header } from '../components/Header'
import { useContextoAdmin } from '../contextos'
import { CajaMensajes } from '../components/CajaMensajes';
import { cambiarPagina } from '../storage';

export default function Mensajes() {
    const {mensajes}=useContextoAdmin();
    const paginaActual = "/mensajes";
    cambiarPagina(paginaActual);
  return (
    <>
        <Header/>
        <div className="area-mensajes">
            {mensajes.map(ele=>
                (<CajaMensajes key={ele._id} id={ele._id} name={ele.name} mail={ele.mail} mensaje={ele.mensaje}/>)
                )}
        </div>
    </>
  )
}
