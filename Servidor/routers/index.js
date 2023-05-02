const express = require("express");
const { routerMenuCafe } = require("./menuCafeRouter");
const { routerMensaje } = require("./mensajesClientes");
const mainRouter = express.Router();

function crearApi(app){
    app.use("/api/v1", mainRouter);
    mainRouter.use("/menuCafe", routerMenuCafe);
    mainRouter.use("/mensajes", routerMensaje);
}
module.exports={crearApi}