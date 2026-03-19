//Seleccionar mis elementos
//Crear funciones que sumen y resten
//Puedo crear una variable global, que sea la que se actulice
//Validar que no reste si es menor que 0
//Crear los escuhadores(funciones)


const btn_sumar = document.querySelector("#sumar");
const btn_restar = document.querySelector("#restar");
const parrafo_contador = document.querySelector("#contador");

contador = 0;

actulizar_dom();

function actualizar_contador(numero){
    contador += numero;
    actulizar_dom();
}

btn_sumar.addEventListener("click",function(){
    actualizar_contador(+1);
});


btn_restar.addEventListener("click",function(){
    actualizar_contador(-1);
});



function actulizar_dom(){
    parrafo_contador.textContent = contador;
    
    if(contador === 0){
        btn_restar.disabled = true;
    } 
    else{
        btn_restar.disabled = false;
    }
}