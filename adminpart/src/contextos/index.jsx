import React from 'react';
import { useEntrar } from '../API/permiso';
import { useLeerDatos } from '../API/datos';
import { useMandarCafe } from '../API/editar';
import { useAgregarCafe } from '../API/agregarCafe';
import { useLeerMensaje } from '../API/leerMensajes';
import { useEliminarMensaje } from '../API/eliminarMensaje';


const Contexto = React.createContext();

export function ProvedorContexto({ children }) {
    const { permiso, solicitud } = useEntrar();
    const { cafe } = useLeerDatos();
    const {editarCafe} = useMandarCafe();
    const {agregarCafe} = useAgregarCafe();
    const {mensajes} = useLeerMensaje();
    const {borrarUno} = useEliminarMensaje();
    return (
        <Contexto.Provider
            value={{
                solicitud,
                permiso,
                cafe,
                editarCafe,
                agregarCafe,
                mensajes,
                borrarUno
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

export const useContextoAdmin = () => {
    const auth = React.useContext(Contexto);
    return auth;
}