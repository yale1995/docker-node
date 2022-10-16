const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (request, response) => {
  response.send("Yale Henrique Araújo dos Santos, Marleide Barros Galdino, Maria Luiza de Araújo Puglia, Luciano Teixeira dos Santos");
});

app.listen(PORT, HOST);
