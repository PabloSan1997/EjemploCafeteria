import axios from 'axios';
import React from 'react';

export const useLeerDatos=()=>{
    const [cafe, setCafe]=React.useState([]);
    React.useEffect(
        ()=>{(async ()=>{
            try {
                const info = await axios.get("https://servercafeteria.onrender.com/api/v1/menuCafe/");
                setCafe(info.data);
            } catch (error) {
                setCafe([]);
            }
        })();}
        ,[]);
        return {cafe}
}