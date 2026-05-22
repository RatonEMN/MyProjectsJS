const arreglo = [1, 2, 3, 4];

console.log(arreglo);

function promedio(arreglo) {
  let total = 0;

  for (let index = 0; index < arreglo.length; index++) {
    let numero = arreglo[index];
    total = total + numero;
  }

  return (promedio = total / arreglo.length);

  // console.log(`El promedio es ${promedio}`);
}

function conteo(arreglo) {
  const conteoArreglo = {};

  for (let i = 0; i < arreglo.length; i++) {
    let numeroActual = arreglo[i];

    if (conteoArreglo[numeroActual]) {
      conteoArreglo[numeroActual]++;
    } else {
      conteoArreglo[numeroActual] = 1;
    }
  }
//   console.log(`Las veces que se repitieron los datos son:`);
//   console.log(conteoArreglo);
//   masRepetido(conteoArreglo);
  return conteoArreglo;

}



function masRepetido(objeto) {
  // 1. Creamos variables para guardar el "récord" actual
  let maxValor = 0; // Empezamos con el número más bajo posible
  let maxNumero = ""; // Aquí guardaremos el nombre

  // 2. Recorremos el objeto clave por clave
  for (const numeroDado in objeto) {
    const valor = objeto[numeroDado];

    // 3. Si el valor actual es mayor que nuestro récord...
    if (valor > maxValor) {
      maxValor = valor; // ...actualizamos el valor máximo
      maxNumero = numeroDado; // ...y guardamos el numero mas repetido
    }
  }

//   console.log(
//     `El numero que mas se repite es el ${maxNumero} con ${maxValor} veces.`,
//   );

return {                                                //   <--------------------------------AQUI ME QUEDE
    maxValor,
    maxNumero,
}

}
