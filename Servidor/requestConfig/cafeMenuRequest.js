const acciones = {
    leer:"leer",
    leerUno:"leerUno",
    leerGrupo:"leerGrupo",
    agregar:"agregar",
    borrarTodo:"borrarTodo",
    borrarUno:"borrarUno",
    editarUno:"editarUno"
}
async function responseLista(res, next, dato, statusNum,callback, ser){
    try {
        const datos = await ser[callback](dato);
        res.status(statusNum).json(datos);
    } catch (error) {
        next(error);
    }
}

module.exports={acciones, responseLista}