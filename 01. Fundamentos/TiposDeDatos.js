// ============================================================
// EJERCICIOS — TIPOS DE DATOS EN JAVASCRIPT
// ============================================================
//
// Instrucciones:
// Resuelve cada ejercicio directamente debajo de su comentario.
// Utiliza console.log() para comprobar tus resultados.
//
// No incluyo las respuestas.
// ============================================================


// ============================================================
// 1. STRING — DATOS DE TEXTO
// ============================================================
//
// Crea una variable llamada "nombre" que contenga tu nombre.
//
// Después:
// 1. Imprime el nombre.
// 2. Imprime la cantidad de caracteres que tiene.
// 3. Convierte el nombre a mayúsculas.
// 4. Convierte el nombre a minúsculas.
// 5. Comprueba si el nombre contiene la letra "a".
// ============================================================

// Escribe tu código aquí:
let nombre = "Diego";

console.log(`Nombre: ${nombre}`);
console.log(`Caracteres: ${nombre.length}`);
console.log(`Nombre en mayuscula: ${nombre.toUpperCase()}`);
console.log(`Nombre en minuscula: ${nombre.toLowerCase()}`);
console.log(`Contiene la letra a? ${nombre.includes("a")}`);

// ============================================================
// 2. STRING — TEMPLATE LITERALS
// ============================================================
//
// Crea las variables:
// - nombre
// - apellido
// - ciudad
//
// Utiliza un template literal para crear una frase como:
//
// "Hola, mi nombre es Carlos Pérez y vivo en Querétaro."
//
// Imprime la frase en consola.
// ============================================================

// Escribe tu código aquí:

const MiNombre = "Diego", MiApellido= "Maradona", ciudad = "Buenos Aires";

console.log(`Hola, mi nombre es ${MiNombre} ${MiApellido} y vivo en ${ciudad}`);


// ============================================================
// 3. STRING — MÉTODOS
// ============================================================
//
// Utiliza el siguiente texto:
//
// "   JavaScript es un lenguaje increíble   "
//
// Realiza lo siguiente:
// 1. Elimina los espacios del principio y del final.
// 2. Convierte todo el texto a mayúsculas.
// 3. Convierte todo el texto a minúsculas.
// 4. Comprueba si contiene la palabra "JavaScript".
// 5. Obtén solamente la palabra "JavaScript".
// ============================================================

// Escribe tu código aquí:
let texto = "   JavaScript es un lenguaje increíble   ";

console.log(`Texto sin espacios ${texto.trim()}`);
console.log(`Texto en mayusculas ${texto.toUpperCase()}`);
console.log(`Texto en minusculas ${texto.toLowerCase()}`);
console.log(`Contiene la palabra JavaScript? ${texto.includes("JavaScript")}`);
console.log(`Solo: ${texto.slice(3,13)}`);



// ============================================================
// 4. NUMBER — OPERACIONES
// ============================================================
//
// Crea dos variables:
//
// precio = 250
// cantidad = 3
//
// Calcula e imprime:
// 1. La suma.
// 2. La resta.
// 3. La multiplicación.
// 4. La división.
// 5. El residuo.
// ============================================================

// Escribe tu código aquí:
const precio = 250, cantidad = 3;

let suma = precio + precio + precio;
console.log(`Suma de precio 3 veces: ${suma} `)

let resta = precio - 50;
console.log(`Precio menos 50 es igual a: ${resta}`);

let multiplicación = precio * 3;
console.log(`El precio multiplicado por 3 es: ${multiplicación}`);

let division = multiplicación / 3;
console.log(`El precio unitario es: ${division}`);

let residuo = precio % 3;
console.log(`El residuo es ${residuo}`);

// ============================================================
// 5. NUMBER — PRECIO TOTAL
// ============================================================
//
// Un producto cuesta $850.
// Quieres comprar 4 unidades.
//
// Calcula:
// 1. El precio total.
// 2. Un descuento del 10%.
// 3. El precio final.
//
// Imprime los tres resultados.
// ============================================================

// Escribe tu código aquí:

const precioProducto = 850, unidades = 4;

let precioTotal = precioProducto * unidades;
console.log(`El precio total es : $${precioTotal.toFixed(2)}`);

let descuento = precioTotal * 0.1;
console.log(`El descuento es del: $${descuento.toFixed(2)}`);

let precioFinal = precioTotal - descuento;
console.log(`El precio final es de $${precioFinal}`);




// ============================================================
// 6. NUMBER — DECIMALES
// ============================================================
//
// Utiliza:
//
// let precio = 125.6789;
//
// Realiza lo siguiente:
// 1. Muestra el precio con 2 decimales.
// 2. Muestra el precio con 3 decimales.
// 3. Comprueba si el número es entero.
// ============================================================

// Escribe tu código aquí:

let price = 125.6789;
console.log(`Precio con 2 decimales $${price.toFixed(2)}`)
console.log(`Precio con 3 decimales $${price.toFixed(3)}`)

let tipoNumero = Number.isInteger(price);

console.log(`El precio es entero? ${tipoNumero}`);




