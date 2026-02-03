//--Bloque 1: El "Upgrade" (Convertir a Arrow Function)
//--Convierte estas funciones tradicionales a su versión de flecha más corta posible (usando retorno implícito si se puede).

function saludo(nombre = "amigo") {
    return "Hola "+nombre;
}

//Arrow fuction de forma explicita:
const saludoExplicito = (nombre = "amigo") => {return "Hola "+nombre};


//Arrow fuction de forma implicita:
const saludoImplicito = (nombre = "amigo") => `Hola ${nombre}`;


//--Con un parámetro

//Funcion tradicional:
function cuadrado(n) {
    return n * n;
}

//Arrow fuction de forma explicita:
const cuadradoExplicito = (n) => {return n*n};

//Arrow fuction de forma implicita:
const cuadradoImplicito = (n) => n*n ;


//--Con 2 parametros

//Funcion tradicional:
function multiplicar(a, b) {
    return a * b;
}

//Arrow fuction de forma explicita:
const multiplicarExplicito = (a,b) => {
    return a*b
};


//Arrow fuction de forma implicito:
const multiplicarImplicito = (a,b) => a*b ;


// Bloque 2: Creación desde cero
// Escribe las siguientes funciones directamente como Arrow Functions:
// 4. esAdulto: Recibe una edad y devuelve true si es mayor o igual a 18, de lo contrario false.

console.log("-----------Ejercicio 4----------------)");
const esAdulto = (edad) => edad >= 18 ;
console.log(esAdulto(17));

// 5. obtenerIVA: Recibe un precio y devuelve el 21% de ese precio (multiplicar por 0.21).

console.log("-----------Ejercicio 5----------------)");
const obtenerIVA = (precio) => precio * 0.21 ;
console.log(obtenerIVA(100));

// 6. crearUsuario: Recibe un nombre y una edad, y devuelve un objeto con esta estructura: { nombre: '...', edad: ... }. 
// (Cuidado aquí: recuerda el truco de los paréntesis para devolver objetos).

console.log("-----------Ejercicio 6----------------)");
const crearUsuario = (nombre,edad) => ({
   nombre , edad
});

console.log(crearUsuario("Emanuel",30));


// Bloque 3: Aplicación en Arrays
// Usa métodos de array (map, filter) junto con arrow functions:
// Filtrar: Dado const edades = [12, 18, 25, 10, 30], crea un nuevo array llamado mayores que solo contenga los números mayores de 17.
console.log("-----------Ejercicio 7----------------)");
edades = [12, 18, 25, 10, 30];

const edadesMayores = edades.filter(edad => edad >17 ); //en la variable edad se guardan los datos que hace el codigo en cada iteracion, por eso posteriormente las compara

console.log(edadesMayores); //en este caso edadMayores no es una funcion, si no que es un arreglo en el cual se guardaron los datos del filtro que aplique


// Transformar: Dado const nombres = ["ana", "luis", "pedro"], crea un nuevo array llamado enMayusculas donde cada nombre esté en mayúsculas (puedes usar .toUpperCase()).

console.log("-----------Ejercicio 8----------------)");
const nombres = ["ana", "luis", "pedro"];

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());

console.log(nombresMayusculas);

//Crea una nuevo ejemplo usando la funcion map:
const numeros = [1,2,3,4,5];
const numerosDuplicados = numeros.map(n => n*2);
console.log(numerosDuplicados);


