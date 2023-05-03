import React from 'react'
import { useContextoAdmin } from '../contextos';

export function Login() {
    const {solicitud} = useContextoAdmin();
    const [textos, setTextos] = React.useState({
        usuario:"",
        contra:""
    });
    const evento = (e) =>{
        e.preventDefault();
        solicitud(textos.usuario, textos.contra);
        setTextos({
            usuario:"",
            contra:""
        });
    }
    const escribirUsuario = (e)=>{
        setTextos({...textos, usuario:e.target.value})
    }
    const escribirContra = (e)=>{
        setTextos({...textos, contra:e.target.value})
    }
  return (
    <form  className="formulario" onSubmit={evento}>
        <h2>Entrar</h2>
        <div className="fila">
            <label htmlFor="usuario">Usuario</label>
            <input type="text" className="entrada" id="usuario" onChange={escribirUsuario} value={textos.usuario}/>
        </div>
        <div className="fila">
            <label htmlFor="contra">Contraseña</label>
            <input type="password" className='entrada' id="contra" onChange={escribirContra} value={textos.contra}/>
        </div>
        <button className="boton" type="submit">Entrar</button>
    </form>
  );
}
