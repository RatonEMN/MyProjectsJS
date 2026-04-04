//1. Crea el html
//2. Seleccionar el DOM
//3. Crear el array en donde se guardaran los datos
//4. Cargar datos localmente
//5. Funcion de render
//6. Eventos: input, boton, clicks
//7. Funciones de logica CRUD
//8. Guardar datos en local storage


//---------------------Selecciono los elementos de mi DOM------------------
const inputTask = document.querySelector("#inputTask");
const btnSave = document.querySelector("#save");
const lisTask = document.querySelector("#tasks");
const listaUl = document.getElementById("mi-lista-dinamica");
const errores = document.querySelector("#errores");
const modal = document.getElementById("miModal");
const btnEliminar = document.querySelector("#eliminarModal");
const btnCancelar = document.querySelector("#cancelarModal");
const btnSaveModal = document.querySelector("#guardarModal");
const inputModal = document.querySelector("#tareaModal");
const estatusTarea = document.querySelector("#selectEstatus");

//Este es el array en el cual ya tengo datos precargados
const tareas = [
    { id: 1, tarea: "Lavar la ropa", estatus: "pendiente" },
    { id: 2, tarea: "Comprar pollito", estatus: "pendiente" }
];


//Aqui defino el nombre de mi array en el cual guardare los datos que obtengo del localStorage
let miArrayTareas;

// Aqui creo que usare para guardar los datos en el localStorage, y tambien nombro el nombre de mis datos que tengo en localStorage como "tareas"
let misTareas = localStorage.getItem("tareas");

//Aqui valido si existen datos en el localStorage:
if (misTareas === null) {
    // ESCENARIO 1: No hay nada guardado.
    // Usamos tus datos iniciales y los guardamos por primera vez
    miArrayTareas = tareas;
    //Debido a que en localStorage solo se puede guardar texto, convierto mi array de objetos a texto:
    localStorage.setItem("tareas", JSON.stringify(miArrayTareas));
    console.log("Se cargaron los datos iniciales por primera vez.");
} else {
    // ESCENARIO 2: Si ya habian datos en localStorage, no en mi array de objetos:
    // Lo "desempaquetamos" con JSON.parse, para convertir los datos de texto a un array de objetos
    miArrayTareas = JSON.parse(misTareas);
    console.log("Se cargaron los datos que ya estaban en memoria.");
}


//Aquie tengo un listener en el boton guardar, por medio del cual guardo nuevas tareas 
btnSave.addEventListener("click", function () {

    const inputTarea = inputTask.value.trim();

    // Ejecutamos la validación para revisar que el input no este vacio y atrapamos su respuesta
    if (validarInput(inputTarea) === false) {
        return; // ¡AQUÍ ESTÁ EL TRUCO! Detiene la función del botón por completo
    }

    //Leemos el valor del inputTask y construyo mi nueva tarea(objeto)
    const nuevaTarea = {
        id: Date.now(),
        tarea: inputTarea,
        estatus: "pendiente"
    };

    //Agrega mi nueva tarea(objeto) a mi array con el metodo push
    miArrayTareas.push(nuevaTarea);

    //En esta linea se remplazan todos los datos de "tareas" con el nuevo contenido de miArrayTareas
    localStorage.setItem("tareas", JSON.stringify(miArrayTareas));

    console.log(miArrayTareas);

    //Limpiamos el input
    inputTask.value = "";

    renderizar(miArrayTareas);

});


//Esta funcion me ayuda a validar si el input esta vacio
function validarInput(input) {
    if (input === "") {
        alert("No se aceptan campos vacios");
        return false;
    }
    return true;
};


