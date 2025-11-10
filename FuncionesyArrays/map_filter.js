//Usa map y filter para transformar o filtrar datos (por ejemplo, calificaciones de alumnos)

const calificaciones = [32,45,50,65,75,100];

const cal_map = calificaciones.map(puntos_extra => puntos_extra + 10);

const cal_aprobadas = calificaciones.filter(aprobados => aprobados > 50);

const cal_aprobadas_extra = cal_map.filter(aprobados => aprobados > 50);

console.log("-----Lista de calificaciones-------");
console.log(calificaciones);

console.log("-----Calificaciones mas 10 puntos extra-------");
console.log(cal_map);

console.log("-----Solo calificaciones aprobadas-------");
console.log(cal_aprobadas);


console.log("-----Calificaciones aprobadas con puntos extra-------");
console.log(cal_aprobadas_extra);