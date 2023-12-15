class UserManager {
  static #users = [];

  constructor() {}
  create(data) {
    try {
      if (!data.name || !data.photo || !data.email) {
        throw new Error("Name, photo, email are require");
      } else {
        const user = {
          id: this.getID(),
          name: data.name,
          photo: data.photo,
          email: data.email,
        };
        UserManager.#users.push(user);
        return user;
      }
    } catch (error) {
      return error.message;
    }
  }
  read() {
    return UserManager.#users;
  }
  readOne(id) {
    try {
      const user = UserManager.#users.find((each) => each.id === Number(id));
      if (!user) {
        throw new Error("No existe User con el ID " + id );
      } else {
        return UserManager.#users.find((each) => each.id === Number(id));
      }
    } catch (error) {
      return error.message;
    }
  }
  getID() {
    return UserManager.#users.length === 0
      ? 1
      : UserManager.#users[UserManager.#users.length - 1].id + 1; // Estamos usando operador Ternario
  }
}

const Users = new UserManager();

User1 = Users.create({
  name: "Nicolas",
  photo: "URL",
  email: "prueba2@hotmail.com",
});

// console.log(Users.read());
console.log(Users.readOne(4));
// console.log(User1)
