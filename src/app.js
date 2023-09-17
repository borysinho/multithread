import express from "express";
import pagos from "./routes/pagos.routes.js";
import deudas from "./routes/deudas.routes.js";

const app = express();

app.use(express.json());

//RUTAS

app.use("/api", pagos);
app.use("/api", deudas);

app.listen(3000, () => {
  console.log("Servidor funcionando en puerto 3000");
});
