import React from 'react';
import axios, {} from "axios";
export type CafeDatos = {
    _id:string,
    name: string,
    price: number,
    store: boolean,
    description: string,
    imagen: string,
    type: string,
    __v: number
}

export function useLeerCafe() {
    const [cafe, setCafe] = React.useState<CafeDatos[]>([]);
    React.useEffect(
        ()=>{
            (async ()=>{
                try {
                    const datos = await axios.get("https://servercafeteria.onrender.com/api/v1/menuCafe/");
                    setCafe(datos.data);
                } catch (error) {
                    console.log("error al descargas datos");
                    setCafe([]);
                }
            })();
        }
        ,[]);
        return {cafe};
}