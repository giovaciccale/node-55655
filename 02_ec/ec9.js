// const datos = {
//   nombre: "ignacio",
//   apellido: "borraz",
//   edad: "32",
// };
// const datosExtras = {
//   ciudad: "Rosario",
//   nacimiento: 1990,
// };

// // const objetosUnidos = {datos, datosExtras} muestra objetos unidos
// // console.log(objetosUnidos);

// const objetosUnidos = { ...datos, ...datosExtras }; // Operador Spread
// // console.log(objetosUnidos);

// // Desestructuración nueva forma de sacar los atributos de los objetos o arrays convirtiendolós en variables
// // const { nombre, apellido } = datos;
// // Es lo mismo que
// // const nombre = datos.nombre
// // console.log(apellido);
// // Estructuracion es lo mismo pero al revés puedo crear un objeto o array a través de variables
// const poder = "Inteligencia";
// const heroe = { poder };
// // console.log(heroe);
// // rest: es un spread dentro de una desustruración y muestra el resto de las propiedades
// const { nombre, ...rest } = objetosUnidos;
// // console.log(rest);
// // Vimos nullis que se usa ?? para evaluar que sea null o undefined
// //  y variables privadas dentro de una clase
// // Vimos el operador ternario y el && que retorna solo si es true la condicion
// const nula = null;
// // nula ?? console.log("la variable es null o undefined");

// // variables o metodos privados con # solamente funciona adentro de la clase producto
// class Producto {
//   #costo_unitario;
//   constructor(datos) {
//     this.nombre = datos.nombre;
//   }
//   #ganancia() {
//     return this.nombre;
//   }
// }

// Metodos y propiedades
// Static se utiliza para crear metodos y atributos de la clase y no de la instancia
// osea que se pueden utilizar de la clase sin crear el objeto

class EventManager {
  //propiedad estatica o de la clase
  static events = [];
  //# para definir propiedad privada (para usarse dentro de la clase)
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor(data) {
    this.id =
      EventManager.events.length === 0
        ? 1
        : EventManager.events[EventManager.events.length - 1].id + 1; // Estamos usando operador Ternario
    this.place = data.place;
    this.price = data.price || 10;
    this.capacity = data.capacity || 50;
    this.date = data.date || new Date();
    EventManager.events.push(this);
  }

  create(data) {
    const event = {
      id:
          EventManager.events.length === 0
          ? 1
          : EventManager.events[EventManager.events.length - 1].id + 1,
      name: data.name,
      place: data.place,
      price: data.price || 10,
      capacity: data.capacity || 50,
      date: data.date || new Date(),
    };
    EventManager.events.push(event);
  }

  read() {
    return EventManager.events;
  }
  readById(id) {
    return EventManager.events.find((each) => each.id === Number(id));
  }
  // soldTicket(quantity, eventId) {
  //   const event = this.readById(eventId); //guardo el evento a modificar (al vender entradas tengo que disminuir la capacidad)
  //   event.capacity = event.capacity - quantity;
  //   //tengo que sumar (cantidad * precio * %ganancia)
  //   EventManager.#totalGain =
  //     EventManager.#totalGain + quantity * event.price * EventManager.#perGain;
  //   return true;
  // }
  // getGain() {
  //   return EventManager.#totalGain;
  // }
}

// Creo un objeto

// const harryPotter1 = new EventManager({

//   name: "harry potter 1",
//   place: "Showcase",
// });
// const harryPotter2 = new EventManager({

//   name: "harry potter 2",
//   place: "Showcase",
// });
// const harryPotter3 = new EventManager({

//   name: "harry potter 3",
//   place: "Showcase",
// });
// const harryPotter4 = new EventManager({

//   name: "harry potter 4",
//   place: "Showcase",
// });

// console.log(harryPotter1);
// console.log(EventManager.events); // como no es static lo llamo desde la clase al array Events

// Puedo crear un metodo para crear objetos y no tener que hacer new todo el tiempo , solo tengo que crear un solo objeto

const events = new EventManager({
  name: "harry potter 1",
  place: "showcase",
});
events.create({
  name: "harry potter 2",
  place: "showcase",
});
// events.create({
//   name: "harry potter 3",
//   place: "showcase",
// });
// events.create({
//   name: "harry potter 4",
//   place: "showcase",
// });
// console.log(EventManager.events);

// Teng oque generar un metodo que devuelva todos los eventos
// console.log(events.read())
// console.log(events.readById(1));

//Luego de vender disminuyen las cantidades
// events.soldTicket(5, 2);
// events.soldTicket(15, 3);
// console.log(events.read());

// Metodo para ver la ganancia
// console.log(events.getGain());