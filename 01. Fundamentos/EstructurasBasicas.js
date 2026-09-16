// ======================================================
console.log(" --------EJERCICIO 1 — CLASIFICADOR DE EDAD---------- ");
// ======================================================

// Crea un programa que reciba la edad de una persona
// y muestre:
//
// Menor de 12      → "Niño"
// De 12 a 17       → "Adolescente"
// De 18 a 59       → "Adulto"
// 60 o más         → "Adulto mayor"
// Menor que 0      → "Edad inválida"
//
// Utiliza:
// - if
// - else if
// - else
    //
// Dato inicial:

let edad = 60;

// Escribe tu solución aquí:

if (edad < 0) {
    console.log("Edad invalida");
} else if (edad >= 60) {
  console.log("Adulto mayor");
} else if (edad >= 18) {
    console.log("Adulto");
} else if (edad >= 12) {
    console.log("Adolescente");
} else {
    console.log("Niño");
}

// ======================================================
console.log(" --------EJERCICIO 2 — MENÚ DE OPERACIONES--------- ");
// ======================================================

// Crea un programa que reciba una opción y dos números.
//
// Dependiendo de la opción:
//
// 1 → Sumar
// 2 → Restar
// 3 → Multiplicar
// 4 → Dividir
//
// Si la opción no es válida:
// "Opción inválida"
//
// Además, evita realizar una división entre cero.
//
// Utiliza:
// - switch
// - case
// - break
// - default
// - if / else
    //
// Datos iniciales:

let opcion = 4;
let numero1 = 0;
let numero2 = 5;

// Escribe tu solución aquí:

switch (opcion) {
    case 1:
        console.log(
            `La suma de ${numero1} + ${numero2} es: ` + (numero1 + numero2),
        );
        break;
        
        case 2:
            console.log(
                `La resta de ${numero1} - ${numero2} es: ` + (numero1 - numero2),
            );
            break;
            
  case 3:
      console.log(
          `La multiplicacion de ${numero1} * ${numero2} es: ` + numero1 * numero2,
        );
        break;
        
        case 4:
    if (numero2 === 0) {
        console.log("No se puede dividir entre 0");
    } else {
        console.log(
            `La division de ${numero1} / ${numero2} es: ` + numero1 / numero2,
        );
    }
    break;
    
    default:
        console.log("Opcion invalida");
        break;
    }
    
    // ======================================================
    console.log(" --------EJERCICIO 3 — VALIDACIÓN DE USUARIO--------- ");
    // ======================================================
    
    // Valida los datos de un usuario.
//
// Reglas:
//
// 1. Si usuario o password están vacíos:
//    "Faltan datos"
//
// 2. Si los datos son correctos pero el usuario
//    está inactivo:
//    "Usuario inactivo"
//
// 3. Si usuario, password y estado son correctos:
//    "Acceso permitido"
//
// 4. En cualquier otro caso:
//    "Usuario o contraseña incorrectos"
//
// Utiliza:
// - if / else if / else
// - &&
// - ||
// - !
// - Truthy / Falsy
//
// Datos iniciales:

let usuario = "admin";
let password = "12345";
let activo = true;

// Opcional:
// Puedes crear una variable booleana a partir de "activo"
// utilizando !!
//
// Ejemplo:
// let usuarioActivo = !!activo;

// Escribe tu solución aquí:


if (!usuario || !password) {
    console.log("Faltan datos");
}else if(usuario === "admin" && password === "12345" && !activo){
    console.log("Usuario inactivo");
}else if (usuario === "admin" && password === "12345" && activo) {
    console.log("Acceso permitido");
}else{
    console.log("Usuario o contraseña incorrectos");
}