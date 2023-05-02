require("dotenv").config();
const vari = process.env;

const variables = {
    usuario:vari.USUARIO,
    password:vari.PASSWORD,
    db_name:vari.DB_NAME,
    registro:vari.REGISTRO,
    guardian:vari.GUARDIAN
}

module.exports = {
    variables
}