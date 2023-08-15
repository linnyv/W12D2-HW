const express = require("express");

const bonus = express();

const PORT = process.env.PORT || 3003;

bonus.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT}`);
});

let bugCount = 999;

// Route: Homepage
bonus.get("/", (req, res) => {
  res.send(`
    <h1>
    99 little bugs in the code
    99 little bugs
    Take on down
    Patch it around
    127 bugs in the code
    </h1>
    <a href="/127">Take one down, more come around or go down</a>
    `);
});

// Route: Bugs
bonus.get("/:number_of_bugs", (req, res) => {
    const rando = Math.random();

    if (rando < 0.2 && bugCount > 0) {
        bugCount--;
    } else {
        bugCount++;
    }

  let mensaje =  
    `<h1>
    ${bugCount} little bugs
    Take on down
    Patch it around
    Maybe more come around
    </h1>
    <a href="/{bugCount}">Take one down, more come around or go down</a>
  `;

  res.send(mensaje);
});