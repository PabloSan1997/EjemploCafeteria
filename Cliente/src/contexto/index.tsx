import React from 'react';
import { useLeerCafe, CafeDatos } from '../Api/leerCafe';


const Contexto = React.createContext({});
type props={
    children:JSX.Element | JSX.Element[]
}

export function Provedor({children}:props) {
    const {cafe} = useLeerCafe();
    
    return (
        <Contexto.Provider
            value={
                {
                    cafe
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}
interface valores {
    cafe:CafeDatos[]
}
export const useContexto = () =>{
    const auth = React.useContext(Contexto) as valores;
    return auth;
}