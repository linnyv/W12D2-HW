const express = require("express");

const server = express();

const PORT = process.env.PORT || 3011;

server.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});

// Route: Homepage
server.get("/", (req, res) => {
  res.send(`
    <h1>99 Bottles of Beer on the Wall</h1>
    <a href="/98">Take one down, pass it around</a>
    `);
});

// Route: Bottles?
server.get("/:number_of_bottles", (req, res) => {
  const numeroDeBottles = parseInt(req.params.number_of_bottles);
  let mensaje = `${numeroDeBottles} Bottles of Beer on the Wall.`;

  if (numeroDeBottles > 0) {
    const nextPageLink =
      numeroDeBottles - 1 === 0 ? "" :`<a href="/${numeroDeBottles - 1}"> Take one down, pass it around </a>`;

    mensaje += `<br>${nextPageLink}`;

  } else {
  mensaje += `<br><a href="/">Start over</a>`;
  }
  res.send(mensaje);
});