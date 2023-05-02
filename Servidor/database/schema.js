const Mongoose = require("mongoose");

const cafeMenuSchema = new Mongoose.Schema({
  name: String,
  price: Number,
  store: {
    type: Boolean,
    default: true,
  },
  description: String,
  imagen: String,
  type: String,
});
const mensajeSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
});
const adminSchema = new Mongoose.Schema({
  datos:String
});
const CafeMenuModel = Mongoose.model("cafemenu", cafeMenuSchema);
const MensajeModel = Mongoose.model("mensajes", mensajeSchema);
const AdminEntrar = Mongoose.model("adminpart", adminSchema);

module.exports = { CafeMenuModel, MensajeModel, AdminEntrar};
