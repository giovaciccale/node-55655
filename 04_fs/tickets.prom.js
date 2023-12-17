
const fs = require("fs");

const ruta = "./data/events.prom.json";

const datos = JSON.stringify([{ title: "hp3"}], null, 2);

fs.promises.writeFile(ruta,datos)
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));