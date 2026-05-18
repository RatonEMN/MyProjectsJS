function obtenerRangoAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplos de uso:
const lanzarDado = obtenerRangoAleatorio(1, 6);   // Devuelve entre 1 y 6
const edadAleatoria = obtenerRangoAleatorio(18, 65); // Devuelve entre 18 y 65

console.log(lanzarDado);