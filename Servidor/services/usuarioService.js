const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const cript = require("bcrypt");
const { variables } = require("../database/envVariables");
const { AdminEntrar } = require("../database/schema");

class AdminService {
  async registrar(data) {
    if (data.registro === variables.registro) {
      const usuario = data.usuario;
      const contra = cript.hashSync(data.contra, 8);
      const datos = jwt.sign({ usuario, contra }, variables.guardian);
      await AdminEntrar.deleteMany();
      await AdminEntrar.create({ datos });
      return { message: "usuario agregado con exito" };
    }
    throw boom.unauthorized("No tiene permiso para entrar");
  }
  async entrar(data) {
    try {
      const informacion = await AdminEntrar.find();
      const objeto = jwt.verify(informacion[0].datos, variables.guardian);
      const verificar = await cript.compare(data.contra, objeto.contra);
      const aceptar = verificar && data.usuario === objeto.usuario;
      return { aceptar };
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
}
module.exports = { AdminService };
