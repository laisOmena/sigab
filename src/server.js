const express = require("express");

const app = express();
const port = 3333;

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

// Escutando a porta informada.
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
