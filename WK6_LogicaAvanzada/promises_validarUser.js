// 1. pedirUsuario()
// 2. validarUsuario(usuario)
// 3. cargarPerfil(usuario)

const prompt = require("prompt-sync")();

usuarios = [
  { user: "martino", nombre: "Jose Martinez", edad: 220 },
  { user: "perezma8", nombre: "Paco Perez", edad: 50 },
];

const pedirUsuario = () => {
  let user_prompt = prompt("Ingresa tu nombre: ");
  let user = user_prompt.trim();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "") {
        reject("No ingre campos vacios");
      } else {
        resolve(user);
        console.log("eXITO");
      }
    }, 1000);
  });
};

const validarUsuario = (user) => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (usuarios.some((u) => u.user === user)) {
      resolve(user);
      console.log("Usuario valido");
      console.log("Cargando perfil");
    } else {
      reject("Usuario invalido");
    }
  }, 1000);
});
};

const cargarPerfil = (user) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const objetoUser = usuarios.find((u) => u.user === user);

    if (objetoUser) {
    console.log("--------------------------");
    console.log("DATOS DEL PERFIL:");
    console.log(`Nombre: ${objetoUser.nombre}`);
    console.log(`Edad: ${objetoUser.edad}`);
    console.log("--------------------------");
  } else {
    console.log("Error: No se encontraron datos para ese usuario.");
  }

  }, 1000);
});
};

pedirUsuario()
  .then((user) => validarUsuario(user))
  .then((user) => cargarPerfil(user))
  .then(() => {
    console.log("Fin");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
