const boom = require("@hapi/boom");
class MenuLista {
  constructor(Model) {
    this.Model = Model;
  }
  async leer() {
    try {
      const datos = await this.Model.find();
      return datos;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async leerUno(num) {
    try {
      const datos = await this.Model.findById(num);
      if (datos.length === 0) {
        throw "No se esncontro ese elemento";
      }
      return datos;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async leerGrupo(type) {
    try {
      const datos = await this.Model.find({ type });
      if (datos.length === 0) {
        throw "No se esncontro ese elemento";
      }
      return datos;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async agregar(body) {
    try {
      const datos = await this.Model.create(body);
      return { message: "agregado con esxito", datos };
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
  async editarUno(request){
    try {
        const datos = await this.Model.findOneAndUpdate({"_id":request.num}, request.body);
        return {message:"modificado con exito", datos}
    } catch (error) {
        throw boom.badRequest(error);
    }
  }
  async borrarTodo() {
    try {
      const datos = await this.Model.deleteMany();
      return { message: "Se borraron todos los elementos", datos };
    } catch (error) {
        throw boom.badRequest(error);
    }
  }
  async borrarUno(num) {
    try {
        const datos = await this.Model.deleteOne({"_id":num});
        return {message:"Se borro elemento", datos};
    } catch (error) {
        throw boom.badRequest(error);
    }
  }
}

module.exports = { MenuLista };
