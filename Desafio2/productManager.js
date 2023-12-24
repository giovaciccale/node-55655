const fs = require("fs");

class ProductManager {
  constructor() {
    this.ruta = "./data/productManager.json";
    this.productos = [];
  }

  saveProducts() {
    const jsonData = JSON.stringify(this.productos, null, 2);
    fs.writeFileSync(this.ruta, jsonData);
  }

  create(producto) {
    // Asigna un ID autoincrementable
    producto.id = this.productos.length + 1;

    this.productos.push(producto);
    this.saveProducts();
    console.log("Producto creado con éxito");
  }

  loadProducts() {
    try {
      const resultado = fs.readFileSync(this.ruta, "utf-8");
      this.productos = JSON.parse(resultado);
      console.log(this.productos);
    } catch (error) {
      console.log("No hay productos creados");
    }
  }

  readOne(id) {
    try {
      const producto = this.productos.find((p) => p.id === id);
      if (!producto) {
        throw new Error("Don't exist product with ID" + id);
      } else console.log(producto);
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
}

// Uso de la clase ProductManager
const productManager = new ProductManager();
const productos = [
  {
    title: "Bicicleta",
    photo: "URL",
    price: 15000,
    stock: 20,
  },
  {
    title: "Moto",
    photo: "URL",
    price: 700,
    stock: 10,
  },
  {
    title: "Triciclo",
    photo: "URL",
    price: 20,
    stock: 1,
  },
];

productManager.loadProducts();
// productManager.create(productos[0]);
// productManager.create(productos[1]);
// productManager.create(productos[2]);

productManager.readOne(3);
