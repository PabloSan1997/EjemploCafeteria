const Moongose = require("mongoose");
const { variables } = require("./envVariables");

const URL = `mongodb+srv://${variables.usuario}:${variables.password}@cafecluster.pbkngux.mongodb.net/${variables.db_name}?retryWrites=true&w=majority`;

function conection() {
  Moongose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports = { conection };
