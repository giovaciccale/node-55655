
const fs = require("fs");

const ruta = "./data/events.json";

const datos = JSON.stringify([{ title: "hp2", place: "cinemark" }], null, 2);

//para crear archivo d eforma asincrona, se supone que siempre es sincrono porque necesitamos el archivo primero para cargar datos
fs.writeFile(ruta,datos,(error)=>{
    if(error){
        console.log(error)
        return error
    }
})


//para leer de forma asincrona
let configuracion = "utf-8";
fs.readFile(ruta,configuracion,(error,exito) =>{
    if(error) {
        console.log(error);
        return error
    } else {
        console.log(exito)
    }


})

//para eliminar el archivo de forma asincrona
// fs.unlink(ruta,(error,exito) =>{
//     if(error) {
//         console.log(error);
//         return error
//     } else {
//         console.log(exito)
//     }


// })