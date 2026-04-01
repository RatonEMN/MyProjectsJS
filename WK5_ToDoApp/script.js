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

    //Este es mi array en donde guardare mis tareas
const tareas = ["Lavar los trastes","Lavar la ropa"];

btnSave.addEventListener("click",function(){
    //Leemos el valor del inputTask
    const nuevaTarea = inputTask.value;
    
    tareas.push(nuevaTarea);

    console.log(tareas);

    //Limpiamos el input
    inputTask.value = "";

});


//Tengo que cambiar mi array, a un array de objetos, para guardar el estado de las tareas, tambien es recomenable asignarles un numero ID para que sea mas facil hacer el CRUD
//CRUD ---------> Create Read Update Delete