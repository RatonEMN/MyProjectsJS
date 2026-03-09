// Aquí va TODO tu JavaScript

// 1️⃣ Selecciona el h2 usando getElementById
// 2️⃣ Selecciona el form usando querySelector
// 3️⃣ Selecciona todos los p usando querySelectorAll
// 4️⃣ Selecciona el input usando un selector por atributo
// 5️⃣ Selecciona los 2 botones usando su clase

//1.
const tituloH2 = document.getElementById("titulo");
console.log(tituloH2);

//2.
const formulario = document.querySelector("form");
console.log(formulario);

//3.
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

//4.
const inputAtributo = document.querySelector("input[type='email']");
console.log(inputAtributo);

//5
const botones = document.querySelectorAll(".btn");
console.log(botones);
