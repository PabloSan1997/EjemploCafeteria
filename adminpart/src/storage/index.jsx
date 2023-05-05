export const paginaActual = ()=>{
    if(!localStorage.pagina){
        localStorage.pagina="/admin";
    }
    return localStorage.pagina
}

export const cambiarPagina = (pagina) =>{
    localStorage.pagina=pagina;
}