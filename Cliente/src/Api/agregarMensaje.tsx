import axios from "axios";
import React from "react";

export interface Agregar{
    "name": string,
    "mail": string,
    "mensaje": string,
}
export const useAgregarMensaje = () => {
    const accpted = 201;
    const [agregar, setAgregar] = React.useState<Agregar>({
        name:"",
        mail:"",
        mensaje:""
    });
    const [activar, setActivar] = React.useState<boolean>(false);
    React.useEffect(
        ()=>{
            (async ()=>{
                try {
                    const datos = await axios.post("https://servercafeteria.onrender.com/api/v1/mensajes", agregar);
                    if(datos.status===accpted){
                        window.location.reload();
                    }
                } catch (error) {
                    console.log("No se puede mandar")
                }
            })();
        }
        ,[activar, agregar]);

        const generarMensaje=({name, mail, mensaje}:Agregar)=>{
            setAgregar({name, mail, mensaje});
            setActivar(!activar);
        }
        return {generarMensaje}
}
