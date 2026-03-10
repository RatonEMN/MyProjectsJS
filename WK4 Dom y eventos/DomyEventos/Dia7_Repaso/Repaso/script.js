// Repasar selectores
// Pregúntate:
// ¿Cuál regresa un solo elemento?

boton = document.getElementById("btn");
inputNombre = document.querySelector("#nombre");
inputCiudad = document.querySelector("#ciudad");
textoDiv = document.querySelector("#textoDiv");
let inputComida = document.querySelector("#comida");
let parrafoComida = document.querySelector("#parrafoComida");

// ¿Cuál regresa una lista?

parrafoNombre = document.querySelector("#parrafoNombre");
//Aqui esta mal la respuesta, esto no esta regrensando una lista

// ¿Cuál acepta cualquier selector CSS?

parrafosCiudad = document.querySelectorAll(".texto");





//Eventos 

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

//formulario.addEventListener("submit", validarDatos);


// change

inputComida.addEventListener("change",function(event){
    console.log("funciona")
    parrafoComida.textContent = event.target.value || "Esperando que escribas...";
});