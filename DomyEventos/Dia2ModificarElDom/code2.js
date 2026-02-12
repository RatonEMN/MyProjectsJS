// 1️⃣ Seleccionar:
// el <p> del número
// el botón +
// el botón -

// 2️⃣ Crear una variable contador iniciando en 0

// 3️⃣ Mostrar el valor del contador en el <p>

// 4️⃣ Al hacer click en +:
// sumar 1 al contador
// actualizar el texto

// 5️⃣ Al hacer click en -:
// restar 1 al contador
// evitar que baje de 0

// 6️⃣ Cuando el contador sea 0:
// el botón - debe estar deshabilitado
// el número debe verse gris

// 7️⃣ Cuando el contador sea mayor a 0:
// el botón - se habilita
// el número se pone verde


let contador = 0;

//Seleccionamos los elementos del DOM:
const textoParrafo = document.getElementById("numero");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const inputManual = document.getElementById("inputManual");
const btnActualizar = document.getElementById("btnActualizar");
const inputContador = document.getElementById("inputContador");

botonRestar.disabled = true;

//QUE PASARIA SI LLAMO A MI FUNCION ANTES DE SELECCIONARL EL DOM??
actualizarVista();

//Respuesta:
//Algunos elementos los marcaria como undefined, haciendo que no funcione.
//El orden correcto es el siguiente:
// 1️⃣ seleccionar DOM
// 2️⃣ lógica
// 3️⃣ eventos
// 4️⃣ actualizar vista




botonSumar.addEventListener("click",() => {
    cambiarContador(1);
});

botonRestar.addEventListener("click",() => {
    if(contador > 0){
    cambiarContador(-1);
    }
});


function cambiarContador(valor) {
  contador += valor; // contador = contador + (valor)
  actualizarVista();
}

//ATAJOS CON SIGNOS:
// contador += 1;   // contador = contador + 1
// total -= 5;     // total = total - 5
// precio *= 2;    // precio = precio * 2
// tiempo /= 2;    // tiempo = tiempo / 2

// 2. Escuchamos el evento click del nuevo botón
btnActualizar.addEventListener("click", () => {
    // Leemos el .value del input
    // Ojo: el value siempre viene como texto, así que usamos Number() para convertirlo
    const nuevoValor = Number(inputManual.value);

    if (!isNaN(nuevoValor) && nuevoValor >= 0) {
        contador = nuevoValor; // Cambiamos nuestra variable global
        actualizarVista();      // Refrescamos la interfaz
        
        // Ejemplo de modificación: Limpiar el input después de usarlo
        inputManual.value = ""; 
    } else {
        alert("Por favor, ingresa un número válido (mayor o igual a 0)");
    }
});


inputContador.addEventListener("input", () => {
  let nuevoValor = parseInt(inputContador.value);

  if (isNaN(nuevoValor) || nuevoValor < 0) {
    nuevoValor = 0;
  }

  contador = nuevoValor;
  actualizarVista();
});


function actualizarVista() {
    textoParrafo.textContent = contador;
    inputContador.value = contador; // 👈 AQUÍ USAMOS value
    
    if(contador === 0) { 
        botonRestar.disabled = true;
            textoParrafo.classList.remove("activo");
            textoParrafo.classList.add("oculto");
        textoParrafo.style.backgroundColor = "white";
    }else{
        botonRestar.disabled = false;
        textoParrafo.classList.remove("oculto");
        textoParrafo.classList.add("activo");
        textoParrafo.style.backgroundColor = "yellow";
    }
    
};
