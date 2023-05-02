const express = require("express");
const { conection } = require("./database/config");
const { crearApi } = require("./routers");
const { boomHandle } = require("./middlewares/boomHandle");

const app = express();

app.use(express.json());
conection();
crearApi(app);
app.use(boomHandle)

app.get("/", (req, res)=>{
   res.json({message:"Working"});
});


app.listen(4001);