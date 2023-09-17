const express = require("express");
const app = express();

//RUTAS
const routes = require("./routes/index.routes");

app.use(routes);

app.listen(3000, () => {
  console.log("Servidor funcionando en puerto 3000");
});
