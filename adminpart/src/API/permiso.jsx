import axios from 'axios';
import React from 'react'
import {useCookies} from "react-cookie"

export function useEntrar(){
    const [permiso, setPermiso] = React.useState(false);
    const [cookies, setCookie,] = useCookies(['hola']);
    const [generar, setGenerar] = React.useState(false);
    const usuario = !!cookies.hola?cookies.hola.usuario:"";
    const contra = !!cookies.hola?cookies.hola.contra:"";
    const [escribir, setEscribir]=React.useState({usuario, contra});
    React.useEffect(
        ()=>{(async ()=>{
            try {
                const mandar = await axios.post("https://servercafeteria.onrender.com/api/v1/admin/entrar", {
                    usuario:escribir.usuario,
                    contra:escribir.contra
                });
                setPermiso(mandar.data.aceptar);
            } catch (error) {
                console.log(error);
                setPermiso(false);
            }
        })();}
        ,[generar]);
        const solicitud = (usuario, contra) =>{
            setEscribir({usuario, contra})
            setCookie("hola", JSON.stringify({usuario, contra}), {maxAge:60*60});
            setGenerar(!generar);
        }
    return {permiso, solicitud}
}