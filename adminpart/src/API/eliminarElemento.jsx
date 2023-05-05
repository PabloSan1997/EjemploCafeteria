import axios from 'axios';
import React from 'react';


export const useEliminar=()=>{
    const [num, setNum] = React.useState({lugar:"", num:""});
    const [activar, setActivar] = React.useState(false);
    const aceptado = 202;
    React.useEffect(
        ()=>{
            (async ()=>{
                
                try {
                    const borrar = await axios.delete(`https://servercafeteria.onrender.com/api/v1/${num.lugar}/${num.num}`);
                    if(borrar.status===aceptado){
                        window.location.reload();
                    }
                } catch (error) {
                    console.log("mensaje no borrado")
                }
            })();
        }
        ,[activar]);
        const borrarUno = (lugar ,num)=>{
            setNum({lugar, num});
            setActivar(!activar);
        }
        return {borrarUno};
}