import React from 'react'
import { useContextoAdmin } from '../contextos';
import "../estilos/agregarCafe.css";
export default function AgregarCafe() {
    const [escribir, setEsxribir] = React.useState({ name: "", price: "", store: true, description: "", imagen: "", type: "" });
    const { agregarCafe} = useContextoAdmin();
    const evento = (e) => {
        e.preventDefault();
        agregarCafe(escribir);
    }
    const cambiarNombre = (e) => {
        setEsxribir({ ...escribir, name: e.target.value });
    }
    const cambiarPrecio = (e) => {
        setEsxribir({ ...escribir, price: Number(e.target.value) });
    }
    const cambiarStore = (e) => {
        setEsxribir({ ...escribir, store: e.target.checked });
    }
    const cambiarDescripcion = (e) => {
        setEsxribir({ ...escribir, description: e.target.value });
    }
    const cambiarImagen = (e) => {
        setEsxribir({ ...escribir, imagen: e.target.value });
    }
    const cambiarTipo = (e) => {
        setEsxribir({ ...escribir, type: e.target.value });
    }
    return (
        <form className="formularioCafe" onSubmit={evento}>
            <div className="fila">
                <label htmlFor="imagen">Imagen</label>
                <input
                    type="text"
                    className="entrada"
                    value={escribir.imagen}
                    onChange={cambiarImagen}
                    id="imagen" />
            </div>
            <div className="fila">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="entrada"
                    value={escribir.name}
                    onChange={cambiarNombre}
                    id="name"/>
            </div>
            <div className="fila">
                <label htmlFor="precio">Precio</label>
                <input
                    type="text"
                    className="entrada"
                    value={escribir.price}
                    onChange={cambiarPrecio} 
                    id="precio"/>
            </div>
            <div className="fila">
                <label htmlFor="desc">Descripcion</label>
                <input
                    type="text"
                    className="entrada"
                    value={escribir.description}
                    onChange={cambiarDescripcion}
                    id='desc' />
            </div>
            <div className="fila checado">
                <label htmlFor="checar">En Store: {escribir.store ? "Si" : "No"}</label>
                <input
                    type="checkbox"
                    id="checar"
                    checked={escribir.store}
                    onChange={cambiarStore} />
            </div>
            <div className="fila">
                <label htmlFor="type">Type</label>
                <input
                    type="text"
                    className="entrada"
                    value={escribir.type}
                    onChange={cambiarTipo}
                    id="type" />
            </div>
            <div className="area-boton">
                <button className="boton">Agregar</button>
            </div>
        </form>
    )
}
