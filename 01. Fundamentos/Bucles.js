console.log("========== EJERCICIO 1: CONTAR NÚMEROS ==========");

/*
Crea un bucle que imprima los números del 1 al 10.

Objetivo:

* Practicar el bucle for.
* Practicar inicialización, condición y actualización.
  */

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

console.log("========== EJERCICIO 2: NÚMEROS PARES ==========");

/*
Crea un bucle que recorra los números del 1 al 20.

Imprime únicamente los números pares.

Objetivo:

* Practicar for.
* Practicar if.
* Practicar el operador %.
  */

for (let i = 1; i <= 20; i++) {
    if((i%2)==0){
        console.log(i);
    }
    
}

console.log("========== EJERCICIO 3: SUMA ACUMULATIVA ==========");

/*
Crea un programa que sume todos los números del 1 al 100.

Al finalizar, imprime el resultado.

Objetivo:

* Practicar una variable acumuladora.
* Practicar for.
  */

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma = suma + i;
    console.log(suma);
}

console.log(suma);

console.log("========== EJERCICIO 4: RECORRER UN ARRAY ==========");

/*
Crea el siguiente array:

const frutas = ["manzana", "pera", "plátano", "naranja", "uva"];

Recorre el array e imprime cada fruta.

Objetivo:

* Practicar for...of.
  */

console.log("========== EJERCICIO 5: BUSCAR UN ELEMENTO ==========");

/*
Crea el siguiente array:

const numeros = [4, 8, 15, 23, 42, 50];

Busca el número 23.

Si lo encuentras, imprime:
"Encontré el número"

Utiliza break para detener el bucle cuando encuentres el número.

Objetivo:

* Practicar for.
* Practicar if.
* Practicar break.
  */

console.log("========== EJERCICIO 6: RECORRER UN OBJETO ==========");

/*
Crea el siguiente objeto:

const usuario = {
nombre: "Emanuel",
edad: 30,
activo: true
};

Recorre el objeto e imprime cada propiedad y su valor.

El resultado debería mostrar algo parecido a:

nombre: Emanuel
edad: 30
activo: true

Objetivo:

* Practicar for...in.
* Practicar acceso a propiedades mediante [].
  */

console.log("========== EJERCICIO 7: VALIDAR UNA ENTRADA ==========");

/*
Crea una variable llamada numero.

Utiliza un while para repetir el proceso mientras numero sea
menor que 10.

Dentro del bucle:

* Imprime el valor actual de numero.
* Aumenta numero en 1.

Después, utiliza un do...while para hacer un ejemplo donde
el código se ejecute al menos una vez.

Objetivo:

* Practicar while.
* Practicar do...while.
* Entender la diferencia entre ambos.
  */

console.log("========== RETO FINAL: FILTRAR NÚMEROS ==========");

/*
Crea el siguiente array:

const numeros = [3, 8, 12, 5, 20, 7, 14, 1, 30];

Recorre el array y:

1. Imprime únicamente los números mayores que 10.
2. No imprimas los números menores o iguales a 10.
3. Cuando encuentres el número 30, utiliza break para
   terminar el recorrido.

Objetivo:

* Combinar array.
* for...of.
* if.
* operadores de comparación.
* break.

No utilices filter(). Resuélvelo utilizando un bucle.
*/
