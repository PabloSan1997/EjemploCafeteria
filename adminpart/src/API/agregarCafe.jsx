import axios from "axios";
import React from "react";



export function useAgregarCafe() {
    const [objetoCafe, setObjetoCafe] = React.useState({});
    const [activar, setActivar] = React.useState(false);
    const statusCodeAceptado = 201;
    React.useEffect(
        () => {
            (async () => {
                try {
                    const mandar = await axios.post("https://servercafeteria.onrender.com/api/v1/menuCafe", objetoCafe);
                    if (mandar.status===statusCodeAceptado) {
                        window.location.reload();
                    }
                } catch (error) {
                    console.log("no se pueden agregar datos")
                }
            })();
        }
        , [activar]);

    const agregarCafe = (objeto) => {
        setObjetoCafe(objeto);
        setActivar(!activar);
    }
    return { agregarCafe }
}