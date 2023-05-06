
import React from 'react';
import { useLeerCafe, CafeDatos } from '../Api/leerCafe';
import { useLeerMensajes, Mensajes } from '../Api/leerMensajes';
import { Agregar, useAgregarMensaje } from '../Api/agregarMensaje';


const Contexto = React.createContext({});
type props={
    children:JSX.Element | JSX.Element[]
}

export function Provedor({children}:props) {
    const {cafe} = useLeerCafe();
    const {mensaje} = useLeerMensajes();
    const {generarMensaje} = useAgregarMensaje();
    const [mostrar, setMostrar] = React.useState(false);
    return (
        <Contexto.Provider
            value={
                {
                    cafe,
                    mensaje,
                    generarMensaje,
                    mostrar,
                    setMostrar
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}
interface generar {
    ({name, mail, mensaje}:Agregar):VoidFunction
}
interface valores {
    cafe:CafeDatos[],
    mensaje:Mensajes[],
    generarMensaje:generar
}

export const useContexto = () => React.useContext(Contexto) as valores;

