import express from "express";
import routes from "./routes.js";

const app = express();
const port = 3333;

app.use(routes);

// Escutando a porta informada.
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
