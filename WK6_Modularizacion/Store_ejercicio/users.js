export function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad
  };
}

export function saludarUsuario(usuario) {
  return `Hola ${usuario.nombre}`;
}