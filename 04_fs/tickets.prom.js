
const fs = require("fs");

const ruta = "./data/events.prom.json";

const datos = JSON.stringify([{ title: "hp3"}], null, 2);

fs.promises.writeFile(ruta,datos)
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));

let configuracion = "utf-8";

fs.promises.readFile(ruta, configuracion)
.then((resultado) => console.log(JSON.parse(resultado)))
.catch((error) => console.log(error));

// fs.promises.unlink(ruta)
// .then((resultado) => console.log(resultado))
// .catch((error) => console.log(error));

