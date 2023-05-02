const Joi = require("joi");

const name = Joi.string().min(1).max(50).required();
const mail = Joi.string().email().required();
const mensaje = Joi.string().min(1).max(350).required();

const agregarMendaje = Joi.object({
    name,mail,mensaje
});

module.exports = {agregarMendaje}