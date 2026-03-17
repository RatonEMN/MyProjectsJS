// Repasar selectores
// Pregúntate:
// ¿Cuál regresa un solo elemento?

boton = document.getElementById("btn");
inputNombre = document.querySelector("#nombre_input");

formulario = document.querySelector("#formulario");
nombre_form = document.querySelector("#nombre");
correo_form = document.querySelector("#correo");
errores = document.querySelector("#errores");
resultado = document.querySelector("#resultado");

inputCiudad = document.querySelector("#ciudad");
textoDiv = document.querySelector("#textoDiv");
let inputComida = document.querySelector("#comida");
let parrafoComida = document.querySelector("#parrafoComida");

// ¿Cuál regresa una lista?

parrafoNombre = document.querySelector("#parrafoNombre");
//Aqui esta mal la respuesta, esto no esta regrensando una lista

// ¿Cuál acepta cualquier selector CSS?

parrafosCiudad = document.querySelectorAll(".texto");





//---------------------------------------EVENTOS-------------------------------------------------------- 

//Click
boton.addEventListener("click", function(){
    textoDiv.innerHTML += "<br>hiciste click";
});


//Input1
inputNombre.addEventListener("input",function(event){
    parrafoNombre.textContent = event.target.value || "Esperando que escribas...";
});

//Input2
inputCiudad.addEventListener("input",function(event){
    const valor = event.target.value;

    // Recorremos cada párrafo de la lista
    parrafosCiudad.forEach(p => {
        p.textContent = valor;
    });
});


// submit

formulario.addEventListener("submit", validarDatos);

function validarDatos(event) {
    event.preventDefault();

    errores.innerHTML = "";

    let hayErrores = false;

    const nombre = nombre_form.value.trim();
    const correo = correo_form.value;

    if (nombre === "") {
        hayErrores = true;
        errores.innerHTML += "El nombre es obligatorio <br>";
    }

    if (!correo.includes("@")) {
        hayErrores = true;
        errores.innerHTML += "El correo es obligatorio <br>";
    }

    if (hayErrores) {
        resultado.innerHTML = "";
        return;
    }

    mostrarDatos(nombre,correo);

}


function mostrarDatos(nombre,correo) {
    
    resultado.innerHTML = `El nombre es ${nombre} y el correo es ${correo}`;

}


// change

inputComida.addEventListener("change",function(event){
    console.log("funciona")
    parrafoComida.textContent = event.target.value || "Esperando que escribas...";
});