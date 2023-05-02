const express = require("express");
const { AdminService } = require("../services/usuarioService");
const { responseLista } = require("../requestConfig/cafeMenuRequest");
const { accionesAdmin } = require("../requestConfig/adminRequest");
const { validatorHandler } = require("../middlewares/joiHandle");
const { verUsuario, entrarUsuario } = require("../services/adminSchema");
const adminRouter = express.Router();
const servicio = new AdminService();
const propiedad = "body";
adminRouter.post("/registrar", validatorHandler(verUsuario, propiedad) ,async (req, res, next) => {
 await responseLista(res, next, req.body, 200, accionesAdmin.registrar,servicio);
});

adminRouter.post("/entrar",validatorHandler(entrarUsuario, propiedad) ,async (req, res, next) => {
 await responseLista(res, next, req.body, 200, accionesAdmin.entrar, servicio);
});

module.exports = { adminRouter };
