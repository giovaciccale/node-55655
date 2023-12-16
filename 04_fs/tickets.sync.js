const fs = require("fs");

let ruta = "./data/tickets.json";

let datos = JSON.stringify([{ title: "hp1", place: "showcase" }], null, 2);

//Crear archivo de forma síncrona
fs.writeFileSync(ruta, datos);

//leer un archivo de forma sincrona
let configuracion = "utf-8";
const datosLeidos = fs.readFileSync(ruta, configuracion);
const datosParseados = JSON.parse(datosLeidos);
console.log(datosParseados); //ahora es un array de objetos si no lo parseas es un array de JSON.

//para eliminar un archivo de forma sincrona
// fs.unlinkSync(ruta)

// para verificar que un archivo existe de forma sincrona 
const existeArchivo = fs.existsSync(ruta)
console.log(existeArchivo)