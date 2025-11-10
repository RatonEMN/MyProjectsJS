//Usa map y filter para transformar o filtrar datos (por ejemplo, calificaciones de alumnos)

//Declaro mi arreglo de calificaciones
const calificaciones = [32,45,50,65,75,100];

//Le agrego 10 puntos extra a mi arreglo de calificaciones original
const cal_map = calificaciones.map(puntos_extra => puntos_extra + 10);

//Filtro las calificaciones que sean mayor a 50
const cal_aprobadas = calificaciones.filter(aprobados => aprobados > 50);

//Filtro nuevamente las calificaciones de mi arreglo map que sean mayor a 50 
const cal_aprobadas_extra = cal_map.filter(aprobados => aprobados > 50);

//Imprimo mis resultados

console.log("-----Lista de calificaciones-------");
console.log(calificaciones);

console.log("-----Calificaciones mas 10 puntos extra-------");
console.log(cal_map);

console.log("-----Solo calificaciones aprobadas-------");
console.log(cal_aprobadas);


console.log("-----Calificaciones aprobadas con puntos extra-------");
console.log(cal_aprobadas_extra);