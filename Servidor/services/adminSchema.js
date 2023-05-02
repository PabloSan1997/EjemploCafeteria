const Joi = require("joi");

const usuario = Joi.string().min(2).required();
const contra = Joi.string().min(2).required();
const registro = Joi.string().min(2).required();
const verUsuario = Joi.object({
    usuario, contra, registro
});
const entrarUsuario = Joi.object({
    usuario, contra
});

module.exports={verUsuario, entrarUsuario}