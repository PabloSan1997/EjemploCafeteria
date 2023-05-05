import { CafeDatos } from '../Api/leerCafe';
interface propiedades {
    prop: CafeDatos
}
interface datos {
    bebidas: CafeDatos[],
    desayunos: CafeDatos[]
}
interface seccion {
    dato: CafeDatos[],
    titulo:string
}
export function CajaMenu({ bebidas, desayunos }: datos) {
    return (
        <>
            <Seccion dato={bebidas} titulo='Nuestrars Bebidas'/>
            <Seccion dato={desayunos} titulo='Nuestros desayunos'/>
        </>
    );
}

function Seccion({ dato, titulo }: seccion) {
    return (
        <div className="fila">
            <h2>{titulo}</h2>
            <div className="secciones">
                {dato.map(ele => (
                    <Caja key={ele._id} prop={ele} />
                ))}
            </div>
        </div>
    )
}

function Caja({ prop }: propiedades): JSX.Element {
    const { name, imagen, price, description } = prop;
    return (
        <div className="caja">
            <img src={imagen} alt={name} className="imagen" />
            <div className="informacion-area">
                <p className="texto nombre">{name}</p>
                <p className="texto descripcion">{description}</p>
                <p className="texto precio">${price}</p>
            </div>
        </div>
    );
}