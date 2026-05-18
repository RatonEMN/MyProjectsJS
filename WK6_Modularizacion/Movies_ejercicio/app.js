import { crearUsuario, saludar } from "./users.js";
import {crearPelicula, mostrarInformacion} from "./movies.js";

const usuario = crearUsuario("Emanuel", 25);
const pelicula = crearPeLicula("Piratas del Caribe", "El herrero Will Turner se une al Capitán Jack Sparrow para salvar a su amor, la hija del gobernador, de los antiguos aliados piratas de Jack, que ahora resultan estar vivos.")

console.log(saludar(usuario));

console.log(mostrarInformacion(pelicula));