// ============================================================
// 7. BOOLEAN — TRUE Y FALSE
// ============================================================
//
// Crea tres variables booleanas:
//
// - usuarioActivo
// - tienePermiso
// - estaLogueado
//
// Asígnales valores true o false.
//
// Después imprime cada variable.
// ============================================================

// Escribe tu código aquí:

let usuarioActivo = true, tienePermiso = false, estaLogueado = true;

console.log(`El usuario esta activo? ${usuarioActivo}`);
console.log(`El usuario tiene permiso? ${tienePermiso}`);
console.log(`El usuario esta logueado? ${estaLogueado}`);



// ============================================================
// 8. BOOLEAN — COMPARACIONES
// ============================================================
//
// Crea:
//
// let edad = 25;
//
// Utiliza operadores de comparación para comprobar:
// 1. Si la edad es mayor o igual a 18.
// 2. Si la edad es menor que 30.
// 3. Si la edad es exactamente 25.
// 4. Si la edad es diferente de 20.
//
// Imprime todos los resultados.
// ============================================================

// Escribe tu código aquí:
let edad = 25;

if (edad >= 18) {
    console.log(`Es mayor de edad`);
}

if(edad < 30){
    console.log(`Es menor de 30`);
}

if(edad == 25){
    console.log(`Es igual a 25`);
}

if(edad !== 20){
    console.log(`La edad es diferente a 20`);
}

// ============================================================
// 9. TRUTHY Y FALSY
// ============================================================
//
// Utiliza Boolean() para comprobar cuáles valores
// son truthy y cuáles son falsy.
//
// Comprueba:
//
// false
// true
// 0
// 1
// -10
// ""
// "Hola"
// null
// undefined
// NaN
// []
// {}
//
// IMPORTANTE:
// Antes de ejecutar el código, intenta predecir
// cuáles serán true y cuáles serán false.
// ============================================================

// Escribe tu código aquí:

// false -> false
// true -> true
// 0 -> true
// 1 -> true
// -10 -> false
// "" -> false
// "Hola" -> true
// null -> false
// undefined -> false
// NaN -> false
// [] -> true
// {} -> true

console.log("false es "+Boolean(false));
console.log("true es "+Boolean(true));
console.log("0 es "+Boolean(0));
console.log("1 es "+Boolean(1));
console.log("-10 es "+Boolean(-10));
console.log(" Doble comilla '' es "+Boolean(""));
console.log("Hola es "+Boolean("Hola"));
console.log("null es "+Boolean(null));
console.log("undefined es "+Boolean(undefined));
console.log("NaN es "+Boolean(NaN));
console.log("[] es "+Boolean([]));
console.log("{} es "+Boolean({}));


// ============================================================
// 10. UNDEFINED
// ============================================================
//
// Declara una variable llamada "resultado"
// sin asignarle ningún valor.
//
// Después:
// 1. Imprime resultado.
// 2. Comprueba su tipo utilizando typeof.
// 3. Asígnale el valor 100.
// 4. Imprime nuevamente resultado.
// 5. Comprueba nuevamente su tipo.
// ============================================================

// Escribe tu código aquí:

let miResultado;

console.log(`Resultado es igual a ${miResultado}`);
console.log(`El tipo de dato es `+typeof(miResultado));

miResultado = 100;
console.log(`El nuevo resultado es ${miResultado}`);
console.log(`El tipo de dato es `+typeof(miResultado));



// ============================================================
// 11. NULL
// ============================================================
//
// Crea una variable llamada "usuarioSeleccionado"
// y asígnale inicialmente null.
//
// Después:
// 1. Imprime su valor.
// 2. Comprueba su tipo utilizando typeof.
// 3. Asígnale un objeto.
// 4. Comprueba nuevamente su valor y su tipo.
// ============================================================

// Escribe tu código aquí:

let usuarioSeleccionado = null;

console.log("El valor de usuarioSeleccionado es "+usuarioSeleccionado);
console.log("El tipo de valor es "+typeof(usuarioSeleccionado));

usuarioSeleccionado = {};

console.log(usuarioSeleccionado);
console.log("El tipo de valor de usuarioSeleccionado es "+typeof(usuarioSeleccionado));


// ==   ==========================================================
// 12. OBJECT — OBJETOS
// ============================================================
//
// Crea un objeto llamado "persona" con:
//
// - nombre
// - edad
// - ciudad
// - profesion
//
// Después:
// 1. Imprime el objeto completo.
// 2. Imprime solamente el nombre.
// 3. Imprime solamente la ciudad.
// 4. Modifica la edad.
// 5. Agrega una propiedad llamada "activo".
// 6. Imprime nuevamente el objeto.
// ============================================================

// Escribe tu código aquí:

const persona = {
    nombre: "Valentin Elizalde",
    ciudad: "Sinaloa",
    edad: 30,
    profesion: "programador"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);

persona.edad = 25;
console.log(persona.edad);

persona.estatus = "activo";

console.log(persona);


