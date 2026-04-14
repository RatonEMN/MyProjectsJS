// HOF
// Las funciones de orden superior (HOF) en JavaScript son funciones que reciben otras funciones como parámetros o retornan funciones, lo que permite escribir código más flexible y reutilizable

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
// 👉 Crea tu propia versión de map, sin usar map que multiplique cada numero por 5
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

  return nuevoArreglo; // retornar nuevo arreglo
}


function callback(numero) {
  return numero * 5;
}

//LLamo a mi propia funcion map, a la cual le proporciono el arreglo, y la funcion que va a modificar en cada iteracion
const nuevoArray = miMap(numeros, callback);
console.log(nuevoArray);





//Reforzamiento de HOF
//En este ejemplo se controla la cantidad de veces que se puede ejecutar la funcion saludar, con funcion tipo HOF la cual recuerda cuantas veces se ejecuta una funcion al tener un contador

//Funcion callback(funcion normal que se pasa como parametro al HOF)
const saludar = () => console.log("Hola");

// Crea una nueva función (saludarLimitado) a partir de saludar, con la restricción de que solo se podrá ejecutar 3 veces.
const saludarLimitado = limitarEjecuciones(saludar, 3);

//Funcion HOF la cual recibe como parametro la funcion callback y n cantidad de veces
function limitarEjecuciones(saludo, limite) {
  //Me ayuda a guardar cuantas veces se esta ejecutando mi funcion
  let contador = 0;

  return function () {
    //Cada vez que se ejecuta esta funcion se suma en la variable contador de 1 en 1
    contador++;

    //Si contador es menor o igual a mi limite puedo ejecutar la funcion callback
    if (contador <= limite) {
      saludo(); //No hace faltar poner un return por que mi funcion saludo ya imprime el resultado: "Hola"
    }
  };

}

saludarLimitado();
saludarLimitado();
saludarLimitado();
saludarLimitado(); //Este ya no se ejecuta



// EJERCICIO 2 — Usar HOF sin map/filter directamente
const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Carlos", edad: 15 },
  { nombre: "Marta", edad: 30 }
];

// 👉 Los nombres en MAYÚSCULAS
// 👉 SOLO de los usuarios mayores de edad (18+)

//Creo un nuevo arreglo con filter que solo filtra los objetos mayores a 17
const nombresMayuscula = usuarios.filter(function(usuario){
  return usuario.edad > 17;
}).map(function(objeto){ //A ese mismo arreglo que cree obtengo solo los nombres y los convierto a Mayusculas
  return objeto.nombre.toUpperCase();
})

console.log(nombresMayuscula);




// 👉 Obtener solo los nombres mayores de edad en mayuscula, con redude

//Creo un nuevo arreglo con el metodo reduce(acomulador) en el cual filtro con if los objetos que sean mayores a 17, y los guardo en el array: acomulador
const mayoresDeEdad = usuarios.reduce(function (acumulador, user) {
  if(user.edad > 17){
    acumulador.push(user.nombre.toUpperCase());
  }
  return acumulador;
}, []); //Se inicializa el array vacio: []

console.log(mayoresDeEdad);