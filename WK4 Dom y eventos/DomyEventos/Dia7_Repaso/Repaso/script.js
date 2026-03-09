// Repasar selectores
// Pregúntate:
// ¿Cuál regresa un solo elemento?

boton = document.getElementById("btn");
inputNombre = document.querySelector("#nombre");
inputCiudad = document.querySelector("#ciudad");

// ¿Cuál regresa una lista?

parrafoNombre = document.querySelector("#parrafoNombre");

// ¿Cuál acepta cualquier selector CSS?

parrafosCiudad = document.querySelectorAll(".texto");



textoDiv = document.querySelector("#textoDiv");


//Eventos 

//Click
boton.addEventListener("click", function(){
    textoDiv.innerHTML += "hiciste click";
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

// change