// ============================================================
// 13. ARRAY — LISTA DE DATOS
// ============================================================
//
// Crea un array llamado "frutas" con 5 frutas.
//
// Después:
// 1. Imprime el array.
// 2. Imprime la primera fruta.
// 3. Imprime la última fruta.
// 4. Comprueba cuántos elementos tiene.
// 5. Agrega una fruta.
// 6. Modifica una fruta existente.
// 7. Imprime nuevamente el array.
// ============================================================

// Escribe tu código aquí:

const frutas = ["pera", "mango", "platano", "naranja", "uva"];

console.log("Mi arreglo es "+frutas);
console.log("La primera fruta es "+frutas[0]);
console.log("La ultima fruta es "+frutas[frutas.length-1]);
console.log("Los elementos de frutas son "+frutas.length);

frutas.push("manzana");
frutas[2] = "papaya";

console.log(frutas);


// ============================================================
// 14. OBJECT + ARRAY
// ============================================================
//
// Crea un objeto llamado "usuario" con:
//
// - nombre
// - edad
// - hobbies
//
// "hobbies" debe ser un array con al menos 3 elementos.
//
// Después:
// 1. Imprime el nombre.
// 2. Imprime el primer hobby.
// 3. Imprime el último hobby.
// 4. Agrega un nuevo hobby.
// 5. Imprime el objeto completo.
// ============================================================

// Escribe tu código aquí:


const usuario = {
    nombre: "Iron Man",
    edad: 35,
    hobbies: ["Jugar", "Comer", "Bailar"]
}

console.log(usuario.nombre);
console.log(usuario.hobbies[0]);
console.log(usuario.hobbies[2]);

usuario.hobbies.push("Dormir");

console.log(usuario);


// ============================================================
// 15. TYPEOF
// ============================================================
//
// Utiliza typeof para descubrir el tipo de:
//
// "Hola"
// 42
// 3.14
// true
// false
// undefined
// null
// []
// {}
// 100n
//
// Antes de ejecutar el código, intenta predecir
// qué resultado obtendrás en cada caso.
// ============================================================

// Escribe tu código aquí:




// ============================================================
// 16. CONVERSIÓN DE TIPOS
// ============================================================
//
// Convierte los siguientes valores:
//
// "100"  → number
// 250    → string
// 1      → boolean
// 0      → boolean
// ""     → boolean
// "Hola" → boolean
//
// Utiliza:
//
// Number()
// String()
// Boolean()
//
// Comprueba los resultados utilizando typeof.
// ============================================================

// Escribe tu código aquí:




// ============================================================
// 17. COERCIÓN DE TIPOS
// ============================================================
//
// Sin ejecutar el código, intenta predecir
// el resultado y el tipo de cada operación:
//
// "5" + 2
// "5" - 2
// "5" * 2
// "5" / 2
// 5 + "2"
// 5 - "2"
//
// Después utiliza console.log() y typeof
// para comprobar tus respuestas.
// ============================================================

// Escribe tu código aquí:




// ============================================================
// 18. == VS ===
// ============================================================
//
// Predice el resultado de cada comparación:
//
// 5 == "5"
// 5 === "5"
//
// 10 == "10"
// 10 === "10"
//
// true == 1
// true === 1
//
// 0 == false
// 0 === false
//
// Después comprueba tus respuestas.
//
// Finalmente, escribe en un comentario:
//
// ¿Por qué es recomendable utilizar ===
// en lugar de == en la mayoría de los casos?
// ============================================================

// Escribe tu código aquí:




// ============================================================
// 19. ANÁLISIS DE TIPOS
// ============================================================
//
// Crea las siguientes variables:
//
// const valor1 = "100";
// const valor2 = 100;
// const valor3 = true;
// const valor4 = null;
// const valor5 = undefined;
// const valor6 = [];
//
// Para cada variable determina:
// 1. Su tipo.
// 2. Si es truthy o falsy.
// 3. El resultado de typeof.
//
// Antes de ejecutar el código,
// intenta predecir todos los resultados.
// ============================================================

// Escribe tu código aquí:




// ============================================================
// 20. RETO FINAL — PRODUCTO
// ============================================================
//
// Crea un objeto llamado "producto" con:
//
// - nombre
// - precio
// - disponible
// - categorias
//
// "categorias" debe ser un array.
//
// Después:
// 1. Imprime el nombre.
// 2. Imprime el precio.
// 3. Comprueba si está disponible.
// 4. Imprime la primera categoría.
// 5. Agrega una nueva categoría.
// 6. Cambia el precio.
// 7. Comprueba el tipo de cada propiedad utilizando typeof.
// 8. Imprime el objeto completo.
// ============================================================

// Escribe tu código aquí:




// ============================================================
// RETO EXTRA — PREDICE ANTES DE EJECUTAR
// ============================================================
//
// Sin ejecutar el código, intenta predecir
// qué imprimirá cada línea:
//
// console.log(typeof "JavaScript");
// console.log(typeof 100);
// console.log(typeof 10.5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof NaN);
// console.log(typeof Infinity);
//
// Después ejecuta el código y compara tus respuestas.
// ============================================================

// Escribe tu código aquí:
