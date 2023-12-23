const { error } = require("console");
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

  async loadProducts() {
    try {
      const resultado = await fs.promises.readFile(this.ruta, "utf-8");
      this.productos = JSON.parse(resultado);
      
    } catch (error) {
      console.log("Error al leer el archivo");
    }
  }

  read() {
    
    console.log(this.productos);
  }

readOne(id) {
  try {
    const producto = this.productos.find((p) => p.id === id);

    if (!producto) {
      throw new Error("Don't exist ID");
    } else {
      console.log(producto);
    }
  } catch (error) {
    console.log(error.message); // Muestra el mensaje de error en la consola
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

productManager.create(productos[0]);
productManager.create(productos[1]);
productManager.create(productos[2]);
productManager.loadProducts();
productManager.read();
productManager.readOne(3);
productManager.readOne(4);

