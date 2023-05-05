import React from 'react'
import { useContexto } from '../contexto';

interface escribir {
    name:string,
    mail:string,
    mensaje:string
}

export  function Formulario() {
    const {generarMensaje} = useContexto();
    const [escribir, setEscribir]=React.useState<escribir>({
        name:"",
        mail:"",
        mensaje:""
    });
    const evento = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        generarMensaje(escribir);
    }
    const escribirNombre=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setEscribir({...escribir, name:e.target.value});
    }
    const escribirMail=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setEscribir({...escribir, mail:e.target.value});
    }
    const escribirMensaje=(e:React.ChangeEvent<HTMLTextAreaElement>):void=>{
        setEscribir({...escribir, mensaje:e.target.value});
    }
  return (
    <form className="formulario" onSubmit={evento}>
        <div className="fil">
            <label htmlFor="">Nombre</label>
            <input type="text" className="entrada" placeholder='Escribir...' onChange={escribirNombre} value={escribir.name}/>
        </div>
        <div className="fil">
        <label htmlFor="">Correo</label>
            <input type="text" className="entrada" placeholder='Escribir...'  onChange={escribirMail} value={escribir.mail}/>
        </div>
        <div className="fil">
        <label htmlFor="">Mensaje</label>
            <textarea className='entrada area' placeholder='Escribir...'  onChange={escribirMensaje} value={escribir.mensaje}></textarea>
        </div>
        <div className="boton-area">
            <button className="boton" type='submit'>Enviar</button>
        </div>
    </form>
  )
}
