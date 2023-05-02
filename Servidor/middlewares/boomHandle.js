
function boomHandle(error, req, res, next){
    if(error.isBoom){
        const datos=error.output.payload;
        res.status(datos.statusCode).json(datos);
    }
    next(error);
}

module.exports={boomHandle}