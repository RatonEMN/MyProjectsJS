// 1️⃣ Importamos prompt-sync para leer datos del usuario
var prompt = require("prompt-sync")();


// 2️⃣ Paso 1: pedir nombre
function pedirNombre(callback) {
  console.log("Paso 1: Ingresa tu nombre");

  setTimeout(function () {
    var nombre = prompt("Nombre: "); // entrada del usuario
    console.log("Nombre recibido:", nombre);

    callback(nombre); // pasamos el resultado al siguiente paso
  }, 1000);
}


// 3️⃣ Paso 2: pedir edad
function pedirEdad(nombre, callback) {
  console.log("Paso 2: Ingresa tu edad");

  setTimeout(function () {
    var edad = prompt("Edad: ");
    console.log("Edad recibida:", edad);

    callback(nombre, edad); // pasamos ambos datos
  }, 1000);
}


// 4️⃣ Paso 3: mostrar resultado
function mostrarResultado(nombre, edad, callback) {
  console.log("Paso 3: Mostrando resultado");

  setTimeout(function () {
    console.log("Hola " + nombre + ", tienes " + edad + " años");

    callback(); // último paso
  }, 1000);
}


// ❌ Callback Hell (anidado)
pedirNombre(function (nombre) {

  pedirEdad(nombre, function (nombre, edad) {

    mostrarResultado(nombre, edad, function () {

      console.log("Fin del proceso");

    });

  });

});



// paso1(function () {
//   paso2(function () {
//     console.log("Fin");
//   });
// });





// function despuesDePaso2() {
//   console.log("Fin");
// }

// function despuesDePaso1() {
//   paso2(despuesDePaso2);
// }

// paso1(despuesDePaso1);





function paso1(callback) {
  setTimeout(function () {
    console.log("Paso 1 listo");
    callback();
  }, 1000);
}

function paso2(callback) {
  setTimeout(function () {
    console.log("Paso 2 listo");
    callback();
  }, 1000);
}

function paso3(callback) {
  setTimeout(function () {
    console.log("Paso 3 listo");
    callback();
  }, 1000);
}


// // ❌ Callback hell (anónimo)
// paso1(function () {

//   paso2(function () {

//     paso3(function () {

//       console.log("Proceso terminado");

//     });

//   });

// });




// 1️⃣ función para el último paso
function despuesDePaso3() {
  console.log("Proceso terminado");

}

// 2️⃣ función después de paso2
function despuesDePaso2() {
  paso3(despuesDePaso3);
     
}

// 3️⃣ función después de paso1
function despuesDePaso1() {
  paso2(despuesDePaso2);

}

// 4️⃣ iniciar proceso
paso1(despuesDePaso1);
