// 🧩 Parte 1: map


// Tienes este arreglo:

const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 100 }
];

// 👉 Crea un nuevo arreglo con solo los nombres


const nombres = productos.map(function (objeto) {
  return objeto.nombre;
});

console.log(nombres);

//Parte 2: Filter

//Filtra los productos que cuesten mas de 100

const productosCaros = productos.filter(function (objeto) {
  return objeto.precio > 100;
});

console.log(productosCaros);


// 🧩 Parte 3: reduce

// 👉 Calcula el precio total de todos los productos

const precioTotal = productos.reduce(function (acumulador, actual) {
  return acumulador + actual.precio;
}, 0);

console.log("El precio total es: " + precioTotal);


// 🧩 Parte 4: tu propio map

// 👉 Crea tu propia versión de map llamada:

const numeros = [2, 4, 6, 8];

function miMap(arreglo, callback) {
  // crear nuevo arreglo
  const nuevoArreglo = [];
  // recorrer arreglo
  for (let i = 0; i <= arreglo.length - 1; i++) {
    // aplicar callback
    let resultado = callback(arreglo[i]);
    // guardar resultado
    nuevoArreglo.push(resultado);
  }

  return nuevoArreglo;

  // retornar nuevo arreglo
}

function callback(numero) {
  return numero * 5;
}


const nuevoArray = miMap(numeros, callback);

console.log(nuevoArray);



//Reforzamiento de HOF
const saludar = () => console.log("Hola");

const saludarLimitado = limitarEjecuciones(saludar, 3);


function limitarEjecuciones(saludo, limite) {
  let contador = 0;

  return function () {
    contador++;

    if (contador <= limite) {
      saludo(); //No hace faltar poner un return por que mi funcion saludo ya imprime el resultado: "Hola"
    }
  };

}

saludarLimitado();
saludarLimitado();
saludarLimitado();
saludarLimitado();



// EJERCICIO 2 — Usar HOF sin map/filter directamente

const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Carlos", edad: 15 },
  { nombre: "Marta", edad: 30 }
];




function mayoresHOF(array, mayuscula) {
  const mayoresEdad = [];

  for (let index = 0; index < array.length; index++) {
    // console.log(`Index: ${index}`);
    // console.log(`array.length: ${array.length}`);
    // console.log(`nombre: ${array[index].nombre}`);
    // console.log(`array: ${array[index]}`);    // const element = array[index];

    let edad = array[index].edad;

    if (edad > 17) {
      let nombre = mayuscula(array[index].nombre);

      mayoresEdad.push(nombre)
    }
  }
  return mayoresEdad;

  // retornar nuevo arreglo
}


function wordUpercase (nombre){
  return nombre.toUpperCase();
}


const usuariosMayores = mayoresHOF(usuarios, wordUpercase);

console.log(usuariosMayores);



// 👉 Los nombres en MAYÚSCULAS
// 👉 SOLO de los usuarios mayores de edad (18+)


const nombresMayuscula = usuarios.filter(function(usuario){
  return usuario.edad > 17;
}).map(function(objeto){
  return objeto.nombre.toUpperCase();
})

console.log(nombresMayuscula);




// 👉 Obtener solo los nombres mayores de edad en mayuscula, con redude

const mayoresDeEdad = usuarios.reduce(function (acumulador, user) {
  if(user.edad > 17){
    acumulador.push(user.nombre.toUpperCase());
  }
  return acumulador;
}, []);

console.log(mayoresDeEdad);