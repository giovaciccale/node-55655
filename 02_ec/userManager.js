class UserManager {
    static #users = [];

    constructor(data){
        this.id= 
        UserManager.#users.length === 0
        ? 1
        : UserManager.#users[UserManager.#users.length - 1].id + 1; // Estamos usando operador Ternario
        this.name = data.name;
        this.photo = data.photo;
        this.email = data.email;

        UserManager.#users.push(this)
    }
    create(data){
        const user = {
            id: 
            UserManager.#users.length === 0
            ? 1
            : UserManager.#users[UserManager.#users.length - 1].id + 1, // Estamos usando operador Ternario
            name: data.name,
            photo: data.photo,
            email: data.email,

        }  
        UserManager.#users.push(user);           
        //  console.log(UserManager.#users);        
    }
    read() {
        return UserManager.#users;
      }
    readOne(id){
        return UserManager.#users.find((each) => each.id === Number(id));
    }
}

const Users = new UserManager({

    name: "Giovanni",
    photo: "URL",
    email: "prueba@hotmail.com",


});

Users.create({

    name: "Nicolas",
    photo: "URL",
    email: "prueba2@hotmail.com",

  });

// console.log(Users.read());
// console.log(Users.readOne(2));