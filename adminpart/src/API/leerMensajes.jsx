import axios from 'axios';
import React from 'react';
export const useLeerMensaje=()=>{
    const [mensajes, setMensajes]=React.useState([]);
    React.useEffect(
        ()=>{
            (async()=>{
                try {
                    const mensajes = await axios.get("https://servercafeteria.onrender.com/api/v1/mensajes/");
                    setMensajes(mensajes.data);
                } catch (error) {
                    console.log("error al leer mendajes");
                    setMensajes([]);
                }
            })();
        }
        ,[]);
        return {mensajes};
}
