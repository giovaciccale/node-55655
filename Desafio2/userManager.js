const fs = require("fs");

class UserManager {
  constructor() {
    this.ruta = "./data/productManager.json";
    this.usuarios = [];
  }

  

  saveUsers() {
    const jsonData = JSON.stringify(this.usuarios, null, 2);
    fs.writeFileSync(this.ruta, jsonData);

  }

  create(usuario) {
    // Asigna un ID autoincrementable
    usuario.id = this.usuarios.length + 1;

    this.usuarios.push(usuario);
    this.saveUsers();
    console.log("Usuario creado con éxito");
  }

  async loadUsers() {
    try {
      const resultado = await fs.promises.readFile(this.ruta, "utf-8");
      this.usuarios = JSON.parse(resultado);
    } catch (error) {
      console.log("Error al leer el archivo");
    }
  }


  read() {
    console.log(this.usuarios);
  }

  readOne(id) {
    const usuario = this.usuarios.find((p) => p.id === id);
    console.log(usuario);
  }
}



// Uso de la clase ProductManager
const userManager = new UserManager();
const usuarios = [
  {
    name: "Arturo",
    photo: "URL",
    email: "prueba1@hotmail.com",
   
  },
  {
    name: "Juan",
    photo: "URL",
    email: "prueba2@hotmail.com",
  },
  {
    name: "Pedro",
    photo: "URL",
    email: "prueba3@hotmail.com",
  },
];

userManager.loadUsers();
userManager.create(usuarios[0]);
userManager.create(usuarios[1]);
userManager.create(usuarios[2]);
userManager.read();
userManager.readOne(3);