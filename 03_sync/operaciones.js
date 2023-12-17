// callbacks : una funcion que requiere una función como parametro. Manejamos un error con callbacks

// function callbacks(error, exito) {
//   if (error) {
//     console.log("hay un error" + error);
//   } else {
//     console.log("El resultado de la operacion es:" + exito);
//   }
// }

// function dividir(n1, n2, callbacks) {
//     if (n1 && n2 !==0) {
//         callbacks(null,n1/n2)

//     } else {

//        callbacks(" n1 no existe o n2 es cero");
//     }
// }

// function calcular(num1,num2,operacion){
//     operacion(num1,num2)
//     .then(resultado => {
//         console.log(resultado);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }

// calcular(10,0,dividir)

//promesa. Manejamos el error con promesas

function dividir(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n1 > 0 && n2 !== 0) {
      resolve("el resultado de la operacion es:" + n1 / n2);
    } else {
      reject("Ocurrio un error");
    }
  });
}

// Uso de .then/.catch:

function calcular(num1, num2, operacion) {
  operacion(num1, num2)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error));
}

//Uso de Asincronismo async/await:

// async function calcular(num1, num2, operacion) {
//     try {
//         const resultado = await operacion(num1, num2);
//         console.log(resultado);
//     } catch (error) {
//         console.error(error);
//     }
// }

// con throw te adelantas al error y lo podes capturar para manejarlo con el catch
calcular(10, 0, dividir);
