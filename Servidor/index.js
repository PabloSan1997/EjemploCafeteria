const express = require("express");
const { conection } = require("./database/config");
const { crearApi } = require("./routers");
const { boomHandle } = require("./middlewares/boomHandle");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
conection();
crearApi(app);
app.use(boomHandle)

app.get("/", (req, res)=>{
   res.json({message:"Working"});
});


app.listen(4001);