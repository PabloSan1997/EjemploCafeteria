const express = require("express");
const { MenuLista } = require("../services/menuLista");
const { MensajeModel } = require("../database/schema");
const { responseLista, acciones } = require("../requestConfig/cafeMenuRequest");
const { validatorHandler } = require("../middlewares/joiHandle");
const { agregarMendaje } = require("../schema/mensajesSchema");
const servicio = new MenuLista(MensajeModel);
const routerMensaje = express.Router();
const propiedad = "body";
routerMensaje.get("/", async(req, res, next)=>{
    await responseLista(res, next, null, 200, acciones.leer, servicio);
});

routerMensaje.post("/",validatorHandler(agregarMendaje, propiedad) ,async (req, res, next)=>{
    await responseLista(res, next, req.body, 201, acciones.agregar, servicio);
});

routerMensaje.delete("/borrarTodo",async(req, res, next)=>{
    await responseLista(res, next, null, 202, acciones.borrarTodo, servicio);
});
routerMensaje.delete("/:num", async(req, res, next)=>{
    const {num}=req.params;
    await responseLista(res, next, num, 202, acciones.borrarUno, servicio);
});
module.exports={routerMensaje}