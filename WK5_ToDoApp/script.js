//1. Crea el html
//2. Seleccionar el DOM
//3. Crear el array en donde se guardaran los datos
//4. Cargar datos localmente
//5. Funcion de render
//6. Eventos: input, boton, clicks
//7. Funciones de logica CRUD
//8. Guardar datos en local storage

const inputTask = document.querySelector("#inputTask");
const btnSave = document.querySelector("#save");

const lisTask = document.querySelector("#tasks");

const listaUl = document.getElementById("mi-lista-dinamica");

    //Este es mi array en donde guardare mis tareas
const tareas = [
    {id:1, tarea:"Lavar la ropa", estatus:"pendiente"},
    {id:2, tarea:"Comprar pollito", estatus:"pendiente"}
];

btnSave.addEventListener("click",function(){
    //Leemos el valor del inputTask
    const nuevaTarea = {
        id: tareas.length + 1,
        tarea: inputTask.value,
        estatus: "pendiente"   
    };
    
    tareas.push(nuevaTarea);

    console.log(tareas);

    //Limpiamos el input
    inputTask.value = "";

    renderizar(tareas);

});


function renderizar(datos){
    //Vamos a limpiar la lista para evitar algun dato duplicado:
    listaUl.innerHTML = "";

    datos.forEach(item => {
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.textContent = item.tarea;

        const boton = document.createElement("button");
        boton.textContent = "Opciones";
        boton.dataset.id = item.id; 

        li.appendChild(boton);
        li.appendChild(span);
        listaUl.appendChild(li);

    });

    
}

renderizar(tareas);

//CRUD ---------> Create Read Update Delete

//Se crea una funcion para renderizar, hay que explicar lo que hace cada linea, hay que hacer crud en las tareas, 
// hay que guardar los datos en local storage