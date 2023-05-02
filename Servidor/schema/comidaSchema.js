const Joi = require("joi");

const name = Joi.string().min(1);
const price = Joi.number().min(1);
const store = Joi.boolean();
const description = Joi.string().min(1);
const imagen = Joi.string().min(5);
const type = Joi.string().min(1);

const agregarLista = Joi.object(
    {
        name:name.required(),
        price:price.required(),
        store:store,
        description:description.required(),
        imagen:imagen.required(),
        type:type.required()
    }
);
const editarLista = Joi.object({
    name:name,
    price:price,
    store:store,
    description:description,
    imagen:imagen,
    type:type
});

module.exports={agregarLista, editarLista}