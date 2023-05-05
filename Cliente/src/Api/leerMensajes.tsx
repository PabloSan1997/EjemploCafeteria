import axios from 'axios';
import React from 'react';
export interface Mensajes {
    "_id": string,
    "name": string,
    "mail": string,
    "mensaje": string,
    "__v": number
}

export function useLeerMensajes() {
    const [mensaje, setMensaje] = React.useState<Mensajes[]>([]);
    React.useEffect(
        ()=>{
            (async ()=>{
                try {
                    const datos = await axios.get("https://servercafeteria.onrender.com/api/v1/mensajes/");
                    setMensaje(await datos.data);
                } catch (error) {
                    setMensaje([]);
                    console.error("problemas con los mensajes");
                }
            })();
        }
        ,[]);
        return {mensaje}
}