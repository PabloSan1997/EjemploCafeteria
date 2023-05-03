import axios from "axios";
import React from "react";



export function useMandarCafe() {
    const [objetoCafe, setObjetoCafe] = React.useState({});
    const [direccion, setDireccion] = React.useState("");
    const [activar, setActivar] = React.useState(false);
    const statusCodeAceptado = 201;
    React.useEffect(
        () => {
            (async () => {
                try {
                    const mandar = await axios.patch(`https://servercafeteria.onrender.com/api/v1/menuCafe/${direccion}`, objetoCafe);
                    if (mandar.status===statusCodeAceptado) {
                        window.location.reload();
                    }
                } catch (error) {
                    console.log("no se pueden mandar datos")
                }
            })();
        }
        , [activar]);

    const editarCafe = (direc, objeto) => {
        setObjetoCafe(objeto);
        setDireccion(direc);
        setActivar(!activar);
    }
    return { editarCafe }
}