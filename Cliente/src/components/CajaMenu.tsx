import { CafeDatos } from '../Api/leerCafe';
interface propiedades {
    prop: CafeDatos
}
interface datos {
    bebidas: CafeDatos[],
    desayunos: CafeDatos[]
}

export function CajaMenu({ bebidas, desayunos }: datos) {
    return (
        <>
            <div className="fila">
                <h2>Nuestras bebidas</h2>
                <div className="secciones">
                    {bebidas.map(ele => (
                        <Caja key={ele._id} prop={ele} />
                    ))}
                </div>
            </div>
            <div className="fila">
                <h2>Nuestro desayunos</h2>
                <div className="secciones">
                    {desayunos.map(ele => (
                        <Caja key={ele._id} prop={ele} />
                    ))}
                </div>
            </div>
        </>
    );
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