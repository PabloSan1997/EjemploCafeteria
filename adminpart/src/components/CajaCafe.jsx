import React from 'react';
import { useContextoAdmin } from '../contextos';

export function CajaCafe({ name, price, store, description, imagen, type, id }) {
    const [editar, setEditar] = React.useState(false);
    const [escribir, setEsxribir] = React.useState({ name, price, store, description, imagen, type });
    const {editarCafe, borrarUno}=useContextoAdmin();
    const lugar = "menuCafe";
    const evento =(e)=>{
      e.preventDefault();
      editarCafe(id, escribir);
    }
    const cambiarNombre=(e)=>{
      setEsxribir({...escribir, name:e.target.value});
    }
    const cambiarPrecio=(e)=>{
      setEsxribir({...escribir, price:Number(e.target.value)});
    }
    const cambiarStore=(e)=>{
      setEsxribir({...escribir, store:e.target.checked});
    }
    const cambiarDescripcion=(e)=>{
      setEsxribir({...escribir, description:e.target.value});
    }
    const cambiarImagen=(e)=>{
      setEsxribir({...escribir, imagen:e.target.value});
    }
    const cambiarTipo=(e)=>{
      setEsxribir({...escribir, type:e.target.value});
    }
    if (!editar) {
      return (
        <div className="caja">
          <div className="area-botones">
            <button className="boton" onClick={() => setEditar(true)}>Editar</button>
            <button className="boton" onClick={()=>borrarUno(lugar, id)}>X</button>
          </div>
          <img src={imagen} alt={name} />
          <h2 className='texto'>{name}</h2>
          <p className='texto precio'>Price: ${price}</p>
          <p className='texto store'>En store: {store ? "si" : "no"}</p>
          <p className='texto descripcion'>{description}</p>
          <p className='texto tipo'>Type: {type}</p>
        </div>
      );
    }
    return (
      <form className='caja' onSubmit={evento}>
        <div className="area-botones">
          <button className="boton" onClick={() => setEditar(false)}>Cancelar</button>
          <button className="boton" type="submit">Aceptar</button>
        </div>
        <div className="fila">
          <label>Imagen</label>
          <input type="text" className="entrada" value={escribir.imagen} onChange={cambiarImagen}/>
        </div>
        <div className="fila">
          <label>Name</label>
          <input type="text" className="entrada" value={escribir.name} onChange={cambiarNombre}/>
        </div>
        <div className="fila">
          <label>Precio</label>
          <input type="text" className="entrada" value={escribir.price} onChange={cambiarPrecio}/>
        </div>
        <div className="fila">
          <label>Descripcion</label>
          <input type="text" className="entrada" value={escribir.description} onChange={cambiarDescripcion}/>
        </div>
        <div className="fila checar">
          <label htmlFor="checar">En Store: {escribir.store?"Si":"No"}</label>
         <input type="checkbox" id="checar" checked={escribir.store} onChange={cambiarStore}/>
        </div>
        <div className="fila">
          <label>Type</label>
          <input type="text" className="entrada" value={escribir.type} onChange={cambiarTipo}/>
        </div>
      </form>
    );
  
  }
  