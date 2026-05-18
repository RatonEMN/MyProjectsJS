import { crearUsuario, saludarUsuario } from "./users.js";
import { crearProducto, mostrarPrecio } from "./products.js";

const usuario = crearUsuario("Emanuel", 25);

const producto = crearProducto("Laptop", 15000);

console.log(saludarUsuario(usuario));
console.log(mostrarPrecio(producto));