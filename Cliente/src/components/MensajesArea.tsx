import { useContexto } from "../contexto"

interface FilaMensajes{
    name:string,
    mensaje:string
}
export default function MensajesArea() {
    const {mensaje} = useContexto();
  return (
    <div className="mensajes">
        {mensaje.map(ele=>(
            <FilaMensajes key={ele._id} name={ele.name} mensaje={ele.mensaje}/>
        ))}
    </div>
  )
}

function FilaMensajes({name, mensaje}:FilaMensajes):JSX.Element{
    return(
        <div className="fila-mensaje">
            <p className="texto">{name}</p>
            <p className="texto">{mensaje}</p>
        </div>
    );
}