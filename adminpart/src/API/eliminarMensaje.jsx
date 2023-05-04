import axios from 'axios';
import React from 'react';


export const useEliminarMensaje=()=>{
    const [num, setNum] = React.useState("");
    const [activar, setActivar] = React.useState(false);
    const aceptado = 202;
    React.useEffect(
        ()=>{
            (async ()=>{
                try {
                    const borrar = await axios.delete(`https://servercafeteria.onrender.com/api/v1/mensajes/${num}`);
                    if(borrar.status===aceptado){
                        window.location.reload();
                    }
                } catch (error) {
                    console.log("mensaje no borrado")
                }
            })();
        }
        ,[activar]);
        const borrarUno = (id)=>{
            setNum(id);
            setActivar(!activar);
        }
        return {borrarUno};
}