//El objetivo de esta funcion es actualizar los datos que muestro en mi pagina
function renderizar(datos) {
    //Vamos a limpiar la lista para evitar algun dato duplicado:
    listaUl.innerHTML = "";

    //Creo un elemento <li> por cada item de mi array 
    datos.forEach(item => {
        const li = document.createElement("li");

        //Se usa un span para poder mostrar los datos, debido a que si usara un parrafo, se harian saltos de linea
        const span = document.createElement("span");
        span.textContent = item.tarea;

        const spanStatus = document.createElement("span");
        spanStatus.textContent = item.estatus;

        //Uso un boton para poder editar la tarea, y al boton, le asigno el valor del id
        const boton = document.createElement("button");
        boton.textContent = "Opciones";
        boton.classList.add("btn-editar");
        boton.dataset.id = item.id;

        //appendChild me permite crear los elementos dentro del elemento que yo le indique, en este caso sea crea el boton y el span dentro de cada li
        li.appendChild(boton);
        li.appendChild(spanStatus);
        li.appendChild(span);

        //Aqui sucede lo mismo, pero esta vez se crea el elemento dentro de mi etiqueta <ul>
        listaUl.appendChild(li);

    });


}

renderizar(miArrayTareas);


listaUl.addEventListener("click", function (e) {
    // 1. Verificamos si el elemento clicado tiene la clase 'btn-editar'
    if (e.target.classList.contains("btn-editar")) {

        // 2. Obtenemos el ID que guardamos en el atributo data-id
        const idAtrapado = e.target.getAttribute("data-id");

        // 3. Llamamos a la función con el ID (convertido a número)
        abrirModal(Number(idAtrapado));
    }
});

let idSeleccionado = null; // Variable global para saber qué estamos editando

function abrirModal(id) {
    // 1. Buscamos el objeto en nuestro array que coincida con el ID
    const itemAEditar = miArrayTareas.find(item => item.id === id);

    if (itemAEditar) {
        idSeleccionado = id; // Guardamos el ID para saber a quién actualizar luego

        // 2. Llenamos los inputs del modal con los datos actuales
        document.getElementById("tareaModal").value = itemAEditar.tarea;
        document.getElementById("selectEstatus").value = itemAEditar.estatus;

        // 3. Mostramos el modal (esto depende de tu CSS o librería)
        modal.style.display = "block";
    }
}


btnEliminar.addEventListener("click", function () {

    //Buscar el indice de mi item por medio del id
    let indice = miArrayTareas.findIndex(tarea => tarea.id === idSeleccionado); //El metodo findIndex recorre en el array de objetos la tarea con el id que coindica con el idSeleccionado

    //console.log(`Índice encontrado: ${indice}`); // Muestra el indice: ejemplo: 1

    //Eliminar del array con splice
    //Si el indice, no es igual a -1, entonces eliminamos el dato con el metodo splice en la posicion que indica el indice:
    if (indice !== -1) {
        miArrayTareas.splice(indice, 1); // (indice = posicion a eliminar , 1 = Cantidad de datos que queremos eliminar)
        console.log("✅Producto eliminado.");

    } else {
        console.log("El id seleccionado no existe");

    }

    //Guardar el nuevo array en localStorage
    localStorage.setItem("tareas", JSON.stringify(miArrayTareas));

    //Cerrar el modal
    cerrarModal();

    //LLamar la funcion renderizar
    renderizar(miArrayTareas);

});

btnSaveModal.addEventListener("click", function () {

    //Buscar el indice de mi item por medio del id
    let indice = miArrayTareas.findIndex(tarea => tarea.id === idSeleccionado); //El metodo findIndex recorre en el array de objetos la tarea con el id que coindica con el idSeleccionado

    const tareaEditada = inputModal.value.trim();
    const estatus = estatusTarea.value;


    // Ejecutamos la validación para revisar que el input no este vacio y atrapamos su respuesta
    if (validarInput(tareaEditada) === false) {
        return; // ¡AQUÍ ESTÁ EL TRUCO! Detiene la función del botón por completo
    }

    miArrayTareas[indice].tarea = tareaEditada;
    miArrayTareas[indice].estatus = estatus;


    //Guardar el nuevo array en localStorage
    localStorage.setItem("tareas", JSON.stringify(miArrayTareas));

    //Cerrar el modal
    cerrarModal();

    //LLamar la funcion renderizar
    renderizar(miArrayTareas);

});



btnCancelar.addEventListener("click", function () {
    cerrarModal();
});

function cerrarModal() {
    modal.style.display = "none";
}


//Para borrrar los datos de mi localStorage: localStorage.clear();

