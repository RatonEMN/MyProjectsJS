// 1. Tu arreglo con datos repetidos
const frutas = ['manzana', 'platano', 'manzana', 'pera', 'platano', 'manzana'];

// 2. Un objeto vacío donde guardaremos los conteos
const conteo = {};

// 3. El bucle for que recorre el arreglo
for (let i = 0; i < frutas.length; i++) {
  let frutaActual = frutas[i];

  // Si la fruta ya existe en el objeto, le sumamos 1
  if (conteo[frutaActual]) {
    console.log(conteo[frutaActual]);
    conteo[frutaActual]++;
    console.log(conteo[frutaActual]);
  } else {
    // Si no existe, la registramos empezando en 1
    conteo[frutaActual] = 1;
  }
}

// 4. Mostramos el resultado en la consola
console.log(conteo);