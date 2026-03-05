//1. Seleccionar DOM
//2. Crear funciones matemáticas
//3. Crear función obtenerValores()
//4. Crear función mostrarResultado()
//5. Agregar event listeners
//6. Crear función limpiar()
// Y la validación:
//  - Números → en obtenerValores()
//  - División entre cero → dentro de dividir()



let operacionActual = null;

//1. Seleccionamos los elementos del DOM:
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");
const botonIgual = document.getElementById("igual");
const botonLimpiar = document.getElementById("limpiar");
const inputResultado = document.getElementById("resultado");



function multiplicar(a,b){
    return a * b;
}


function sumar(a,b){
    return  a + b;
}

function restar(a,b){
    return  a -  b;
}

function dividir(a,b){
    if(b === 0){
        alert("No es posible divir entre 0");
        return;
    } 
    return  a /  b;
    
}

botonMultiplicar.addEventListener("click", () => {
    operacionActual = multiplicar;
});

botonSumar.addEventListener("click", () => {
    operacionActual = sumar;
});


botonRestar.addEventListener("click", () => {
    operacionActual = restar;
});


botonDividir.addEventListener("click", () => {
    operacionActual = dividir;
});


botonIgual.addEventListener("click", () => {
    let resultado = 0;
    const numeros = obtenerValores();

    if(!numeros) return; //Valida que mi objeto numeros, no reciba undefined, si es asi, se detiene la ejecucion
    if (!operacionActual){
        alert("Selecciona una operación");
        return;
    }

    resultado = operacionActual(numeros.no1,numeros.no2);
    actualizarVista(resultado);
});


botonLimpiar.addEventListener("click", () => {
    clearContent();
});




function obtenerValores(){

    const valor1 = num1.value.trim();
    const valor2 = num2.value.trim();

    // 1️⃣ Validar vacío
    if (valor1 === "" || valor2 === "") {
        alert("Ambos campos son obligatorios");
        return;
    }

    // 2️⃣ Convertir a número
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    // 3️⃣ Validar que sean números reales
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Ingresa números válidos");
        return;
    }

    // 4️⃣ Si todo está bien, devolver objeto
    return {
        no1: numero1,
        no2: numero2
    };
}

function clearContent(){
    operacionActual = null;
    inputResultado.textContent = resultado;
    num1.value = "";
    num2.value = "";
}


function actualizarVista(resultado){
    inputResultado.textContent = resultado;

}