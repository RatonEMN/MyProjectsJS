
// ============================================================
console.log(`----------- 1. OPERADORES ARITMÉTICOS ------------`)
// ============================================================
//
// Crea dos variables:
//
// numero1 = 25
// numero2 = 4
//
// Calcula e imprime:
// 1. La suma
// 2. La resta
// 3. La multiplicación
// 4. La división
// 5. El residuo
// 6. La potencia de numero1 elevado a numero2
//
// Utiliza console.log() para comprobar tus resultados.
// ============================================================

// Escribe tu código aquí:

let numero1 = 25;
let numero2 = 4;

console.log(`La suma de ${numero1} y ${numero2} es = `+(numero1+numero2));
console.log(`La resta de ${numero1} y ${numero2} es = `+(numero1-numero2));
console.log(`La multiplicacion de ${numero1} y ${numero2} es = `+numero1*numero2);
console.log(`La division de ${numero1} y ${numero2} es = `+numero1/numero2);
console.log(`El residuo de ${numero1} y ${numero2} es = `+numero1%numero2);
console.log(`La potencia del ${numero1} elevado a ${numero2} es = `+numero1**numero2);

// ============================================================
console.log(`--------- 2. OPERADORES DE COMPARACIÓN ------------`);
// ============================================================
//
// Crea:
//
// let edad = 21;
//
// Utiliza operadores de comparación para comprobar:
// 1. Si la edad es mayor o igual a 18.
// 2. Si la edad es menor que 30.
// 3. Si la edad es exactamente 21.
// 4. Si la edad es diferente de 25.
//
// Imprime cada resultado.
//
// IMPORTANTE:
// Utiliza === y !==.
// No utilices if todavía.
// ============================================================

// Escribe tu código aquí:
let edad = 21;

console.log(`La edad es mayor o igual a 18? `+(edad >= 18));
console.log(`La edad es menor a 30? `+ (edad < 30));
console.log(`La edad es igual a 21? `+ (edad === 21));
console.log(`La edad es diferente a 25? `+ (edad !== 25));


// ============================================================
console.log(`------------ 3. OPERADORES LÓGICOS -------------`)
// ============================================================
//
// Crea las siguientes variables:
//
// let edad = 20;
// let tieneIdentificacion = true;
// let tieneBoleto = false;
// let esVIP = true;
//
// Después determina:
//
// 1. ¿Puede entrar por ser mayor de edad Y tener identificación?
//      Si puede entrar
//
// 2. ¿Puede entrar por tener boleto O ser VIP?
//      Si puede entrar
// 3. ¿NO es VIP?
//      Si es VIP
// 4. Crea una condición llamada puedeEntrar que permita
//    entrar si:
//
//    - es mayor de edad Y tiene identificación
//      O
//    - es VIP
//
// Imprime todos los resultados.
//
// PISTA:
// Necesitarás utilizar &&, ||, ! y paréntesis.
// ============================================================

// Escribe tu código aquí:

let miEdad = 18;
let tieneIdentificacion = true;
let tieneBoleto = false;
let esVIP = true;

let puedeEntrar = (miEdad>=18 && tieneIdentificacion) || esVIP;

console.log(puedeEntrar);