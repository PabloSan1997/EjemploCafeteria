const express = require("express");
const {  MenuLista } = require("../services/menuLista");
const { CafeMenuModel } = require("../database/schema");
const { acciones, responseLista } = require("../requestConfig/cafeMenuRequest");
const servicio = new MenuLista(CafeMenuModel);
const routerMenuCafe = express.Router();

routerMenuCafe.get("/", async (req, res, next)=>{
   await responseLista(res, next, null, 200, acciones.leer, servicio);
});
routerMenuCafe.get("/:num", async (req, res, next)=>{
    const {num} = req.params;
    await responseLista(res, next, num, 200, acciones.leerUno, servicio);
});
routerMenuCafe.get("/categoria/:body", async(req, res, next)=>{
    const {body} = req.params;
    await responseLista(res, next, body, 200, acciones.leerGrupo, servicio);
});

routerMenuCafe.post("/", async (req, res, next)=>{
    await responseLista(res, next, req.body, 201, acciones.agregar, servicio);
});
routerMenuCafe.patch("/:num", async (req, res, next)=>{
    const {num} = req.params;
    const request = {
        num,
        body:req.body
    }
    await responseLista(res, next, request, 201, acciones.editarUno, servicio);
});
routerMenuCafe.delete("/borrarTodo",async(req, res, next)=>{
    await responseLista(res, next, null, 202, acciones.borrarTodo, servicio);
});
routerMenuCafe.delete("/:num", async(req, res, next)=>{
    const {num}=req.params;
    await responseLista(res, next, num, 202, acciones.borrarUno, servicio);
});


module.exports={routerMenuCafe}